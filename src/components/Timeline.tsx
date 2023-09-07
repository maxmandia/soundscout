'use client'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useUser } from '@clerk/nextjs'
import { Tracks } from '@/interfaces/prisma'
import { PlayIcon, OpenInNewWindowIcon, StopIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import useSWRInfinite from 'swr/infinite'
import moment from 'moment'

interface Data {
  data: Tracks[]
  next: number | null
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Timeline() {
  const lastElementRef = useRef(null)
  const { user } = useUser()
  const currentAudio = useRef<HTMLAudioElement | null>(null)
  const playingTrackId = useRef<string | null>(null)
  const [_, setTriggerRerender] = useState(false)

  const getKey = (pageIndex: number, previousPageData: { next: number }) => {
    if (!user?.id) {
      return null
    }
    if (!previousPageData) {
      return `http://localhost:3000/api/get-user-timeline?userId=${user.id}&page=0`
    } else {
      return `http://localhost:3000/api/get-user-timeline?userId=${user.id}&page=${previousPageData.next}`
    }
  }

  const { data, isLoading, setSize } = useSWRInfinite<Data>(getKey, fetcher)

  useEffect(() => {
    console.log(data)
  }, [data])

  function playSound(trackId: string, preview_url: string | null) {
    if (!preview_url) return

    if (currentAudio.current) {
      currentAudio.current.pause()
      if (playingTrackId.current === trackId) {
        playingTrackId.current = null
        setTriggerRerender((prev) => !prev)
        return
      }
    }

    currentAudio.current = new Audio(preview_url)
    currentAudio.current.play()
    playingTrackId.current = trackId
    setTriggerRerender((prev) => !prev)
  }

  useEffect(() => {
    let observer: IntersectionObserver
    const currentRef = lastElementRef.current

    if (currentRef) {
      observer = new IntersectionObserver(
        (entries) => {
          const firstEntry = entries[0]
          if (firstEntry.isIntersecting) {
            setSize((prev) => prev + 1)
          }
        },
        { threshold: 1.0 } // threshold of 1.0 implies that the entire element is visible
      )

      observer.observe(currentRef)
    }

    return () => observer && observer.unobserve(currentRef)
  }, [data]) // Dependency on data so it re-runs when data changes

  function renderDate(
    release_date: string,
    release_date_next: string,
    index: number
  ): string | null {
    if (index === 0) {
      const fromNow = moment(release_date).fromNow()
      return fromNow
    }

    // compare both dates
    let currentTrackDate = moment(release_date).fromNow()
    let nextTrackDate = moment(release_date_next).fromNow()

    if (currentTrackDate === nextTrackDate) {
      return null
    } else {
      return currentTrackDate
    }
  }

  if (isLoading) {
    return <p>loading</p>
  }

  if (data) {
    return (
      <div className="flex-grow overflow-scroll bg-bg-dark px-4 lg:m-auto lg:w-[600px]">
        {data.map((songs, index) => {
          if (songs.length === 0) {
            return <p key={index}>Start by following an artist</p>
          }

          return songs.data.map((track, trackIndex) => {
            const isLastElement =
              index === data.length - 1 && trackIndex === songs.data.length - 1
            let date

            if (trackIndex === songs.data.length - 1) {
              date = null
            } else {
              date = renderDate(
                track.release_date,
                songs.data[trackIndex + 1].release_date,
                trackIndex
              )
            }

            return (
              <div key={track.id}>
                {date && (
                  <p className="px-2 py-[6px] text-[14px] font-light">{date}</p>
                )}
                <div
                  ref={isLastElement ? lastElementRef : null}
                  className="mb-5 flex items-center justify-between rounded-[6px] bg-input-bg p-3"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      className="h-[50px] w-[50px] rounded-[4px]"
                      width={50}
                      height={50}
                      src={track.track_image}
                      alt={'track image'}
                    />
                    <div className="flex flex-col justify-evenly">
                      <h3 className="text-[12px]">{track.track_name}</h3>
                      <h3 className="text-[10px]">
                        {track.all_artists
                          .map((artist) => artist.name)
                          .join(', ')}
                      </h3>
                      <a
                        href={track.external_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-[2px] text-[10px] text-input-txt underline"
                      >
                        <OpenInNewWindowIcon height={10} width={10} /> Open in
                        Spotify
                      </a>
                    </div>
                  </div>
                  <div
                    onClick={() => playSound(track.id, track.preview_url)}
                    className="rounded-full bg-[#1DB954] p-2"
                  >
                    {playingTrackId.current === track.id ? (
                      <StopIcon height={15} width={15} />
                    ) : (
                      <PlayIcon />
                    )}
                  </div>
                </div>
              </div>
            )
          })
        })}
      </div>
    )
  }
}

export default Timeline

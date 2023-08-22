'use client'
import React, { useEffect, useState, useRef } from 'react'
import { useUser } from '@clerk/nextjs'
import { Tracks } from '@/interfaces/prisma'
import { PlayIcon, OpenInNewWindowIcon, StopIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

function Timeline() {
  const { user } = useUser()
  const [tracks, setTracks] = useState<Tracks[] | []>([])
  const currentAudio = useRef<HTMLAudioElement | null>(null)
  const playingTrackId = useRef<string | null>(null)
  const [triggerRerender, setTriggerRerender] = useState(false)

  async function getTimelineData() {
    if (!user) {
      return
    }
    try {
      let resp = await fetch(
        `http://localhost:3000/api/get-user-timeline?userId=${user.id}`
      )
      let data = await resp.json()
      console.log(data)
      setTracks(data)
    } catch (error) {
      console.log(error)
    }
  }

  function playSound(trackId: string, preview_url: string) {
    if (currentAudio.current) {
      currentAudio.current.pause()
      if (playingTrackId.current === trackId) {
        playingTrackId.current = null
        setTriggerRerender((prev) => !prev) // Toggle to trigger re-render
        return
      }
    }

    currentAudio.current = new Audio(preview_url)
    currentAudio.current.play()
    playingTrackId.current = trackId
    setTriggerRerender((prev) => !prev) // Toggle to trigger re-render
  }

  useEffect(() => {
    if (user) {
      getTimelineData()
    }
  }, [user])

  if (tracks.length === 0) {
    return null
  }

  return (
    <div className="flex-grow overflow-scroll bg-bg-dark px-4">
      {tracks.map((track) => {
        return (
          <div
            key={track.id}
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
                  {track.all_artists.map((artist) => artist.name).join(', ')}
                </h3>
                <a
                  href={track.external_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-[2px] text-[10px] text-input-txt underline"
                >
                  <OpenInNewWindowIcon height={10} width={10} /> Open in Spotify
                </a>
              </div>
            </div>
            <div
              onClick={() => playSound(track.id, track.preview_url)}
              className="rounded-full bg-[#1DB954] p-2"
            >
              {playingTrackId.current === track.id ? (
                <StopIcon height={18} width={18} />
              ) : (
                <PlayIcon />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Timeline

'use client'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { Tracks } from '@/interfaces/prisma'
import { PlayIcon, OpenInNewWindowIcon, StopIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

function Timeline() {
  const { user } = useUser()
  const [tracks, setTracks] = useState<Tracks[] | []>([])
  let currentAudio: HTMLAudioElement | null = null
  let isPlaying = false

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

  function playSound(preview_url: string) {
    if (isPlaying && currentAudio?.currentSrc !== preview_url) {
      currentAudio?.pause()
      currentAudio = new Audio(preview_url)
      currentAudio.play()
      return
    }

    if (!isPlaying && currentAudio?.currentSrc !== preview_url) {
      currentAudio = new Audio(preview_url)
      isPlaying = true
      currentAudio.play()
      return
    }

    if (isPlaying) {
      isPlaying = false
      currentAudio?.pause()
      return
    } else {
      isPlaying = true
      currentAudio?.play()
    }
  }

  useEffect(() => {
    if (user) {
      getTimelineData()
    }
  }, [user])

  if (!tracks) {
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
              onClick={() => playSound(track.preview_url)}
              className="rounded-full bg-[#1DB954] p-2"
            >
              {/* {audioUrl === track.preview_url ? (
                <StopIcon height={18} width={18} />
              ) : ( */}
              <PlayIcon />
              {/* )} */}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Timeline

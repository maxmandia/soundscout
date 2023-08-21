import React from 'react'
import { Tracks } from '@/interfaces/prisma'
import Image from 'next/image'
import { PlayIcon, OpenInNewWindowIcon } from '@radix-ui/react-icons'

interface Props {
  track: Tracks
}

function Track(props: Props) {
  const { track } = props
  return (
    <div className="mb-5 flex items-center justify-between rounded-[6px] bg-input-bg p-3">
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
      <div className="rounded-full bg-[#1DB954] p-2">
        <PlayIcon height={18} width={18} />
      </div>
    </div>
  )
}

export default Track

'use client'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Track from './Track'
import { Tracks } from '@/interfaces/prisma'

function Timeline() {
  const { user } = useUser()
  const [tracks, setTracks] = useState<Tracks[] | []>([])

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

  useEffect(() => {
    if (user) {
      getTimelineData()
    }
  }, [user])

  return (
    <div className="flex-grow overflow-scroll bg-bg-dark px-4">
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  )
}

export default Timeline

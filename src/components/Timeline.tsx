'use client'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

function Timeline() {
  const { user } = useUser()

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
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      getTimelineData()
    }
  }, [user])

  return <div>Timeline</div>
}

export default Timeline

import React from 'react'

async function getTimelineData() {
  try {
    let data = await fetch('http://localhost:3000/api/timeline')
  } catch (error) {}
}

function Timeline() {
  return <div>Timeline</div>
}

export default Timeline

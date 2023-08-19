import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/config/prisma'

export async function GET() {
  try {
    // get all artist ids in the db
    let artistData = await prisma.artist.findMany()

    let spotResp = await fetch(
      `https://api.spotify.com/v1/artists/${artist.id}/albums`,
      { headers }
    )
    let { items } = await spotResp.json()

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error(error)
    NextResponse.error()
  }
}

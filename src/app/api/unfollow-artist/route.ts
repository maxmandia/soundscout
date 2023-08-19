import { NextRequest, NextResponse } from 'next/server'
import { ArtistInterface } from '@/interfaces/ArtistInterface'
import { prisma } from '@/config/prisma'

interface Data {
  user_id: string
  artist: ArtistInterface
}

export async function PUT(req: NextRequest) {
  try {
    let data = await req.json()
    const { user_id, artist }: Data = data

    let artist_id = artist.id

    if (!user_id || !artist) {
      return NextResponse.error()
    }

    await prisma.user_Artist.delete({
      where: {
        user_id_artist_id: {
          user_id: user_id,
          artist_id: artist_id
        }
      }
    })

    return NextResponse.json({
      status: 'ok'
    })
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}

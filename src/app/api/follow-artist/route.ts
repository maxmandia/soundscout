import { NextRequest, NextResponse } from 'next/server'
import { ArtistInterface } from '@/interfaces/ArtistInterface'
import { prisma } from '@/config/prisma'
import checkArtistExists from '@/helpers/check-artist-exists'
import getArtistTracks from '@/helpers/get-artist-tracks'
import addArtistTracks from '@/helpers/add-artist-tracks'

interface Data {
  user_id: string
  artist: ArtistInterface
}

export async function PUT(req: NextRequest) {
  try {
    let data = await req.json()
    const { user_id, artist }: Data = data

    if (!user_id || !artist) {
      return NextResponse.error()
    }

    let artistExists = await checkArtistExists(artist.id)

    const artist_id = artist.id
    const artist_name = artist.name
    const image_url = artist.images?.[0]?.url
    const external_url = artist.external_urls?.spotify
    const genre = artist.genres?.[0]

    if (artistExists) {
      // the artist exists in the database
      await prisma.user_Artist.create({
        data: {
          user_id: user_id,
          artist_id: artist_id
        }
      })
    } else {
      // the artist does not exist in the database
      await prisma.artist.create({
        data: {
          id: artist_id,
          artist_name,
          image_url,
          external_url,
          genre
        }
      })
      await prisma.user_Artist.create({
        data: {
          user_id: user_id,
          artist_id: artist_id
        }
      })

      // get the artists tracks
      let tracks = await getArtistTracks(artist_id)
      await addArtistTracks(tracks, artist_id)
    }

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}

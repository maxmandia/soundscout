import { prisma } from '@/config/prisma'
import { NextResponse } from 'next/server'
import getArtistTracks from '@/helpers/get-artist-tracks'
import addArtistTracks from '@/helpers/add-artist-tracks'
export async function GET() {
  // get all artists in our database
  let artists = await prisma.artist.findMany()
  // for each artist:
  for (let artist of artists) {
    try {
      // get the artists latest track from our database and note the date
      let track = await prisma.tracks.findFirst({
        where: {
          artist_id: artist.id
        },
        orderBy: {
          release_date: 'desc'
        }
      })
      // get the artists latest track from the spotify api
      let spotifyTracks = await getArtistTracks(artist.id)
      // sort the tracks from spotify api
      spotifyTracks.sort((a, b) => {
        return (
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
        )
      })
      // go over all tracks from api in desc order until we reach out latest track's date
      let tracksToAdd = spotifyTracks.filter((spotifyTrack: any) => {
        return (
          new Date(spotifyTrack.release_date).getTime() >
          new Date(track.release_date).getTime()
        )
      })
      if (tracksToAdd.length > 0) {
        await addArtistTracks(tracksToAdd, artist.id)
      }
    } catch (error: any) {
      console.log(error)
    }
  }
  return NextResponse.json({ message: 'success' })
}

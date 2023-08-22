import { ArtistTracksInterface } from '@/interfaces/ArtistTracksInterface'
import { prisma } from '@/config/prisma'
import getSpotToken from '@/helpers/get-spot-token'
import getTrackInfo from './get-track-info'

export default async function addArtistTracks(
  tracks: ArtistTracksInterface[],
  artist_id: string
) {
  try {
    const access_token = await getSpotToken()

    const singles = tracks.filter((track) => track.album_type === 'single')
    const albums = tracks.filter((track) => track.album_type === 'album')

    // add all singles
    const formattedSingles = []
    for (const single of singles) {
      let preview_url = await getTrackInfo(single.id, access_token)
      formattedSingles.push({
        id: single.id,
        track_name: single.name,
        preview_url: preview_url,
        release_date: single.release_date,
        track_type: single.album_type,
        external_url: single.external_urls.spotify,
        track_image: single.images[0].url,
        all_artists: single.artists as [],
        artist_id: artist_id
      })
    }

    await prisma.tracks.createMany({
      data: formattedSingles
    })

    const headers = {
      Authorization: `Bearer ${access_token}`
    }
    for (const album of albums) {
      let resp = await fetch(album.href, {
        headers
      })
      let {
        tracks: { items }
      } = await resp.json()
      const formattedTracks = []
      const release_date = album.release_date
      const track_image = album.images[0].url
      for (let track of items) {
        let preview_url = await getTrackInfo(track.id, access_token)
        formattedTracks.push({
          id: track.id,
          track_name: track.name,
          release_date: release_date,
          preview_url: preview_url,
          track_type: 'single',
          external_url: track.external_urls.spotify,
          track_image: track_image,
          all_artists: track.artists as [],
          artist_id: artist_id
        })
      }
      await prisma.tracks.createMany({
        data: formattedTracks
      })
    }
  } catch (error: any) {
    throw new Error(error)
  }
}

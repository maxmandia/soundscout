import getSpotToken from '@/helpers/get-spot-token'

export default async function getArtistTracks(artist_id: string) {
  try {
    // get the spotify token
    const access_token = await getSpotToken()

    // get the artist's tracks
    const headers = {
      Authorization: `Bearer ${access_token}`
    }
    let spotResp = await fetch(
      `https://api.spotify.com/v1/artists/${artist_id}/albums`,
      { headers }
    )
    const { items } = await spotResp.json()
    return items
  } catch (error: any) {
    throw new Error(error)
  }
}

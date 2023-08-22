export default async function getTrackInfo(
  track_id: string,
  access_token: string
) {
  try {
    const headers = {
      Authorization: `Bearer ${access_token}`
    }

    let resp = await fetch(`https://api.spotify.com/v1/albums/${track_id}`, {
      headers
    })
    let data = await resp.json()
    return data.tracks.items[0].preview_url ?? null
  } catch (error: any) {
    throw new Error(error)
  }
}

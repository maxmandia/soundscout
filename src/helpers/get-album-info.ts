export default async function getAlbumInfo(
  track_id: string,
  access_token: string
) {
  try {
    const headers = {
      Authorization: `Bearer ${access_token}`
    }
    let resp = await fetch(`https://api.spotify.com/v1/tracks/${track_id}`, {
      headers
    })
    let data = await resp.json()
    if (data.preview_url) {
      return data.preview_url
    } else {
      return null
    }
  } catch (error: any) {
    return null
  }
}

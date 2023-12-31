export default async function getSpotToken(): Promise<string> {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
  myHeaders.append(
    'Cookie',
    '__Host-device_id=AQBS-KV9hZR0fT4AeqL1QYGmKTahg87tGkRn92Z1KxCfhorJHFyzvG8ncifoZwarGwp2aYAezjT-T6cuBOW3EpmxPtZ04X_5Xvo; sp_tr=false'
  )

  var urlencoded = new URLSearchParams()
  urlencoded.append('grant_type', 'client_credentials')
  urlencoded.append('client_id', process.env.SPOTIFY_CLIENT_ID as string)
  urlencoded.append(
    'client_secret',
    process.env.SPOTIFY_CLIENT_SECRET as string
  )

  var requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  }

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      ...requestOptions,
      cache: 'no-store'
    })
    const { access_token } = await response.json()
    return access_token
  } catch (error) {
    throw new Error(error as string)
  }
}

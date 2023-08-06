import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  let search = req.nextUrl.searchParams.get('artist')

  const spotTokenResponse = await fetch(
    'http://localhost:3000/api/get-spot-token'
  )
  const { access_token } = await spotTokenResponse.json()

  const headers = {
    Authorization: `Bearer ${access_token}`
  }

  const searchResponse = await fetch(
    `https://api.spotify.com/v1/search?q=${search}&type=artist`,
    { headers }
  )

  const searchResult = await searchResponse.json()

  return NextResponse.json(searchResult)
}

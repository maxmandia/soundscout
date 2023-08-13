import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'
import { getFollowedArtists } from '@/helpers/get-followed-artists'

export async function GET(req: NextRequest) {
  let search = req.nextUrl.searchParams.get('artist')
  let user_id = req.nextUrl.searchParams.get('userId')

  try {
    if (!search || !user_id) {
      throw new Error('Missing search or user_id')
    }

    const spotTokenResponse = await fetch(
      'http://localhost:3000/api/get-spot-token'
    )
    const { access_token } = await spotTokenResponse.json()

    const headers = {
      Authorization: `Bearer ${access_token}`
    }

    const searchResponsePromise = fetch(
      `https://api.spotify.com/v1/search?q=${search}&type=artist`,
      { headers }
    )
    const userFollowingPromise = getFollowedArtists(user_id)

    const [searchResult, userFollowingResult] = await Promise.all([
      searchResponsePromise,
      userFollowingPromise
    ])

    const searchResultJson = await searchResult.json()

    return NextResponse.json({
      artists: searchResultJson.artists,
      userFollowing: userFollowingResult[0].follows
    })
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}

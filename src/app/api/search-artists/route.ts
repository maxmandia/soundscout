import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/config/prisma'
import { getFollowedArtists } from '@/helpers/get-followed-artists'
import getSpotToken from '@/helpers/get-spot-token'

export async function GET(req: NextRequest) {
  let search = req.nextUrl.searchParams.get('artist')
  let user_id = req.nextUrl.searchParams.get('userId')

  try {
    if (!search || !user_id) {
      throw new Error('Missing search or user_id')
    }

    const access_token = await getSpotToken()

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
      userFollowing: userFollowingResult.length === 0 ? [] : userFollowingResult
    })
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}

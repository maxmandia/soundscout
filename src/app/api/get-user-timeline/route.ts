import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/config/prisma'
import { Tracks } from '@prisma/client'

export async function GET(req: NextRequest) {
  const user_id = req.nextUrl.searchParams.get('userId')
  const page = Number(req.nextUrl.searchParams.get('page'))

  try {
    if (!user_id) {
      throw new Error('Missing user id')
    }

    if (typeof page !== 'number') {
      throw new Error('Missing page number')
    }

    const data = await prisma.user.findUnique({
      where: {
        id: user_id
      },
      select: {
        follows: {
          select: {
            artist: {
              select: {
                tracks: {
                  orderBy: {
                    release_date: 'desc'
                  },
                  skip: page === 0 ? 0 : page * 20 - 1,
                  take: 20
                }
              }
            }
          }
        }
      }
    })

    if (data?.follows.length === 0) {
      return NextResponse.json([])
    } else {
      const allTracks: Tracks[] = []
      data?.follows.forEach((follow) => {
        follow.artist.tracks.forEach((track) => {
          allTracks.push(track)
        })
      })
      // sort the tracks from newest to oldest
      allTracks.sort((a, b) => {
        return (
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
        )
      })

      return NextResponse.json({
        data: allTracks,
        next: page + 1
      })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}

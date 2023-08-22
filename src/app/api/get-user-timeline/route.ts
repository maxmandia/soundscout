import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/config/prisma'

export async function GET(req: NextRequest) {
  const user_id = req.nextUrl.searchParams.get('userId')

  try {
    if (!user_id) {
      throw new Error('Missing user id')
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
                  }
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
      return NextResponse.json(data?.follows[0].artist.tracks)
    }
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}

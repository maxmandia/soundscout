import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/config/prisma'

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
      return NextResponse.json({
        data: data?.follows[0].artist.tracks,
        next: page + 1
      })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}

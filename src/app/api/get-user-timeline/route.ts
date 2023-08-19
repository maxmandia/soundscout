import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/config/prisma'

export async function GET(req: NextRequest) {
  const user_id = req.nextUrl.searchParams.get('userId')

  try {
    if (!user_id) {
      throw new Error('Missing user id')
    }
  } catch (error) {
    return NextResponse.error()
  }
}

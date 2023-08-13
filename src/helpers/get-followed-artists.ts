import { prisma } from '@/utils/prisma'

export async function getFollowedArtists(user_id: string) {
  try {
    let data = await prisma.user.findMany({
      where: {
        id: user_id
      },
      include: {
        follows: {
          include: {
            artist: true
          }
        }
      }
    })

    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

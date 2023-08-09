import { prisma } from '@/utils/prisma'

export default async function checkArtistExists(artist_id: string) {
  try {
    let resp = await prisma.artist.findUnique({
      where: {
        id: artist_id
      }
    })

    return resp
  } catch (error) {
    console.log(error)
    return null
  }
}

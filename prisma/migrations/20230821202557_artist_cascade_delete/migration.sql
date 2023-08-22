-- DropForeignKey
ALTER TABLE "User_Artist" DROP CONSTRAINT "User_Artist_artist_id_fkey";

-- AddForeignKey
ALTER TABLE "User_Artist" ADD CONSTRAINT "User_Artist_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "Tracks" DROP CONSTRAINT "Tracks_artist_id_fkey";

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

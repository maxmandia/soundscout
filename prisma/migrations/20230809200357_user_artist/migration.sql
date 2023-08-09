/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "Artist" (
    "id" TEXT NOT NULL,
    "artist_name" TEXT NOT NULL,
    "external_url" TEXT NOT NULL,
    "image_url" TEXT,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Artist" (
    "user_id" TEXT NOT NULL,
    "artist_id" TEXT NOT NULL,

    CONSTRAINT "User_Artist_pkey" PRIMARY KEY ("user_id","artist_id")
);

-- AddForeignKey
ALTER TABLE "User_Artist" ADD CONSTRAINT "User_Artist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Artist" ADD CONSTRAINT "User_Artist_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Tracks" (
    "id" TEXT NOT NULL,
    "track_name" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "track_type" TEXT NOT NULL,
    "external_url" TEXT NOT NULL,
    "track_image" TEXT NOT NULL,
    "all_artists" JSONB[],
    "artist_id" TEXT NOT NULL,

    CONSTRAINT "Tracks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tracks_id_key" ON "Tracks"("id");

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

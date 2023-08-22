/*
  Warnings:

  - Added the required column `preview_url` to the `Tracks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tracks" ADD COLUMN     "preview_url" TEXT NOT NULL;

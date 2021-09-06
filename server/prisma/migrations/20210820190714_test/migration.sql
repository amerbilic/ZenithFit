/*
  Warnings:

  - You are about to drop the `article_category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "article" DROP CONSTRAINT "article_category_id_fkey";

-- DropTable
DROP TABLE "article_category";

-- CreateTable
CREATE TABLE "articleCategory" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "article" ADD FOREIGN KEY ("category_id") REFERENCES "articleCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

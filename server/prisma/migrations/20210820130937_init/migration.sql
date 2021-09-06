/*
  Warnings:

  - The primary key for the `address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `addressid` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `zipcode` on the `address` table. All the data in the column will be lost.
  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `goals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `manufacturers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orderdetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `procurementdetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `procurements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `suppliers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `useraccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userinfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userreviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `warehouses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addressLine` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "articles" DROP CONSTRAINT "articles_goalsid_fkey";

-- DropForeignKey
ALTER TABLE "articles" DROP CONSTRAINT "articles_manufacturerid_fkey";

-- DropForeignKey
ALTER TABLE "articles" DROP CONSTRAINT "articles_typesid_fkey";

-- DropForeignKey
ALTER TABLE "orderdetails" DROP CONSTRAINT "orderdetails_articleid_fkey";

-- DropForeignKey
ALTER TABLE "orderdetails" DROP CONSTRAINT "orderdetails_orderid_fkey";

-- DropForeignKey
ALTER TABLE "procurementdetails" DROP CONSTRAINT "procurementdetails_articlesid_fkey";

-- DropForeignKey
ALTER TABLE "procurementdetails" DROP CONSTRAINT "procurementdetails_procurementid_fkey";

-- DropForeignKey
ALTER TABLE "procurements" DROP CONSTRAINT "procurements_supplierid_fkey";

-- DropForeignKey
ALTER TABLE "procurements" DROP CONSTRAINT "procurements_warehouseid_fkey";

-- DropForeignKey
ALTER TABLE "useraccount" DROP CONSTRAINT "useraccount_addressid_fkey";

-- DropForeignKey
ALTER TABLE "useraccount" DROP CONSTRAINT "useraccount_roleid_fkey";

-- DropForeignKey
ALTER TABLE "userinfo" DROP CONSTRAINT "userinfo_useraccountid_fkey";

-- DropForeignKey
ALTER TABLE "userreviews" DROP CONSTRAINT "userreviews_articleid_fkey";

-- DropForeignKey
ALTER TABLE "userreviews" DROP CONSTRAINT "userreviews_useraccountid_fkey";

-- DropForeignKey
ALTER TABLE "warehouses" DROP CONSTRAINT "warehouses_addressid_fkey";

-- AlterTable
ALTER TABLE "address" DROP CONSTRAINT "address_pkey",
DROP COLUMN "address",
DROP COLUMN "addressid",
DROP COLUMN "zipcode",
ADD COLUMN     "addressLine" VARCHAR(100) NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "phone" INTEGER,
ADD COLUMN     "postalCode" VARCHAR(30) NOT NULL,
ADD COLUMN     "user_id" INTEGER,
ALTER COLUMN "city" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "country" SET DATA TYPE VARCHAR(50),
ADD PRIMARY KEY ("id");

-- DropTable
DROP TABLE "articles";

-- DropTable
DROP TABLE "goals";

-- DropTable
DROP TABLE "manufacturers";

-- DropTable
DROP TABLE "orderdetails";

-- DropTable
DROP TABLE "orders";

-- DropTable
DROP TABLE "procurementdetails";

-- DropTable
DROP TABLE "procurements";

-- DropTable
DROP TABLE "roles";

-- DropTable
DROP TABLE "suppliers";

-- DropTable
DROP TABLE "types";

-- DropTable
DROP TABLE "useraccount";

-- DropTable
DROP TABLE "userinfo";

-- DropTable
DROP TABLE "userreviews";

-- DropTable
DROP TABLE "warehouses";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(20) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "telephone" INTEGER,
    "status" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_payment" (
    "id" SERIAL NOT NULL,
    "payment_type" VARCHAR(50) NOT NULL,
    "provider" VARCHAR(50) NOT NULL,
    "account_no" INTEGER NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_inventory" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discount" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "discount_percent" DECIMAL(65,30) NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "desc" VARCHAR(255),
    "img" VARCHAR(255),
    "price" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "category_id" INTEGER NOT NULL,
    "inventory_id" INTEGER NOT NULL,
    "discount_id" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopping_session" (
    "id" SERIAL NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_item" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "session_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_details" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "provider" VARCHAR(255) NOT NULL,
    "status" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_details" (
    "id" SERIAL NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "payment_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user.username_unique" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "shopping_session_user_id_unique" ON "shopping_session"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "cart_item_session_id_unique" ON "cart_item"("session_id");

-- CreateIndex
CREATE UNIQUE INDEX "cart_item_article_id_unique" ON "cart_item"("article_id");

-- CreateIndex
CREATE UNIQUE INDEX "order_details_user_id_unique" ON "order_details"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "order_details_payment_id_unique" ON "order_details"("payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "order_items_article_id_unique" ON "order_items"("article_id");

-- AddForeignKey
ALTER TABLE "address" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_payment" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article" ADD FOREIGN KEY ("category_id") REFERENCES "article_category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article" ADD FOREIGN KEY ("inventory_id") REFERENCES "article_inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article" ADD FOREIGN KEY ("discount_id") REFERENCES "discount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_session" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_item" ADD FOREIGN KEY ("session_id") REFERENCES "shopping_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_item" ADD FOREIGN KEY ("article_id") REFERENCES "article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD FOREIGN KEY ("payment_id") REFERENCES "payment_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "order_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD FOREIGN KEY ("article_id") REFERENCES "article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

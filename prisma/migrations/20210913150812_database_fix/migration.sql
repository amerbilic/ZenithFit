/*
  Warnings:

  - You are about to drop the column `order_id` on the `paymentDetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "article" DROP CONSTRAINT "article_category_id_fkey";

-- DropForeignKey
ALTER TABLE "article" DROP CONSTRAINT "article_inventory_id_fkey";

-- DropForeignKey
ALTER TABLE "cartItem" DROP CONSTRAINT "cartItem_article_id_fkey";

-- DropForeignKey
ALTER TABLE "cartItem" DROP CONSTRAINT "cartItem_session_id_fkey";

-- DropForeignKey
ALTER TABLE "orderDetails" DROP CONSTRAINT "orderDetails_payment_id_fkey";

-- DropForeignKey
ALTER TABLE "orderDetails" DROP CONSTRAINT "orderDetails_user_id_fkey";

-- DropForeignKey
ALTER TABLE "orderItems" DROP CONSTRAINT "orderItems_article_id_fkey";

-- DropForeignKey
ALTER TABLE "orderItems" DROP CONSTRAINT "orderItems_order_id_fkey";

-- DropForeignKey
ALTER TABLE "shoppingSession" DROP CONSTRAINT "shoppingSession_user_id_fkey";

-- DropForeignKey
ALTER TABLE "userPayment" DROP CONSTRAINT "userPayment_user_id_fkey";

-- DropForeignKey
ALTER TABLE "userRating" DROP CONSTRAINT "userRating_article_id_fkey";

-- DropForeignKey
ALTER TABLE "userRating" DROP CONSTRAINT "userRating_user_id_fkey";

-- AlterTable
ALTER TABLE "paymentDetails" DROP COLUMN "order_id";

-- AddForeignKey
ALTER TABLE "userPayment" ADD CONSTRAINT "userPayment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article" ADD CONSTRAINT "article_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "articleCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article" ADD CONSTRAINT "article_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "articleInventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shoppingSession" ADD CONSTRAINT "shoppingSession_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartItem" ADD CONSTRAINT "cartItem_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "shoppingSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartItem" ADD CONSTRAINT "cartItem_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderDetails" ADD CONSTRAINT "orderDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderDetails" ADD CONSTRAINT "orderDetails_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "paymentDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItems" ADD CONSTRAINT "orderItems_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orderDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItems" ADD CONSTRAINT "orderItems_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userRating" ADD CONSTRAINT "userRating_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userRating" ADD CONSTRAINT "userRating_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "user.username_unique" RENAME TO "user_username_key";

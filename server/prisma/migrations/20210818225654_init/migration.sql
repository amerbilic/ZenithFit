-- CreateTable
CREATE TABLE "address" (
    "addressid" SERIAL NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "zipcode" VARCHAR(30) NOT NULL,
    "address" VARCHAR(100) NOT NULL,
    "country" VARCHAR(20) NOT NULL,

    PRIMARY KEY ("addressid")
);

-- CreateTable
CREATE TABLE "articles" (
    "articleid" SERIAL NOT NULL,
    "typesid" INTEGER NOT NULL,
    "goalsid" INTEGER NOT NULL,
    "manufacturerid" INTEGER NOT NULL,
    "name" VARCHAR(100),
    "code" VARCHAR(15),
    "price" DECIMAL(10,2),
    "picture" VARCHAR(100),
    "picturethumbnail" VARCHAR(100),
    "status" BOOLEAN,

    PRIMARY KEY ("articleid")
);

-- CreateTable
CREATE TABLE "goals" (
    "goalsid" SERIAL NOT NULL,
    "name" VARCHAR(50),

    PRIMARY KEY ("goalsid")
);

-- CreateTable
CREATE TABLE "manufacturers" (
    "manufacturerid" SERIAL NOT NULL,
    "name" VARCHAR(50),

    PRIMARY KEY ("manufacturerid")
);

-- CreateTable
CREATE TABLE "orderdetails" (
    "orderdetailsid" SERIAL NOT NULL,
    "orderid" INTEGER NOT NULL,
    "articleid" INTEGER NOT NULL,
    "amount" INTEGER,
    "price" DECIMAL(10,2),
    "discount" BOOLEAN DEFAULT false,

    PRIMARY KEY ("orderdetailsid","orderid")
);

-- CreateTable
CREATE TABLE "orders" (
    "orderid" SERIAL NOT NULL,
    "orderdate" TIMESTAMP(6),
    "ordernumber" INTEGER,
    "status" BOOLEAN,
    "pricetax" DECIMAL(10,2),
    "pricenotax" DECIMAL(10,2),

    PRIMARY KEY ("orderid")
);

-- CreateTable
CREATE TABLE "procurementdetails" (
    "procurementdetailsid" SERIAL NOT NULL,
    "procurementid" INTEGER NOT NULL,
    "articlesid" INTEGER NOT NULL,
    "amount" INTEGER,
    "price" DECIMAL(10,2),

    PRIMARY KEY ("procurementdetailsid")
);

-- CreateTable
CREATE TABLE "procurements" (
    "procurementid" SERIAL NOT NULL,
    "supplierid" INTEGER NOT NULL,
    "procurementnumber" VARCHAR(10) NOT NULL,
    "procurementdate" TIMESTAMP(6) NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "note" VARCHAR(300),
    "warehouseid" INTEGER NOT NULL,

    PRIMARY KEY ("procurementid")
);

-- CreateTable
CREATE TABLE "roles" (
    "roleid" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    PRIMARY KEY ("roleid")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "supplierid" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "contact" VARCHAR(100),
    "phone" VARCHAR(20),
    "web" VARCHAR(30),
    "email" VARCHAR(30),
    "bankaccount" VARCHAR(50),
    "note" VARCHAR(300),

    PRIMARY KEY ("supplierid")
);

-- CreateTable
CREATE TABLE "types" (
    "typesid" SERIAL NOT NULL,
    "name" VARCHAR(50),

    PRIMARY KEY ("typesid")
);

-- CreateTable
CREATE TABLE "useraccount" (
    "useraccountid" SERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "firstname" VARCHAR(50),
    "lastname" VARCHAR(50),
    "email" VARCHAR(50),
    "phone" VARCHAR(20),
    "registereddate" TIMESTAMP(6) NOT NULL,
    "addressid" INTEGER NOT NULL,
    "roleid" INTEGER NOT NULL,

    PRIMARY KEY ("useraccountid")
);

-- CreateTable
CREATE TABLE "userinfo" (
    "userinfoid" SERIAL NOT NULL,
    "username" VARCHAR(30),
    "hash" VARCHAR(100),
    "useraccountid" INTEGER NOT NULL,

    PRIMARY KEY ("userinfoid")
);

-- CreateTable
CREATE TABLE "userreviews" (
    "userreviewid" SERIAL NOT NULL,
    "articleid" INTEGER NOT NULL,
    "useraccountid" INTEGER NOT NULL,
    "inputtext" VARCHAR(100),
    "rating" INTEGER,
    "ratingdate" TIMESTAMP(6),

    PRIMARY KEY ("userreviewid")
);

-- CreateTable
CREATE TABLE "warehouses" (
    "warehouseid" SERIAL NOT NULL,
    "addressid" INTEGER NOT NULL,
    "name" VARCHAR(30),

    PRIMARY KEY ("warehouseid")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles.name_unique" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers.email_unique" ON "suppliers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "useraccount.email_unique" ON "useraccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "userinfo.useraccountid_unique" ON "userinfo"("useraccountid");

-- AddForeignKey
ALTER TABLE "articles" ADD FOREIGN KEY ("goalsid") REFERENCES "goals"("goalsid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD FOREIGN KEY ("manufacturerid") REFERENCES "manufacturers"("manufacturerid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD FOREIGN KEY ("typesid") REFERENCES "types"("typesid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderdetails" ADD FOREIGN KEY ("articleid") REFERENCES "articles"("articleid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderdetails" ADD FOREIGN KEY ("orderid") REFERENCES "orders"("orderid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "procurementdetails" ADD FOREIGN KEY ("articlesid") REFERENCES "articles"("articleid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "procurementdetails" ADD FOREIGN KEY ("procurementid") REFERENCES "procurements"("procurementid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "procurements" ADD FOREIGN KEY ("supplierid") REFERENCES "suppliers"("supplierid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "procurements" ADD FOREIGN KEY ("warehouseid") REFERENCES "warehouses"("warehouseid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "useraccount" ADD FOREIGN KEY ("addressid") REFERENCES "address"("addressid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "useraccount" ADD FOREIGN KEY ("roleid") REFERENCES "roles"("roleid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userinfo" ADD FOREIGN KEY ("useraccountid") REFERENCES "useraccount"("useraccountid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userreviews" ADD FOREIGN KEY ("articleid") REFERENCES "articles"("articleid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userreviews" ADD FOREIGN KEY ("useraccountid") REFERENCES "useraccount"("useraccountid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "warehouses" ADD FOREIGN KEY ("addressid") REFERENCES "address"("addressid") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Establishment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Establishment" DROP CONSTRAINT "Establishment_categoryId_fkey";

-- AlterTable
ALTER TABLE "Establishment" DROP COLUMN "categoryId";

-- CreateTable
CREATE TABLE "EstablishmentCategory" (
    "establishmentId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "EstablishmentCategory_pkey" PRIMARY KEY ("establishmentId","categoryId")
);

-- CreateTable
CREATE TABLE "_EstablishmentCategories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EstablishmentCategories_AB_unique" ON "_EstablishmentCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_EstablishmentCategories_B_index" ON "_EstablishmentCategories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "EstablishmentCategory" ADD CONSTRAINT "EstablishmentCategory_establishmentId_fkey" FOREIGN KEY ("establishmentId") REFERENCES "Establishment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstablishmentCategory" ADD CONSTRAINT "EstablishmentCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EstablishmentCategories" ADD CONSTRAINT "_EstablishmentCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EstablishmentCategories" ADD CONSTRAINT "_EstablishmentCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Establishment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

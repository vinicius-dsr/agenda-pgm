-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Establishment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "operation" TEXT NOT NULL,
    "imageUrl" TEXT[],
    "address" TEXT NOT NULL,
    "phones" TEXT[],
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Establishment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Establishment" ADD CONSTRAINT "Establishment_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

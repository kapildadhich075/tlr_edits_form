-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('HORIZONTAL_VIDEO', 'VERTICAL_VIDEO', 'CHANNEL_ASSETS', 'THUMBNAIL');

-- CreateEnum
CREATE TYPE "AddOns" AS ENUM ('THUMBNAIL', 'VERTICAL_REFORMAT', 'SQUARE_REFORMAT', 'HORIZONTAL_REFORMAT', 'FULL_VIDEO_CAPTION', 'PROJECT_FILE');

-- CreateTable
CREATE TABLE "FormData" (
    "id" SERIAL NOT NULL,
    "orderType" "OrderType" NOT NULL,
    "addOns" "AddOns"[],
    "footageUpload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FormData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RawVideoFootage" (
    "id" SERIAL NOT NULL,
    "footageLength" INTEGER NOT NULL,
    "footageSize" INTEGER NOT NULL,
    "formDataId" INTEGER NOT NULL,

    CONSTRAINT "RawVideoFootage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderLogistics" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "finalLength" INTEGER NOT NULL,
    "formDataId" INTEGER NOT NULL,

    CONSTRAINT "OrderLogistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StyleDetails" (
    "id" SERIAL NOT NULL,
    "pacing" TEXT NOT NULL,
    "tone" TEXT NOT NULL,
    "formDataId" INTEGER NOT NULL,

    CONSTRAINT "StyleDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderDetails" (
    "id" SERIAL NOT NULL,
    "editInstructions" TEXT NOT NULL,
    "exampleVideo" TEXT NOT NULL,
    "scriptLink" TEXT NOT NULL,
    "formDataId" INTEGER NOT NULL,

    CONSTRAINT "OrderDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RawVideoFootage" ADD CONSTRAINT "RawVideoFootage_FormData_fkey" FOREIGN KEY ("formDataId") REFERENCES "FormData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderLogistics" ADD CONSTRAINT "OrderLogistics_FormData_fkey" FOREIGN KEY ("formDataId") REFERENCES "FormData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StyleDetails" ADD CONSTRAINT "StyleDetails_FormData_fkey" FOREIGN KEY ("formDataId") REFERENCES "FormData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetails" ADD CONSTRAINT "OrderDetails_FormData_fkey" FOREIGN KEY ("formDataId") REFERENCES "FormData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

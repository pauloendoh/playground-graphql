-- CreateTable
CREATE TABLE "RawColor" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RawColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MixedColor" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MixedColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColorProportion" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mixedColorId" TEXT NOT NULL,
    "rawColorId" TEXT NOT NULL,
    "proportion" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ColorProportion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RawColor" ADD CONSTRAINT "RawColor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MixedColor" ADD CONSTRAINT "MixedColor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorProportion" ADD CONSTRAINT "ColorProportion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorProportion" ADD CONSTRAINT "ColorProportion_mixedColorId_fkey" FOREIGN KEY ("mixedColorId") REFERENCES "MixedColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorProportion" ADD CONSTRAINT "ColorProportion_rawColorId_fkey" FOREIGN KEY ("rawColorId") REFERENCES "RawColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

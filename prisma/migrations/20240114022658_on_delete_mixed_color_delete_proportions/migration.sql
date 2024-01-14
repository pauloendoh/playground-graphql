-- DropForeignKey
ALTER TABLE "ColorProportion" DROP CONSTRAINT "ColorProportion_mixedColorId_fkey";

-- AddForeignKey
ALTER TABLE "ColorProportion" ADD CONSTRAINT "ColorProportion_mixedColorId_fkey" FOREIGN KEY ("mixedColorId") REFERENCES "MixedColor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

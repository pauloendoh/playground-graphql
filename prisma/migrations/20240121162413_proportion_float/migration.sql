/*
  Warnings:

  - You are about to alter the column `proportion` on the `ColorProportion` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "ColorProportion" ALTER COLUMN "proportion" SET DATA TYPE DOUBLE PRECISION;

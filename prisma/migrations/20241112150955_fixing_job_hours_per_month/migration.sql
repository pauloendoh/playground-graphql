/*
  Warnings:

  - You are about to drop the column `jobHoursPerMonth` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Salary" ADD COLUMN     "jobHoursPerMonth" DOUBLE PRECISION NOT NULL DEFAULT 160;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "jobHoursPerMonth";

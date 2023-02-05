/*
 Warnings:
 
 - You are about to drop the `CurrentSaving` table. If the table is not empty, all the data it contains will be lost.
 
 */
-- DropForeignKey
ALTER TABLE
  "CurrentSaving" RENAME TO "Saving";

ALTER TABLE
  "Saving" DROP CONSTRAINT "CurrentSaving_userId_fkey";

-- AddForeignKey
ALTER TABLE
  "Saving"
ADD
  CONSTRAINT "Saving_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
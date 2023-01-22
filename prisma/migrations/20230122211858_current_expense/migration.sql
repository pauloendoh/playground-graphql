-- CreateTable
CREATE TABLE "CurrentSaving" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CurrentSaving_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CurrentSaving" ADD CONSTRAINT "CurrentSaving_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

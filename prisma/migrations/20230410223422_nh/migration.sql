-- CreateTable
CREATE TABLE "NhAuthor" (
    "url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "checkedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NhAuthor_pkey" PRIMARY KEY ("url")
);

-- CreateTable
CREATE TABLE "NhFavorite" (
    "url" TEXT NOT NULL,
    "authorUrl" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "NhFavorite_pkey" PRIMARY KEY ("url")
);

-- AddForeignKey
ALTER TABLE "NhAuthor" ADD CONSTRAINT "NhAuthor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NhFavorite" ADD CONSTRAINT "NhFavorite_authorUrl_fkey" FOREIGN KEY ("authorUrl") REFERENCES "NhAuthor"("url") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NhFavorite" ADD CONSTRAINT "NhFavorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

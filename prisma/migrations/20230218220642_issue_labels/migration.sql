-- CreateTable
CREATE TABLE "IssueLabel" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IssueLabel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IssueToIssueLabel" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IssueToIssueLabel_AB_unique" ON "_IssueToIssueLabel"("A", "B");

-- CreateIndex
CREATE INDEX "_IssueToIssueLabel_B_index" ON "_IssueToIssueLabel"("B");

-- AddForeignKey
ALTER TABLE "IssueLabel" ADD CONSTRAINT "IssueLabel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IssueToIssueLabel" ADD CONSTRAINT "_IssueToIssueLabel_A_fkey" FOREIGN KEY ("A") REFERENCES "Issue"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IssueToIssueLabel" ADD CONSTRAINT "_IssueToIssueLabel_B_fkey" FOREIGN KEY ("B") REFERENCES "IssueLabel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

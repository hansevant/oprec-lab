/*
  Warnings:

  - You are about to drop the column `reason` on the `registrant` table. All the data in the column will be lost.
  - Added the required column `region` to the `Registrant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `registrant` DROP COLUMN `reason`,
    ADD COLUMN `region` VARCHAR(191) NOT NULL;

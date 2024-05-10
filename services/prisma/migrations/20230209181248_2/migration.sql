/*
  Warnings:

  - You are about to drop the column `class` on the `registrant` table. All the data in the column will be lost.
  - Added the required column `clas` to the `Registrant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `registrant` DROP COLUMN `class`,
    ADD COLUMN `clas` VARCHAR(191) NOT NULL;

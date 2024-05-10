/*
  Warnings:

  - You are about to drop the `registrant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `registrant`;

-- CreateTable
CREATE TABLE `Registrant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `npm` INTEGER NOT NULL,
    `clas` VARCHAR(191) NOT NULL,
    `major` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `passportPhoto` VARCHAR(191) NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `isQualified` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Registrant_npm_key`(`npm`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

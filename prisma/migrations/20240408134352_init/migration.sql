/*
  Warnings:

  - You are about to drop the column `paymentTypes` on the `Carpool` table. All the data in the column will be lost.
  - Added the required column `acceptsApplePay` to the `Carpool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acceptsCash` to the `Carpool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acceptsVenmo` to the `Carpool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acceptsZelle` to the `Carpool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Carpool` DROP COLUMN `paymentTypes`,
    ADD COLUMN `acceptsApplePay` BOOLEAN NOT NULL,
    ADD COLUMN `acceptsCash` BOOLEAN NOT NULL,
    ADD COLUMN `acceptsVenmo` BOOLEAN NOT NULL,
    ADD COLUMN `acceptsZelle` BOOLEAN NOT NULL;

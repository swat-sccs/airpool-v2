-- AlterTable
ALTER TABLE `Carpool` MODIFY `acceptsApplePay` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `acceptsCash` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `acceptsVenmo` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `acceptsZelle` BOOLEAN NOT NULL DEFAULT true;

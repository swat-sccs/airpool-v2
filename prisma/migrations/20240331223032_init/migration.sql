-- CreateTable
CREATE TABLE `Carpool` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `destination` VARCHAR(255) NOT NULL,
    `meetingPlace` VARCHAR(255) NOT NULL,
    `meetingTime` DATETIME(3) NOT NULL,
    `availableSeats` INTEGER NOT NULL,
    `transportationType` ENUM('PERSONAL_CAR', 'UBER', 'LYFT', 'TAXI') NOT NULL,
    `paymentTypes` VARCHAR(255) NOT NULL,
    `meetingInstructions` VARCHAR(191) NULL,
    `message` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `studentId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CarpoolToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CarpoolToUser_AB_unique`(`A`, `B`),
    INDEX `_CarpoolToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CarpoolToUser` ADD CONSTRAINT `_CarpoolToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Carpool`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CarpoolToUser` ADD CONSTRAINT `_CarpoolToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

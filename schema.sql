-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Clothes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Clothes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Clothes` DEFAULT CHARACTER SET utf8 ;
USE `Clothes` ;

-- -----------------------------------------------------
-- Table `Clothes`.`clothes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Clothes`.`clothes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(200) NOT NULL,
  `price` VARCHAR(200) NOT NULL,
  `image` VARCHAR(215) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

--DROP TABLE IF EXISTS `Users`;

CREATE TABLE IF NOT EXISTS `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `hash` VARCHAR NULL DEFAULT NULL,
  `email` VARCHAR NULL DEFAULT NULL,
  `first` VARCHAR NULL DEFAULT NULL,
  `last` VARCHAR NULL DEFAULT NULL,
  `exclusions` VARCHAR NULL DEFAULT NULL,
  `lifestyle` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users_Recipes'
--
-- ---

--DROP TABLE IF EXISTS `Users_Recipes`;

CREATE TABLE IF NOT EXISTS `Users_Recipes` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NOT NULL DEFAULT NULL,
  `recipe_id` INTEGER NULL DEFAULT NULL,
  `type` VARCHAR NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Recipes'
--
-- ---

--DROP TABLE IF EXISTS `Recipes`;

CREATE TABLE IF NOT EXISTS `Recipes` (
  `id` INTEGER NOT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `url` VARCHAR NULL DEFAULT NULL,
  `image_url` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Users_Recipes` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);
ALTER TABLE `Users_Recipes` ADD FOREIGN KEY (recipe_id) REFERENCES `Recipes` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users_Recipes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Recipes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`hash`,`email`,`first`,`last`,`exclusions`,`lifestyle`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Users_Recipes` (`id`,`user_id`,`recipe_id`,`type`,`date`) VALUES
-- ('','','','','');
-- INSERT INTO `Recipes` (`id`,`name`,`url`,`image_url`) VALUES
-- ('','','','');

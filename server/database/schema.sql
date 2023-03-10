-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS "users" CASCADE;

CREATE TABLE IF NOT EXISTS users (
  "id" SERIAL NOT NULL,
  "hash" VARCHAR NOT NULL DEFAULT NULL,
  "email" VARCHAR NOT NULL DEFAULT NULL UNIQUE,
  "first" VARCHAR NOT NULL DEFAULT NULL,
  "last" VARCHAR NOT NULL DEFAULT NULL,
  "exclusions" VARCHAR NULL DEFAULT '[]',
  "lifestyle" VARCHAR NULL DEFAULT '{}',
  PRIMARY KEY ("id")
);

-- ---
-- Table 'users_recipes'
--
-- ---

DROP TABLE IF EXISTS "users_recipes";

CREATE TABLE IF NOT EXISTS users_recipes (
  "id" SERIAL NOT NULL,
  "user_id" INTEGER NOT NULL DEFAULT NULL,
  "recipe_id" INTEGER NULL DEFAULT NULL,
  "type" VARCHAR NULL DEFAULT NULL,
  "date" TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY ("id"),
  UNIQUE ("user_id","recipe_id","type")
);

-- ---
-- Table 'recipes'
--
-- ---

DROP TABLE IF EXISTS "recipes";

CREATE TABLE IF NOT EXISTS recipes (
  "id" SERIAL NOT NULL,
  "name" VARCHAR NULL DEFAULT NULL,
  "url" VARCHAR NULL DEFAULT NULL,
  "image_url" VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY ("id"),
  UNIQUE ("name")
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE "users_recipes" ADD FOREIGN KEY (user_id) REFERENCES "users" ("id");
ALTER TABLE "users_recipes" ADD FOREIGN KEY (recipe_id) REFERENCES "recipes" ("id");

-- ---
-- Table Properties
-- ---

-- ALTER TABLE "users" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "users_recipes" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "recipes" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO "users` (`id`,`hash`,`email`,`first`,`last`,`exclusions`,`lifestyle`) VALUES
-- ('','','','','','','');
-- INSERT INTO `users_recipes` (`id`,`user_id`,`recipe_id`,`type`,`date`) VALUES
-- ('','','','','');
-- INSERT INTO `recipes` (`id`,`name`,`url`,`image_url`) VALUES
-- ('','','','');

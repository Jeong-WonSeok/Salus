-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.8.3-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- salus 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `salus` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `salus`;

-- 테이블 salus.achievement 구조 내보내기
CREATE TABLE IF NOT EXISTS `achievement` (
  `achievementId` int(11) NOT NULL,
  `achievementOrNot` tinyint(4) NOT NULL DEFAULT 0,
  `achievementDay` datetime DEFAULT NULL,
  `achievementName` varchar(40) NOT NULL,
  PRIMARY KEY (`achievementId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.achievement:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `achievement` DISABLE KEYS */;
/*!40000 ALTER TABLE `achievement` ENABLE KEYS */;

-- 테이블 salus.achievement-conditions 구조 내보내기
CREATE TABLE IF NOT EXISTS `achievement-conditions` (
  `achievementConditionsId` int(11) NOT NULL,
  `achievementConditions` int(11) NOT NULL,
  `achievementContent` text DEFAULT NULL,
  `achievementId` int(11) NOT NULL,
  PRIMARY KEY (`achievementConditionsId`),
  KEY `FK__achievement` (`achievementId`),
  CONSTRAINT `FK__achievement` FOREIGN KEY (`achievementId`) REFERENCES `achievement` (`achievementId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.achievement-conditions:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `achievement-conditions` DISABLE KEYS */;
/*!40000 ALTER TABLE `achievement-conditions` ENABLE KEYS */;

-- 테이블 salus.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
  `subjectNo` int(11) NOT NULL AUTO_INCREMENT,
  `managerId` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `writeDate` date NOT NULL,
  `hits` int(11) DEFAULT NULL,
  PRIMARY KEY (`subjectNo`),
  KEY `FK1_manager_board` (`managerId`),
  CONSTRAINT `FK1_manager_board` FOREIGN KEY (`managerId`) REFERENCES `manager` (`managerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.board:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 salus.daily_excercise_detail 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_excercise_detail` (
  `dailyExcerciseDetailId` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `set` int(11) NOT NULL,
  `excerciseDay` date NOT NULL,
  PRIMARY KEY (`dailyExcerciseDetailId`),
  KEY `FK__daily_routine_excercise` (`excerciseDay`),
  CONSTRAINT `FK__daily_routine_excercise` FOREIGN KEY (`excerciseDay`) REFERENCES `daily_routine_excercise` (`excerciseDay`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.daily_excercise_detail:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `daily_excercise_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily_excercise_detail` ENABLE KEYS */;

-- 테이블 salus.daily_routine 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_routine` (
  `excerciseDay` date NOT NULL,
  `progress` double DEFAULT NULL,
  `dailyExcerciseTime` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `rfidKey` bigint(20) DEFAULT NULL,
  `lowerRoutineId` int(11) NOT NULL,
  PRIMARY KEY (`excerciseDay`),
  KEY `FK_daily_routine_user` (`userId`),
  KEY `FK_daily_routine_user_2` (`rfidKey`),
  KEY `FK_daily_routine_lower_routine` (`lowerRoutineId`),
  CONSTRAINT `FK_daily_routine_lower_routine` FOREIGN KEY (`lowerRoutineId`) REFERENCES `lower_routine` (`lowerRoutineId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_daily_routine_user` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_daily_routine_user_2` FOREIGN KEY (`rfidKey`) REFERENCES `user` (`rfidKey`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.daily_routine:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `daily_routine` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily_routine` ENABLE KEYS */;

-- 테이블 salus.daily_routine_excercise 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_routine_excercise` (
  `dailyExcerciseId` int(11) NOT NULL,
  `excerciseDay` date NOT NULL,
  `startTime` timestamp NULL DEFAULT NULL,
  `endTime` timestamp NULL DEFAULT NULL,
  `excerciseProgress` double DEFAULT NULL,
  `dailyExcerciseName` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`dailyExcerciseId`),
  KEY `FK_daily_routine_excercise_daily_routine` (`excerciseDay`),
  CONSTRAINT `FK_daily_routine_excercise_daily_routine` FOREIGN KEY (`excerciseDay`) REFERENCES `daily_routine` (`excerciseDay`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.daily_routine_excercise:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `daily_routine_excercise` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily_routine_excercise` ENABLE KEYS */;

-- 테이블 salus.fitness_equiepment 구조 내보내기
CREATE TABLE IF NOT EXISTS `fitness_equiepment` (
  `equipmentId` int(11) NOT NULL AUTO_INCREMENT,
  `equipmentName` varchar(64) NOT NULL,
  `gymid` int(11) DEFAULT 0,
  `equipmentImage` varchar(64) NOT NULL,
  `equipmentRfidKey` varchar(20) DEFAULT NULL,
  `equipmentStimulate` text DEFAULT NULL,
  `equipmentDescription` text DEFAULT NULL,
  PRIMARY KEY (`equipmentId`),
  KEY `FK_fitness equiepment_gym` (`gymid`),
  CONSTRAINT `FK_fitness equiepment_gym` FOREIGN KEY (`gymid`) REFERENCES `gym` (`gymId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.fitness_equiepment:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `fitness_equiepment` DISABLE KEYS */;
/*!40000 ALTER TABLE `fitness_equiepment` ENABLE KEYS */;

-- 테이블 salus.gym 구조 내보내기
CREATE TABLE IF NOT EXISTS `gym` (
  `gymId` int(11) NOT NULL AUTO_INCREMENT,
  `gymName` varchar(50) NOT NULL,
  `gymAddress` text NOT NULL,
  `gymOpenTime` datetime DEFAULT NULL,
  `gymCloseTime` datetime DEFAULT NULL,
  `gymMap` varchar(50) DEFAULT NULL,
  `gymCurrentPerson` int(11) DEFAULT NULL,
  PRIMARY KEY (`gymId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.gym:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `gym` DISABLE KEYS */;
/*!40000 ALTER TABLE `gym` ENABLE KEYS */;

-- 테이블 salus.inbody_profile 구조 내보내기
CREATE TABLE IF NOT EXISTS `inbody_profile` (
  `userid` int(11) NOT NULL,
  `rfidKey` bigint(20) DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `skeletalMuscle` double DEFAULT NULL,
  `weightBodyFat` double DEFAULT NULL,
  `bmi` double DEFAULT NULL,
  `bmiBodyFat` double DEFAULT NULL,
  `waistHip` double DEFAULT NULL,
  `totalGrade` double DEFAULT NULL,
  `basalMetabolism` double DEFAULT NULL,
  `body` double DEFAULT NULL,
  `rightHand` double DEFAULT NULL,
  `leftHand` double DEFAULT NULL,
  `rightLeg` double DEFAULT NULL,
  `leftLeg` double DEFAULT NULL,
  PRIMARY KEY (`userid`),
  KEY `FK__user_2` (`rfidKey`),
  CONSTRAINT `FK__user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_2` FOREIGN KEY (`rfidKey`) REFERENCES `user` (`rfidKey`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.inbody_profile:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `inbody_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `inbody_profile` ENABLE KEYS */;

-- 테이블 salus.lowerroutine-excercise 구조 내보내기
CREATE TABLE IF NOT EXISTS `lowerroutine-excercise` (
  `lowerRoutineId` int(11) NOT NULL,
  `excerciseId` int(11) NOT NULL,
  KEY `FK1_lower_excercise` (`lowerRoutineId`),
  KEY `FK2_lowerroutine-excercise_routineexcercise` (`excerciseId`),
  CONSTRAINT `FK1_lower_excercise` FOREIGN KEY (`lowerRoutineId`) REFERENCES `lower_routine` (`lowerRoutineId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK2_lowerroutine-excercise_routineexcercise` FOREIGN KEY (`excerciseId`) REFERENCES `routine_excercise` (`excerciseId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.lowerroutine-excercise:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `lowerroutine-excercise` DISABLE KEYS */;
/*!40000 ALTER TABLE `lowerroutine-excercise` ENABLE KEYS */;

-- 테이블 salus.lower_routine 구조 내보내기
CREATE TABLE IF NOT EXISTS `lower_routine` (
  `lowerRoutineId` int(11) NOT NULL AUTO_INCREMENT,
  `lowerRoutinetTitle` int(11) NOT NULL,
  PRIMARY KEY (`lowerRoutineId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.lower_routine:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `lower_routine` DISABLE KEYS */;
/*!40000 ALTER TABLE `lower_routine` ENABLE KEYS */;

-- 테이블 salus.manager 구조 내보내기
CREATE TABLE IF NOT EXISTS `manager` (
  `managerId` int(11) NOT NULL AUTO_INCREMENT,
  `managerLastName` varchar(20) NOT NULL,
  `managerFirstname` varchar(20) NOT NULL,
  `adminPassword` varchar(30) NOT NULL,
  `adminEmail` text NOT NULL,
  `gymId` int(11) DEFAULT NULL,
  PRIMARY KEY (`managerId`),
  KEY `FK_manager_gym` (`gymId`),
  CONSTRAINT `FK_manager_gym` FOREIGN KEY (`gymId`) REFERENCES `gym` (`gymId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.manager:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;

-- 테이블 salus.routine 구조 내보내기
CREATE TABLE IF NOT EXISTS `routine` (
  `routineId` int(11) NOT NULL,
  `managerId` int(11) DEFAULT NULL,
  `routineName` varchar(20) NOT NULL,
  `routineDescription` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`routineId`),
  KEY `fk1_manager_routine` (`managerId`),
  CONSTRAINT `fk1_manager_routine` FOREIGN KEY (`managerId`) REFERENCES `manager` (`managerId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.routine:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `routine` DISABLE KEYS */;
/*!40000 ALTER TABLE `routine` ENABLE KEYS */;

-- 테이블 salus.routine-lowerroutine 구조 내보내기
CREATE TABLE IF NOT EXISTS `routine-lowerroutine` (
  `routineId` int(11) NOT NULL,
  `managerId` int(11) DEFAULT NULL,
  `lowerRoutineId` int(11) NOT NULL,
  KEY `FK1_routine_lower` (`routineId`),
  KEY `FK2_routine_lower` (`managerId`),
  KEY `FK3_lower_routine` (`lowerRoutineId`),
  CONSTRAINT `FK1_routine_lower` FOREIGN KEY (`routineId`) REFERENCES `routine` (`routineId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK2_routine_lower` FOREIGN KEY (`managerId`) REFERENCES `routine` (`managerId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK3_lower_routine` FOREIGN KEY (`lowerRoutineId`) REFERENCES `lower_routine` (`lowerRoutineId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.routine-lowerroutine:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `routine-lowerroutine` DISABLE KEYS */;
/*!40000 ALTER TABLE `routine-lowerroutine` ENABLE KEYS */;

-- 테이블 salus.routine_excercise 구조 내보내기
CREATE TABLE IF NOT EXISTS `routine_excercise` (
  `excerciseId` int(11) NOT NULL AUTO_INCREMENT,
  `targetWeight` int(11) DEFAULT NULL,
  `targetNumber` int(11) DEFAULT NULL,
  `targetSet` int(11) DEFAULT NULL,
  `excerciseName` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`excerciseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.routine_excercise:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `routine_excercise` DISABLE KEYS */;
/*!40000 ALTER TABLE `routine_excercise` ENABLE KEYS */;

-- 테이블 salus.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `rfidKey` bigint(20) DEFAULT NULL,
  `email` varchar(40) NOT NULL DEFAULT '',
  `lastName` varchar(20) NOT NULL DEFAULT '',
  `firstName` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(30) NOT NULL DEFAULT '',
  `phone` varchar(20) NOT NULL DEFAULT '',
  `birthDay` datetime NOT NULL,
  `gymPassStart` datetime DEFAULT NULL,
  `gymPassEnd` datetime DEFAULT NULL,
  `targetWeight` int(10) unsigned zerofill DEFAULT NULL,
  `excerciseStart` datetime DEFAULT NULL,
  `totalexcerciseTime` int(10) unsigned zerofill DEFAULT NULL,
  `dailyStart` datetime DEFAULT NULL,
  `dailyEnd` datetime DEFAULT NULL,
  `excerciseCheck` tinyint(4) NOT NULL,
  `gymId` int(11) DEFAULT NULL,
  PRIMARY KEY (`userid`) USING BTREE,
  KEY `email` (`email`),
  KEY `gymId` (`gymId`),
  KEY `RFID` (`rfidKey`) USING BTREE,
  CONSTRAINT `gymId` FOREIGN KEY (`gymId`) REFERENCES `gym` (`gymId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.user:~1 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`userid`, `rfidKey`, `email`, `lastName`, `firstName`, `password`, `phone`, `birthDay`, `gymPassStart`, `gymPassEnd`, `targetWeight`, `excerciseStart`, `totalexcerciseTime`, `dailyStart`, `dailyEnd`, `excerciseCheck`, `gymId`) VALUES
	(3, NULL, 'ssafy@ssafy.com', '정', '싸피', '1234', '010-1234-1234', '1995-11-16 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 테이블 salus.user-achievement 구조 내보내기
CREATE TABLE IF NOT EXISTS `user-achievement` (
  `userId` int(11) NOT NULL,
  `rfidKey` bigint(20) DEFAULT NULL,
  `achievementId` int(11) NOT NULL,
  KEY `FK_user-achievement_user` (`userId`),
  KEY `FK2_user-achievement_user` (`rfidKey`),
  KEY `FK_user-achievement_achievement` (`achievementId`),
  CONSTRAINT `FK2_user-achievement_user` FOREIGN KEY (`rfidKey`) REFERENCES `user` (`rfidKey`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user-achievement_achievement` FOREIGN KEY (`achievementId`) REFERENCES `achievement` (`achievementId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user-achievement_user` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.user-achievement:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user-achievement` DISABLE KEYS */;
/*!40000 ALTER TABLE `user-achievement` ENABLE KEYS */;

-- 테이블 salus.user-routine 구조 내보내기
CREATE TABLE IF NOT EXISTS `user-routine` (
  `userId` int(11) NOT NULL,
  `rfidKey` bigint(20) DEFAULT NULL,
  `routineId` int(11) NOT NULL,
  `managerId` int(11) DEFAULT NULL,
  KEY `FK1_user_routine` (`userId`),
  KEY `FK2_user-routine_user` (`rfidKey`),
  KEY `FK3_user-routineroutine` (`routineId`),
  KEY `FK_user-routine_routine` (`managerId`),
  CONSTRAINT `FK1_user_routine` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK2_user-routine_user` FOREIGN KEY (`rfidKey`) REFERENCES `user` (`rfidKey`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK3_user-routineroutine` FOREIGN KEY (`routineId`) REFERENCES `routine` (`routineId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user-routine_routine` FOREIGN KEY (`managerId`) REFERENCES `routine` (`managerId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.user-routine:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user-routine` DISABLE KEYS */;
/*!40000 ALTER TABLE `user-routine` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

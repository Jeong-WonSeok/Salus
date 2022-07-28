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

-- 테이블 salus.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
  `subjectNo` int(11) NOT NULL AUTO_INCREMENT,
  `board_gymId` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `writeDate` date NOT NULL,
  `hits` int(11) DEFAULT NULL,
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`subjectNo`),
  KEY `FK1_manager_board` (`board_gymId`) USING BTREE,
  CONSTRAINT `FK1_gymId_board` FOREIGN KEY (`board_gymId`) REFERENCES `gym` (`gymId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.board:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 salus.daily_routine 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_routine` (
  `dailyRoutineId` int(11) NOT NULL AUTO_INCREMENT,
  `excerciseDay` date NOT NULL,
  `progress` double DEFAULT NULL,
  `dailyExcerciseTime` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `oneDayRoutineTitle` varchar(20) NOT NULL,
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`dailyRoutineId`),
  KEY `FK_daily_routine_user` (`userId`),
  KEY `excerciseDay` (`excerciseDay`),
  KEY `FK_daily_routine_routine` (`oneDayRoutineTitle`),
  CONSTRAINT `FK_daily_routine_routine` FOREIGN KEY (`oneDayRoutineTitle`) REFERENCES `routine` (`oneDayRoutineTitle`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_daily_routine_user` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.daily_routine:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `daily_routine` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily_routine` ENABLE KEYS */;

-- 테이블 salus.daily_routine_detail 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_routine_detail` (
  `dailyExcerciseId` int(11) NOT NULL,
  `startTime` timestamp NULL DEFAULT NULL,
  `endTime` timestamp NULL DEFAULT NULL,
  `excerciseProgress` double DEFAULT NULL,
  `weightNow` int(11) DEFAULT NULL,
  `numberNow` int(11) DEFAULT NULL,
  `setNow` int(11) DEFAULT NULL,
  `excerciseDay` date NOT NULL,
  `dailyRoutineId` int(11) NOT NULL,
  `equipmentName` varchar(30) NOT NULL,
  `firstRegist` datetime NOT NULL,
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`dailyExcerciseId`),
  KEY `FK1_dailyroutineId` (`dailyRoutineId`),
  KEY `FK2_equipmentName` (`equipmentName`),
  CONSTRAINT `FK1_dailyroutineId` FOREIGN KEY (`dailyRoutineId`) REFERENCES `daily_routine` (`dailyRoutineId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK2_equipmentName` FOREIGN KEY (`equipmentName`) REFERENCES `fitness_equiepment` (`equipmentName`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.daily_routine_detail:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `daily_routine_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily_routine_detail` ENABLE KEYS */;

-- 테이블 salus.fitness_equipment 구조 내보내기
CREATE TABLE IF NOT EXISTS `fitness_equipment` (
  `equipmentId` int(11) NOT NULL AUTO_INCREMENT,
  `equipmentName` varchar(64) NOT NULL,
  `equipmentEnglishName` varchar(64) NOT NULL,
  `equipmentCategory` varchar(20) DEFAULT NULL,
  `gymid` int(11) DEFAULT 0,
  `equipmentImage` varchar(64) DEFAULT NULL,
  `equipmentStimulate` varchar(50) DEFAULT NULL,
  `equipmentEnglishStimulate` varchar(50) DEFAULT NULL,
  `equipmentDescription` text DEFAULT NULL,
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`equipmentId`) USING BTREE,
  KEY `equipmentCategory` (`equipmentCategory`) USING BTREE,
  KEY `equipmentName` (`equipmentName`) USING BTREE,
  KEY `FK_fitness equiepment_gym` (`gymid`) USING BTREE,
  KEY `eqipmentEnglishName` (`equipmentEnglishName`) USING BTREE,
  CONSTRAINT `FK_fitness equiepment_gym` FOREIGN KEY (`gymid`) REFERENCES `gym` (`gymId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.fitness_equipment:~26 rows (대략적) 내보내기
/*!40000 ALTER TABLE `fitness_equipment` DISABLE KEYS */;
INSERT INTO `fitness_equipment` (`equipmentId`, `equipmentName`, `equipmentEnglishName`, `equipmentCategory`, `gymid`, `equipmentImage`, `equipmentStimulate`, `equipmentEnglishStimulate`, `equipmentDescription`, `firstRegist`, `updateRegist`) VALUES
	(1, '런닝머신', 'Treadmill', '유산소', 1, NULL, '', '', '야외에서 달리는 것처럼 제자리뛰기를 할 수 있게 해준다.', '2022-07-27 17:24:52', '2022-07-27 17:24:52'),
	(2, '로잉 머신', 'Rowing Machine', '전신', 1, NULL, '', '', '로잉 머신(Rowing machine)은 조정(스포츠) 선수들이 실내에서 운동 할 때 쓰는 기구이고 전신에 자극을 줄 수 있다는 것과 자비 없는 운동량으로 유명하다.', '2022-07-27 17:42:10', '2022-07-27 17:42:10'),
	(3, '숄더프레스 머신', 'Sholder Press Machine', '상체', 1, NULL, '어깨', 'shoulders', '어깨 근육(삼각근)의 전면과 측면 부위의 근매스를 올리기 좋은 대표적인 운동입니다.', '2022-07-27 17:57:37', '2022-07-27 17:57:37'),
	(4, '체스트 프레스 머신', 'Chest Press Machine', '상체', 1, NULL, '가슴', 'pecs', '', '2022-07-27 22:59:58', '2022-07-27 22:59:58'),
	(5, '버터플라이 머신', 'Butterfly Machine', '상체', 1, NULL, '가슴, 어깨, 복근', 'pecs, shoulders, obliques', '', '2022-07-27 23:01:33', '2022-07-27 23:01:33'),
	(6, '펙덱 플라이 머신', 'Fly - Pec Dec Machine', '상체', 1, NULL, '가슴', 'pecs', '', '2022-07-27 23:02:11', '2022-07-27 23:02:11'),
	(7, '업도미널 머신', 'Abdominal Machine', '상체', 1, NULL, '복근', 'obliques', '', '2022-07-27 23:02:49', '2022-07-27 23:02:49'),
	(8, '컬 머신', 'Curl Machine', '상체', 1, NULL, '이두근', 'biceps', '', '2022-07-27 23:03:36', '2022-07-27 23:03:36'),
	(9, '리어델트 머신', 'Rear Delt Machine', '상체', 1, NULL, '어깨', 'shoulders', '', '2022-07-27 23:04:02', '2022-07-27 23:04:02'),
	(10, '렛 풀다운 머신', 'Lat Pull Down Machine', '상체', 1, NULL, '광배근, 삼두근', 'lats, triceps', '', '2022-07-27 23:04:58', '2022-07-28 00:29:23'),
	(11, '인클라인 벤치 프레스 머신', 'Incline Bench Press Machine', '상체', 1, NULL, '가슴', 'pecs', '', '2022-07-27 23:05:38', '2022-07-27 23:07:19'),
	(12, '레터럴 레이즈 머신', 'Lateral Raise Machine', '상체', 1, NULL, '어깨', 'shoulders', '', '2022-07-27 23:05:55', '2022-07-27 23:07:27'),
	(13, '티 바 로우 머신', 'Tbar-row Machine', '상체', 1, NULL, '광배근', 'lats', '', '2022-07-27 23:06:16', '2022-07-27 23:06:16'),
	(14, '시티드 로우 머신', 'Seated Row Machine', '상체', 1, NULL, '광배근, 승모근', 'lats, traps', '', '2022-07-27 23:06:30', '2022-07-28 00:27:04'),
	(15, '어시스트 풀업 머신', 'Assisted Pullup Machine', '상체', 1, NULL, '광배근', 'lats', '', '2022-07-27 23:06:52', '2022-07-27 23:06:52'),
	(16, '레그 컬 머신', 'Leg Curl Machine', '하체', 1, NULL, '허벅지, 종아리', 'quads, calves', '', '2022-07-27 23:08:13', '2022-07-28 00:22:46'),
	(17, '레그 익스텐션 머신', 'Leg Extension Machine', '하체', 1, NULL, '허벅지', 'quads', '', '2022-07-27 23:09:36', '2022-07-27 23:10:17'),
	(18, '힙 어덕터', 'Hip Adductor', '하체', 1, NULL, '허벅지', 'quads', '', '2022-07-27 23:10:07', '2022-07-27 23:12:01'),
	(19, '핵 스쿼트 머신', 'Hack-squat Machine', '하체', 1, NULL, '허벅지, 햄스트링, 둔근', 'quads, hamstrings, glutes', '', '2022-07-27 23:11:59', '2022-07-27 23:11:59'),
	(20, '브이 스쿼트 머신', 'V-squat Machine', '하체', 1, NULL, '허벅지, 둔근', 'quads, glutes', '', '2022-07-27 23:13:58', '2022-07-27 23:14:08'),
	(21, '파워 레그프레스 머신', 'Power Leg Press Machine', '하체', 1, NULL, '허벅지, 둔근', 'quads, glutes', '', '2022-07-27 23:14:36', '2022-07-27 23:14:36'),
	(22, '이너사이 머신', 'Inner Thigh Machine', '하체', 1, NULL, '허벅지', 'quads', '', '2022-07-27 23:15:02', '2022-07-27 23:15:02'),
	(23, '라잉 레그 컬', 'Lying Leg Curl', '하체', 1, NULL, '허벅지', 'quads', '', '2022-07-27 23:15:26', '2022-07-27 23:15:26'),
	(24, '시티드 레그 프레스 머신', 'Seated Leg Press Machine', '하체', 1, NULL, '허벅지, 엉덩이', 'quads, glutes', '', '2022-07-27 23:15:52', '2022-07-27 23:15:52'),
	(25, '토탈 힙', 'Total Hip machine', '하체', 1, NULL, '허벅지, 엉덩이', 'quads, glutes', '', '2022-07-27 23:16:11', '2022-07-27 23:16:11'),
	(26, '크런치 머신', 'Crunch machine', '상체', 1, NULL, '복근', 'obliques', '', '2022-07-27 23:17:36', '2022-07-27 23:17:36');
/*!40000 ALTER TABLE `fitness_equipment` ENABLE KEYS */;

-- 테이블 salus.gym 구조 내보내기
CREATE TABLE IF NOT EXISTS `gym` (
  `gymId` int(11) NOT NULL AUTO_INCREMENT,
  `gymName` varchar(50) NOT NULL,
  `gymAddress` text NOT NULL,
  `gymOpenTime` time DEFAULT NULL,
  `gymCloseTime` time DEFAULT NULL,
  `gymMap` varchar(50) DEFAULT NULL,
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`gymId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.gym:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `gym` DISABLE KEYS */;
INSERT INTO `gym` (`gymId`, `gymName`, `gymAddress`, `gymOpenTime`, `gymCloseTime`, `gymMap`, `firstRegist`, `updateRegist`) VALUES
	(1, 'salus', '대전광역시 유성구', '06:00:00', '24:00:00', NULL, '2022-07-27 16:18:50', '2022-07-27 16:19:20');
/*!40000 ALTER TABLE `gym` ENABLE KEYS */;

-- 테이블 salus.inbody_profile 구조 내보내기
CREATE TABLE IF NOT EXISTS `inbody_profile` (
  `userid` int(11) NOT NULL,
  `rfidKey` bigint(20) DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `skeletalMuscle` double DEFAULT NULL,
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
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`userid`),
  KEY `FK__user_2` (`rfidKey`),
  CONSTRAINT `FK__user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__user_2` FOREIGN KEY (`rfidKey`) REFERENCES `user` (`rfidKey`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.inbody_profile:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `inbody_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `inbody_profile` ENABLE KEYS */;

-- 테이블 salus.manager 구조 내보내기
CREATE TABLE IF NOT EXISTS `manager` (
  `managerId` int(11) NOT NULL AUTO_INCREMENT,
  `managerLastName` varchar(20) NOT NULL,
  `managerFirstname` varchar(20) NOT NULL,
  `adminPassword` varchar(30) NOT NULL,
  `adminEmail` varchar(40) NOT NULL DEFAULT '',
  `gymId` int(11) DEFAULT NULL,
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`managerId`),
  UNIQUE KEY `adminEmail` (`adminEmail`),
  KEY `FK_manager_gym` (`gymId`),
  CONSTRAINT `FK_manager_gym` FOREIGN KEY (`gymId`) REFERENCES `gym` (`gymId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.manager:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;

-- 테이블 salus.routine 구조 내보내기
CREATE TABLE IF NOT EXISTS `routine` (
  `routineId` int(11) NOT NULL,
  `oneDayRoutineTitle` varchar(20) DEFAULT NULL,
  `managerId` int(11) DEFAULT NULL,
  `repeatRoutineTitle` varchar(64) DEFAULT NULL,
  `oneDayRoutineDescription` varchar(40) DEFAULT NULL,
  `targetWeight` int(11) DEFAULT NULL,
  `targetCount` int(11) DEFAULT NULL,
  `targetSet` int(11) DEFAULT NULL,
  `targetTime` int(11) DEFAULT NULL,
  `equipmentName` varchar(64) DEFAULT NULL,
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`routineId`),
  KEY `fk1_manager_routine` (`managerId`),
  KEY `FK_routine_fitness_equiepment` (`equipmentName`),
  KEY `oneDayRoutineTitle` (`oneDayRoutineTitle`),
  CONSTRAINT `FK_routine_fitness_equiepment` FOREIGN KEY (`equipmentName`) REFERENCES `fitness_equiepment` (`equipmentName`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk1_manager_routine` FOREIGN KEY (`managerId`) REFERENCES `manager` (`managerId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.routine:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `routine` DISABLE KEYS */;
/*!40000 ALTER TABLE `routine` ENABLE KEYS */;

-- 테이블 salus.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `rfidKey` bigint(20) DEFAULT NULL,
  `rfidKey2` bigint(20) DEFAULT NULL,
  `rfidKey3` bigint(20) DEFAULT NULL,
  `email` varchar(40) NOT NULL DEFAULT '',
  `name` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(30) DEFAULT '',
  `phone` varchar(20) DEFAULT '',
  `birthDay` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT '',
  `gymPassStart` date DEFAULT NULL,
  `gymPassEnd` date DEFAULT NULL,
  `excerciseStart` date DEFAULT NULL,
  `totalexcerciseTime` int(10) unsigned zerofill DEFAULT NULL,
  `dailyStart` datetime DEFAULT NULL,
  `dailyEnd` datetime DEFAULT NULL,
  `excerciseCheck` tinyint(4) DEFAULT NULL,
  `gymId` int(11) DEFAULT NULL,
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`userid`) USING BTREE,
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `rfidKey` (`rfidKey`),
  UNIQUE KEY `rfidKey2` (`rfidKey2`),
  UNIQUE KEY `rfidKey3` (`rfidKey3`),
  KEY `gymId` (`gymId`),
  CONSTRAINT `gymId` FOREIGN KEY (`gymId`) REFERENCES `gym` (`gymId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.user:~1 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`userid`, `rfidKey`, `rfidKey2`, `rfidKey3`, `email`, `name`, `password`, `phone`, `birthDay`, `gender`, `gymPassStart`, `gymPassEnd`, `excerciseStart`, `totalexcerciseTime`, `dailyStart`, `dailyEnd`, `excerciseCheck`, `gymId`, `firstRegist`, `updateRegist`) VALUES
	(13, NULL, NULL, NULL, 'sbpark110542@naver.com', '박성배', '', '', '1995-11-05', 'male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-07-27 11:48:29', '2022-07-27 11:48:29');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 테이블 salus.user-routine 구조 내보내기
CREATE TABLE IF NOT EXISTS `user-routine` (
  `userId` int(11) NOT NULL,
  `rfidKey` bigint(20) DEFAULT NULL,
  `routineId` int(11) NOT NULL,
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  KEY `FK1_user_routine` (`userId`),
  KEY `FK2_user-routine_user` (`rfidKey`),
  KEY `FK3_user-routineroutine` (`routineId`),
  CONSTRAINT `FK1_user_routine` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK2_user-routine_user` FOREIGN KEY (`rfidKey`) REFERENCES `user` (`rfidKey`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK3_user-routineroutine` FOREIGN KEY (`routineId`) REFERENCES `routine` (`routineId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.user-routine:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user-routine` DISABLE KEYS */;
/*!40000 ALTER TABLE `user-routine` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

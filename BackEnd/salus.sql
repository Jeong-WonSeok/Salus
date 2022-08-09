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

-- 테이블 salus.attendance 구조 내보내기
CREATE TABLE IF NOT EXISTS `attendance` (
  `rfidKey` bigint(20) NOT NULL,
  `dailyExcerciseStart` datetime DEFAULT NULL,
  `dailyExcerciseEnd` datetime DEFAULT NULL,
  `attendanceCheck` tinyint(1) unsigned zerofill DEFAULT NULL,
  `excerciseDay` date DEFAULT NULL,
  `firstRegist` datetime DEFAULT current_timestamp(),
  `updateRegist` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  KEY `rfidKey` (`rfidKey`),
  CONSTRAINT `fk_rfidkey` FOREIGN KEY (`rfidKey`) REFERENCES `user` (`rfidKey`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.attendance:~7 rows (대략적) 내보내기
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` (`rfidKey`, `dailyExcerciseStart`, `dailyExcerciseEnd`, `attendanceCheck`, `excerciseDay`, `firstRegist`, `updateRegist`) VALUES
	(12341234, '2022-08-04 14:00:00', '2022-08-04 16:00:00', 0, '2022-08-04', '2022-08-04 14:40:23', '2022-08-09 15:24:11'),
	(12341234, '2022-08-05 14:00:00', '2022-08-05 16:00:00', 0, '2022-08-05', '2022-08-05 13:53:46', '2022-08-09 15:26:32'),
	(12341234, '2022-08-08 11:00:00', '2022-08-08 13:00:00', 0, '2022-08-08', '2022-08-08 09:48:20', '2022-08-09 15:26:54'),
	(12341234, '2022-08-09 12:00:00', '2022-08-09 18:19:57', 0, '2022-08-09', '2022-08-09 01:54:18', '2022-08-09 18:19:57'),
	(12341234, '2022-08-06 14:00:00', '2022-08-06 16:00:00', 0, '2022-08-06', '2022-08-06 14:54:45', '2022-08-09 15:26:37'),
	(12341234, '2022-08-07 14:00:00', '2022-08-07 16:00:00', 0, '2022-08-07', '2022-08-09 14:58:22', '2022-08-09 15:26:42'),
	(11111111, '2022-08-09 15:15:31', '2022-08-09 15:28:49', 0, '2022-08-09', '2022-08-09 15:15:41', '2022-08-09 15:28:49');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;

-- 테이블 salus.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
  `subjectNo` int(11) NOT NULL AUTO_INCREMENT,
  `gymId` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `writeDate` date NOT NULL,
  `hits` int(11) DEFAULT NULL,
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`subjectNo`),
  KEY `FK1_manager_board` (`gymId`) USING BTREE,
  CONSTRAINT `FK1_gymId_board` FOREIGN KEY (`gymId`) REFERENCES `gym` (`gymId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.board:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 salus.daily_excercise 구조 내보내기
CREATE TABLE IF NOT EXISTS `daily_excercise` (
  `dailyExcerciseId` int(11) NOT NULL AUTO_INCREMENT,
  `equipmentName` varchar(30) NOT NULL,
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `weightNow` int(11) DEFAULT NULL,
  `countNow` int(11) DEFAULT NULL,
  `excerciseDay` date NOT NULL DEFAULT current_timestamp(),
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `rfidKey` bigint(20) NOT NULL,
  PRIMARY KEY (`dailyExcerciseId`),
  KEY `FK2_equipmentName` (`equipmentName`),
  KEY `FK_daily_excercise_user` (`rfidKey`),
  CONSTRAINT `FK_daily_excercise_user` FOREIGN KEY (`rfidKey`) REFERENCES `user` (`rfidKey`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.daily_excercise:~10 rows (대략적) 내보내기
/*!40000 ALTER TABLE `daily_excercise` DISABLE KEYS */;
INSERT INTO `daily_excercise` (`dailyExcerciseId`, `equipmentName`, `startTime`, `endTime`, `weightNow`, `countNow`, `excerciseDay`, `firstRegist`, `updateRegist`, `rfidKey`) VALUES
	(1, '숄더프레스 머신', '2022-08-08 14:52:09', '2022-08-08 15:52:10', 90, 20, '2022-08-08', '2022-08-07 14:52:08', '2022-08-09 18:21:11', 12341234),
	(2, '레그 컬 머신', '2022-08-05 14:52:52', '2022-08-05 15:52:53', 10, 30, '2022-08-05', '2022-08-04 14:52:50', '2022-08-09 16:44:11', 12341234),
	(3, '레그 컬 머신', '2022-08-06 14:08:13', '2022-08-06 15:08:14', 20, 25, '2022-08-06', '2022-08-05 14:08:21', '2022-08-09 16:44:17', 12341234),
	(14, '레그 컬 머신', '2022-08-06 15:53:00', '2022-08-06 16:53:00', 30, 40, '2022-08-06', '2022-08-08 09:28:30', '2022-08-09 16:44:29', 12341234),
	(15, '숄더프레스 머신', '2022-08-09 11:23:05', '2022-08-09 13:23:05', 100, 25, '2022-08-09', '2022-08-09 11:23:17', '2022-08-09 18:17:18', 12341234),
	(17, '렛 풀다운 머신', '2022-08-08 12:06:25', '2022-08-08 13:06:25', 100, 10, '2022-08-08', '2022-08-08 12:06:36', '2022-08-09 14:36:44', 12341234),
	(18, '레그 컬 머신', '2022-08-08 13:37:37', '2022-08-08 14:37:38', 35, 40, '2022-08-08', '2022-08-08 13:37:49', '2022-08-09 16:44:36', 12341234),
	(19, '런닝머신', '2022-08-09 13:35:33', '2022-08-09 15:35:33', NULL, NULL, '2022-08-09', '2022-08-09 13:35:43', '2022-08-09 18:10:44', 12341234),
	(20, '토탈 힙', '2022-08-07 14:36:15', '2022-08-07 15:36:23', 100, 10, '2022-08-07', '2022-08-09 14:36:37', '2022-08-09 14:36:40', 12341234),
	(21, '체스트 프레스 머신', '2022-08-09 14:38:13', '2022-08-09 15:38:14', 100, 10, '2022-08-09', '2022-08-09 14:38:21', '2022-08-09 14:38:21', 12341234),
	(22, '런닝머신', '2022-04-01 11:00:00', '2022-04-01 11:30:00', NULL, NULL, '2022-04-01', '2022-04-01 16:46:45', '2022-08-09 16:46:50', 12341234),
	(23, '런닝머신', '2022-04-03 11:00:00', '2022-04-03 11:30:00', NULL, NULL, '2022-04-03', '2022-04-03 16:47:19', '2022-08-09 17:43:38', 12341234),
	(24, '버터플라이 머신', '2022-04-01 11:30:00', '2022-04-01 12:00:00', 40, 80, '2022-04-01', '2022-04-01 16:56:53', '2022-08-09 16:57:45', 12341234),
	(25, '숄더프레스 머신', '2022-04-01 11:30:00', '2022-04-01 12:00:00', 10, 50, '2022-04-01', '2022-04-01 17:18:45', '2022-08-09 18:01:20', 12341234),
	(26, '숄더프레스 머신', '2022-04-03 11:30:00', '2022-04-03 12:00:00', 20, 40, '2022-04-03', '2022-04-03 17:58:33', '2022-08-09 17:58:35', 12341234),
	(27, '숄더프레스 머신', '2022-05-01 11:30:00', '2022-05-01 12:00:00', 40, 50, '2022-05-01', '2022-05-01 17:59:35', '2022-08-09 18:00:34', 12341234),
	(28, '숄더프레스 머신', '2022-05-03 11:30:00', '2022-05-03 12:00:00', 50, 40, '2022-05-03', '2022-05-03 18:00:17', '2022-08-09 18:00:22', 12341234),
	(29, '숄더프레스 머신', '2022-06-01 11:30:00', '2022-06-01 12:00:00', 50, 40, '2022-06-01', '2022-06-01 18:03:23', '2022-08-09 18:03:24', 12341234),
	(30, '숄더프레스 머신', '2022-06-03 11:30:00', '2022-06-03 12:00:00', 60, 40, '2022-06-03', '2022-06-03 18:04:22', '2022-08-09 18:04:24', 12341234),
	(31, '숄더프레스 머신', '2022-07-01 11:30:00', '2022-07-01 12:00:00', 70, 30, '2022-07-01', '2022-07-01 18:05:20', '2022-08-09 18:05:24', 12341234),
	(32, '숄더프레스 머신', '2022-07-03 11:30:00', '2022-07-03 12:00:00', 80, 20, '2022-07-03', '2022-07-03 18:06:28', '2022-08-09 18:06:31', 12341234),
	(33, '런닝머신', '2022-05-01 11:00:00', '2022-05-01 11:30:00', NULL, NULL, '2022-05-01', '2022-05-01 18:07:35', '2022-08-09 18:07:38', 12341234),
	(34, '런닝머신', '2022-05-03 10:00:00', '2022-05-03 10:45:00', NULL, NULL, '2022-05-03', '2022-05-03 18:08:05', '2022-08-09 18:08:07', 12341234),
	(35, '런닝머신', '2022-06-01 10:00:00', '2022-06-01 11:00:03', NULL, NULL, '2022-06-01', '2022-06-01 18:08:32', '2022-08-09 18:08:34', 12341234),
	(36, '런닝머신', '2022-06-03 10:00:00', '2022-06-03 11:00:00', NULL, NULL, '2022-06-03', '2022-06-03 18:08:58', '2022-08-09 18:09:00', 12341234),
	(37, '런닝머신', '2022-07-01 10:00:00', '2022-07-01 12:00:00', NULL, NULL, '2022-07-01', '2022-06-01 18:09:25', '2022-08-09 18:09:28', 12341234),
	(38, '런닝머신', '2022-07-03 10:00:00', '2022-07-03 11:45:00', NULL, NULL, '2022-07-03', '2022-07-03 18:09:53', '2022-08-09 18:10:00', 12341234),
	(39, '런닝머신', '2022-08-07 10:00:00', '2022-08-07 11:00:00', NULL, NULL, '2022-08-07', '2022-08-07 18:10:34', '2022-08-09 18:10:35', 12341234);
/*!40000 ALTER TABLE `daily_excercise` ENABLE KEYS */;

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
  `isStarted` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`equipmentId`) USING BTREE,
  KEY `equipmentCategory` (`equipmentCategory`) USING BTREE,
  KEY `equipmentName` (`equipmentName`) USING BTREE,
  KEY `FK_fitness equiepment_gym` (`gymid`) USING BTREE,
  KEY `eqipmentEnglishName` (`equipmentEnglishName`) USING BTREE,
  CONSTRAINT `FK_fitness equiepment_gym` FOREIGN KEY (`gymid`) REFERENCES `gym` (`gymId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.fitness_equipment:~26 rows (대략적) 내보내기
/*!40000 ALTER TABLE `fitness_equipment` DISABLE KEYS */;
INSERT INTO `fitness_equipment` (`equipmentId`, `equipmentName`, `equipmentEnglishName`, `equipmentCategory`, `gymid`, `equipmentImage`, `equipmentStimulate`, `equipmentEnglishStimulate`, `equipmentDescription`, `firstRegist`, `updateRegist`, `isStarted`) VALUES
	(1, '런닝머신', 'Treadmill', '유산소', 1, NULL, '', '', '야외에서 달리는 것처럼 제자리뛰기를 할 수 있게 해준다.', '2022-07-27 17:24:52', '2022-08-09 11:49:54', 0),
	(2, '로잉 머신', 'Rowing Machine', '전신', 1, NULL, '', '', '로잉 머신(Rowing machine)은 조정(스포츠) 선수들이 실내에서 운동 할 때 쓰는 기구이고 전신에 자극을 줄 수 있다는 것과 자비 없는 운동량으로 유명하다.', '2022-07-27 17:42:10', '2022-07-27 17:42:10', 0),
	(3, '숄더프레스 머신', 'Sholder Press Machine', '상체', 1, NULL, '어깨', 'shoulders', '어깨 근육(삼각근)의 전면과 측면 부위의 근매스를 올리기 좋은 대표적인 운동입니다.', '2022-07-27 17:57:37', '2022-07-27 17:57:37', 0),
	(4, '체스트 프레스 머신', 'Chest Press Machine', '상체', 1, NULL, '가슴', 'pecs', '', '2022-07-27 22:59:58', '2022-07-27 22:59:58', 0),
	(5, '버터플라이 머신', 'Butterfly Machine', '상체', 1, NULL, '가슴, 어깨, 복근', 'pecs, shoulders, obliques', '', '2022-07-27 23:01:33', '2022-07-27 23:01:33', 0),
	(6, '펙덱 플라이 머신', 'Fly - Pec Dec Machine', '상체', 1, NULL, '가슴', 'pecs', '', '2022-07-27 23:02:11', '2022-07-27 23:02:11', 0),
	(7, '업도미널 머신', 'Abdominal Machine', '상체', 1, NULL, '복근', 'obliques', '', '2022-07-27 23:02:49', '2022-07-27 23:02:49', 0),
	(8, '컬 머신', 'Curl Machine', '상체', 1, NULL, '이두근', 'biceps', '', '2022-07-27 23:03:36', '2022-07-27 23:03:36', 0),
	(9, '리어델트 머신', 'Rear Delt Machine', '상체', 1, NULL, '어깨', 'shoulders', '', '2022-07-27 23:04:02', '2022-07-27 23:04:02', 0),
	(10, '렛 풀다운 머신', 'Lat Pull Down Machine', '상체', 1, NULL, '광배근, 삼두근', 'lats, triceps', '', '2022-07-27 23:04:58', '2022-07-28 00:29:23', 0),
	(11, '인클라인 벤치 프레스 머신', 'Incline Bench Press Machine', '상체', 1, NULL, '가슴', 'pecs', '', '2022-07-27 23:05:38', '2022-07-27 23:07:19', 0),
	(12, '레터럴 레이즈 머신', 'Lateral Raise Machine', '상체', 1, NULL, '어깨', 'shoulders', '', '2022-07-27 23:05:55', '2022-07-27 23:07:27', 0),
	(13, '티 바 로우 머신', 'Tbar-row Machine', '상체', 1, NULL, '광배근', 'lats', '', '2022-07-27 23:06:16', '2022-07-27 23:06:16', 0),
	(14, '시티드 로우 머신', 'Seated Row Machine', '상체', 1, NULL, '광배근, 승모근', 'lats, traps', '', '2022-07-27 23:06:30', '2022-07-28 00:27:04', 0),
	(15, '어시스트 풀업 머신', 'Assisted Pullup Machine', '상체', 1, NULL, '광배근', 'lats', '', '2022-07-27 23:06:52', '2022-07-27 23:06:52', 0),
	(16, '레그 컬 머신', 'Leg Curl Machine', '하체', 1, NULL, '허벅지, 종아리', 'quads, calves', '', '2022-07-27 23:08:13', '2022-07-28 00:22:46', 0),
	(17, '레그 익스텐션 머신', 'Leg Extension Machine', '하체', 1, NULL, '허벅지', 'quads', '', '2022-07-27 23:09:36', '2022-07-27 23:10:17', 0),
	(18, '힙 어덕터', 'Hip Adductor', '하체', 1, NULL, '허벅지', 'quads', '', '2022-07-27 23:10:07', '2022-07-27 23:12:01', 0),
	(19, '핵 스쿼트 머신', 'Hack-squat Machine', '하체', 1, NULL, '허벅지, 햄스트링, 둔근', 'quads, hamstrings, glutes', '', '2022-07-27 23:11:59', '2022-07-27 23:11:59', 0),
	(20, '브이 스쿼트 머신', 'V-squat Machine', '하체', 1, NULL, '허벅지, 둔근', 'quads, glutes', '', '2022-07-27 23:13:58', '2022-07-27 23:14:08', 0),
	(21, '파워 레그프레스 머신', 'Power Leg Press Machine', '하체', 1, NULL, '허벅지, 둔근', 'quads, glutes', '', '2022-07-27 23:14:36', '2022-07-27 23:14:36', 0),
	(22, '이너사이 머신', 'Inner Thigh Machine', '하체', 1, NULL, '허벅지', 'quads', '', '2022-07-27 23:15:02', '2022-07-27 23:15:02', 0),
	(23, '라잉 레그 컬', 'Lying Leg Curl', '하체', 1, NULL, '허벅지', 'quads', '', '2022-07-27 23:15:26', '2022-07-27 23:15:26', 0),
	(24, '시티드 레그 프레스 머신', 'Seated Leg Press Machine', '하체', 1, NULL, '허벅지, 엉덩이', 'quads, glutes', '', '2022-07-27 23:15:52', '2022-07-27 23:15:52', 0),
	(25, '토탈 힙', 'Total Hip machine', '하체', 1, NULL, '허벅지, 엉덩이', 'quads, glutes', '', '2022-07-27 23:16:11', '2022-07-27 23:16:11', 0),
	(26, '크런치 머신', 'Crunch machine', '상체', 1, NULL, '복근', 'obliques', '', '2022-07-27 23:17:36', '2022-07-27 23:17:36', 0);
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
  UNIQUE KEY `rfidKey` (`rfidKey`),
  CONSTRAINT `FK_inbody_profile_user` FOREIGN KEY (`rfidKey`) REFERENCES `user` (`rfidKey`) ON DELETE CASCADE ON UPDATE CASCADE
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

-- 테이블 salus.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `rfidKey` bigint(20) NOT NULL,
  `email` varchar(40) NOT NULL DEFAULT '',
  `name` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(30) DEFAULT '',
  `phone` varchar(20) DEFAULT '',
  `birthDay` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT '',
  `gymPassStart` date DEFAULT NULL,
  `gymPassEnd` date DEFAULT NULL,
  `gymId` int(11) DEFAULT NULL,
  `firstRegist` datetime NOT NULL DEFAULT current_timestamp(),
  `updateRegist` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`rfidKey`),
  KEY `gymId` (`gymId`),
  CONSTRAINT `gymId` FOREIGN KEY (`gymId`) REFERENCES `gym` (`gymId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 salus.user:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`rfidKey`, `email`, `name`, `password`, `phone`, `birthDay`, `gender`, `gymPassStart`, `gymPassEnd`, `gymId`, `firstRegist`, `updateRegist`) VALUES
	(11111111, 'tset@gmail.com', '테스트', '1234', '', NULL, '', NULL, NULL, NULL, '2022-08-05 14:08:46', '2022-08-05 14:08:48'),
	(12341234, 'sbpark0402@gmail.com', '박성배', '1234', '01020649961', '1995-11-05', '1', '2022-08-04', '2022-08-04', NULL, '2022-08-04 14:21:10', '2022-08-04 14:21:52');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

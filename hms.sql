-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2020 at 01:21 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hms`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(11) NOT NULL,
  `appointment_date` date NOT NULL,
  `appointment_time` time NOT NULL,
  `contact_number` bigint(20) NOT NULL,
  `department_name` varchar(255) DEFAULT NULL,
  `disease` varchar(255) DEFAULT NULL,
  `doctor_name` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `appointment_date`, `appointment_time`, `contact_number`, `department_name`, `disease`, `doctor_name`, `email_id`, `name`) VALUES
(46, '2020-05-26', '05:31:00', 151511, ' yash', 'asddsadsadsaasd', NULL, 'asdads@1213', 'asdads');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `department_name` varchar(255) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `department_name`, `image_id`) VALUES
(31, ' yash', 32),
(44, ' yash', 45),
(49, 'assdda', 50),
(75, 'asadas', 76),
(53, 'asasa', 54),
(55, 'saiyam', 56),
(63, 'yash', 64);

-- --------------------------------------------------------

--
-- Table structure for table `department_doctor`
--

CREATE TABLE `department_doctor` (
  `department_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department_doctor`
--

INSERT INTO `department_doctor` (`department_id`, `doctor_id`) VALUES
(55, 83),
(75, 82),
(55, 81),
(55, 85);

-- --------------------------------------------------------

--
-- Table structure for table `department_patient`
--

CREATE TABLE `department_patient` (
  `department_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department_patient`
--

INSERT INTO `department_patient` (`department_id`, `patient_id`) VALUES
(55, 77),
(49, 73),
(55, 87),
(55, 79),
(55, 71),
(49, 69),
(75, 89);

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `contact_number` bigint(20) NOT NULL,
  `desig` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(91),
(91),
(91),
(91),
(91),
(91),
(91);

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `id` int(11) NOT NULL,
  `contact_no` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`id`, `contact_no`, `email`, `name`, `image_id`) VALUES
(1, 123, 'max@gmail.com', 'max hospital', 2),
(25, 5814693, NULL, 'yash', 26),
(27, 5418726, NULL, 'asthamedicos', 28),
(38, 56465, NULL, 'yash', 39),
(42, 8476015, NULL, 'apollosss', 43);

-- --------------------------------------------------------

--
-- Table structure for table `hospital_appointments`
--

CREATE TABLE `hospital_appointments` (
  `hospital_id` int(11) NOT NULL,
  `appointments_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hospital_appointments`
--

INSERT INTO `hospital_appointments` (`hospital_id`, `appointments_id`) VALUES
(1, 29),
(42, 46);

-- --------------------------------------------------------

--
-- Table structure for table `hospital_department`
--

CREATE TABLE `hospital_department` (
  `hospital_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hospital_department`
--

INSERT INTO `hospital_department` (`hospital_id`, `department_id`) VALUES
(25, 31),
(42, 44),
(1, 75),
(1, 55),
(1, 53),
(1, 49),
(27, 67),
(27, 63);

-- --------------------------------------------------------

--
-- Table structure for table `image_model`
--

CREATE TABLE `image_model` (
  `id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image_model`
--

INSERT INTO `image_model` (`id`, `url`) VALUES
(2, NULL),
(76, 'https://firebasestorage.googleapis.com/v0/b/hms7-78b7d.appspot.com/o/uploads%2Fdc6b2de9e42316f948acad3fb28e329d-ak-47-assault-rifle-flat-icon-by-vexels.png?alt=media&token=83fa720e-b5ad-4214-aed5-66a191099637'),
(26, 'https://firebasestorage.googleapis.com/v0/b/hms7-78b7d.appspot.com/o/uploads%2F20year-raw-fffffffffffffffff.png?alt=media&token=afa49c90-f3d0-40ad-87f9-b32e195338ce'),
(28, 'https://firebasestorage.googleapis.com/v0/b/hms7-78b7d.appspot.com/o/uploads%2F1_Jj-Xzp0sIkUg23HOqzZF4w.png?alt=media&token=5865f453-9bda-4523-95ed-2464c282e1a4'),
(32, NULL),
(90, 'https://firebasestorage.googleapis.com/v0/b/hms7-78b7d.appspot.com/o/uploads%2F1200px-Fortis_Healthcare_logo.svg.png?alt=media&token=dfd48477-bff5-49d6-b949-1e36798c9a04'),
(39, 'https://firebasestorage.googleapis.com/v0/b/hms7-78b7d.appspot.com/o/uploads%2Fnvm%404x.png?alt=media&token=61d9662d-1290-466e-bfca-61c243e5ae12'),
(43, 'https://firebasestorage.googleapis.com/v0/b/hms7-78b7d.appspot.com/o/uploads%2Fnvm%404x.png?alt=media&token=4dccbb47-2d72-4fcb-b249-ac210081c7ca'),
(45, NULL),
(50, 'https://firebasestorage.googleapis.com/v0/b/hms7-78b7d.appspot.com/o/uploads%2F48-484916_bullet-vector-bullet-gun-png-vector-transparent-png.png?alt=media&token=05adca31-7bac-4fc5-ae85-6740b96f0d18'),
(54, 'https://firebasestorage.googleapis.com/v0/b/hms7-78b7d.appspot.com/o/uploads%2F580b57fcd9996e24bc43c545.png?alt=media&token=be4d8f6e-e385-44e5-8caa-ffb9c3cc0fbb'),
(56, 'https://firebasestorage.googleapis.com/v0/b/hms7-78b7d.appspot.com/o/uploads%2F300x0w.jpg?alt=media&token=4f8bdb12-24f4-4c39-91e8-4b24c0cf1151'),
(64, 'https://firebasestorage.googleapis.com/v0/b/hms7-78b7d.appspot.com/o/uploads%2FCapture.PNG?alt=media&token=b87f75cb-fa7c-486a-b268-3d29221174ea');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(11) NOT NULL,
  `contact_number` bigint(20) NOT NULL,
  `disease` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `contact_number`, `disease`, `email_id`, `gender`, `name`, `image_id`) VALUES
(89, 12321, 'asdsaad', 'asfjdsga', 'Male', 'yash', 90);

-- --------------------------------------------------------

--
-- Table structure for table `relation_between_doctor_and_patient`
--

CREATE TABLE `relation_between_doctor_and_patient` (
  `id` int(11) NOT NULL,
  `appointment_date` date NOT NULL,
  `appointment_time` time NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKsblka1jtdaelm5kbl6yg597fu` (`image_id`);

--
-- Indexes for table `department_doctor`
--
ALTER TABLE `department_doctor`
  ADD UNIQUE KEY `UK_k6gwwb9gfqbw7ueq4vqy9ar07` (`doctor_id`),
  ADD KEY `FKcqytwpy80ylr3l3nd08s5i952` (`department_id`);

--
-- Indexes for table `department_patient`
--
ALTER TABLE `department_patient`
  ADD UNIQUE KEY `UK_ll079keoruovbf12orgofvbq8` (`patient_id`),
  ADD KEY `FKmaklch3umxt6dan1vpy1i3eg3` (`department_id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9kq56akhtvsbf2htjoccl8ije` (`image_id`);

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKqcycr7xylmascxdy0ioqty3um` (`image_id`);

--
-- Indexes for table `hospital_appointments`
--
ALTER TABLE `hospital_appointments`
  ADD UNIQUE KEY `UK_bkwvexee9vrmp70pe4vuc3dsx` (`appointments_id`),
  ADD KEY `FKf36vlkaoh9lsdrfdpa34ohpjv` (`hospital_id`);

--
-- Indexes for table `hospital_department`
--
ALTER TABLE `hospital_department`
  ADD UNIQUE KEY `UK_adnas68aw3wkl62tdyjg6kn0w` (`department_id`),
  ADD KEY `FKby220gfjcilkxp89c2evwwfke` (`hospital_id`);

--
-- Indexes for table `image_model`
--
ALTER TABLE `image_model`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5wu8mps8q98f3klc72i2gulrn` (`image_id`);

--
-- Indexes for table `relation_between_doctor_and_patient`
--
ALTER TABLE `relation_between_doctor_and_patient`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

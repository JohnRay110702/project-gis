-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2025 at 07:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pagdaloy`
--

-- --------------------------------------------------------

--
-- Table structure for table `coordinates_barangay_halls`
--

CREATE TABLE `coordinates_barangay_halls` (
  `municipality` varchar(15) DEFAULT NULL,
  `barangay` varchar(20) DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(10,7) DEFAULT NULL,
  `municipality_code` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `coordinates_barangay_halls`
--

INSERT INTO `coordinates_barangay_halls` (`municipality`, `barangay`, `latitude`, `longitude`, `municipality_code`) VALUES
('Agoncillo', 'Adia', 13.94269984, 120.9283654, 'AGON'),
('Agoncillo', 'Balangon', 13.91817361, 120.9132729, 'AGON'),
('Agoncillo', 'Bangin', 13.92773904, 120.9250965, 'AGON'),
('Agoncillo', 'Banyaga', 14.00973731, 120.9504216, 'AGON'),
('Agoncillo', 'Barigon', 13.98388567, 120.9245786, 'AGON'),
('Agoncillo', 'Bilibinwang', 13.99143961, 120.9500803, 'AGON'),
('Agoncillo', 'Coral na Munti', 13.93689703, 120.9160282, 'AGON'),
('Agoncillo', 'Guitna', 13.93477283, 120.9360715, 'AGON'),
('Agoncillo', 'Mabini', 13.93173650, 120.9150801, 'AGON'),
('Agoncillo', 'Pamiga', 13.93590902, 120.9262246, 'AGON'),
('Agoncillo', 'Panhulan', 13.94148700, 120.9417549, 'AGON'),
('Agoncillo', 'Pansipit', 13.92813615, 120.9417151, 'AGON'),
('Agoncillo', 'Poblacion', 13.93593445, 120.9318606, 'AGON'),
('Agoncillo', 'Pook', 13.93121459, 120.9302508, 'AGON'),
('Agoncillo', 'San Jacinto', 13.94542761, 120.9164240, 'AGON'),
('Agoncillo', 'San Teodoro', 13.93507325, 120.9448768, 'AGON'),
('Agoncillo', 'Santa Cruz', 13.91450000, 120.9179000, 'AGON'),
('Agoncillo', 'Santo Tomas', 13.93887811, 120.9401269, 'AGON'),
('Agoncillo', 'Subic Ibaba', 13.94936920, 120.9440365, 'AGON'),
('Agoncillo', 'Subic Ilaya', 13.95739346, 120.9410233, 'AGON'),
('Alitagtag', 'Balagbag', 13.87043136, 121.0236878, 'ALI'),
('Alitagtag', 'Concepcion', 13.86760718, 121.0170822, 'ALI'),
('Alitagtag', 'Concordia', 13.84970856, 121.0213808, 'ALI'),
('Alitagtag', 'Dalipit East', 13.86861404, 121.0320188, 'ALI'),
('Alitagtag', 'Dalipit West', 13.86812921, 121.0273739, 'ALI'),
('Alitagtag', 'Dominador East', 13.87663486, 121.0305416, 'ALI'),
('Alitagtag', 'Dominador West', 13.87087579, 121.0238916, 'ALI'),
('Alitagtag', 'Munlawin Norte', 13.86225638, 121.0291943, 'ALI'),
('Alitagtag', 'Munlawin Sur', 13.85698784, 121.0388014, 'ALI'),
('Alitagtag', 'Muzon Primero', 13.85296843, 120.9891851, 'ALI'),
('Alitagtag', 'Muzon Segundo', 13.84198396, 120.9921657, 'ALI'),
('Alitagtag', 'Pinagkurusan', 13.86530278, 121.0217873, 'ALI'),
('Alitagtag', 'Ping-as', 13.88470305, 121.0256371, 'ALI'),
('Alitagtag', 'Poblacion East', 13.86716249, 121.0145424, 'ALI'),
('Alitagtag', 'Poblacion West', 13.86370424, 121.0002996, 'ALI'),
('Alitagtag', 'San Jose', 13.86518515, 120.9971854, 'ALI'),
('Alitagtag', 'San Juan', 13.86359078, 120.9998391, 'ALI'),
('Alitagtag', 'Sta Cruz', 13.86477157, 120.9945048, 'ALI'),
('Alitagtag', 'Tadlac', 13.87737142, 121.0103404, 'ALI'),
('Balete', 'Alangilan', 14.00096700, 121.1175918, 'BAL'),
('Balete', 'Looc', 14.02811543, 121.0851003, 'BAL'),
('Balete', 'Magapi', 14.02891397, 121.0970818, 'BAL'),
('Balete', 'Makina', 14.02026130, 121.1024396, 'BAL'),
('Balete', 'Malabanan', 14.01147610, 121.1243259, 'BAL'),
('Balete', 'Paligawan', 14.00269809, 121.1394507, 'BAL'),
('Balete', 'Palsara', 14.00796597, 121.1106702, 'BAL'),
('Balete', 'Poblacion', 14.01827692, 121.0950096, 'BAL'),
('Balete', 'Sala', 14.02088202, 121.0925010, 'BAL'),
('Balete', 'Sampalocan', 14.03256956, 121.0893638, 'BAL'),
('Balete', 'San Sebastian', 14.02738087, 121.0687135, 'BAL'),
('Balete', 'Solis', 14.03610615, 121.0996533, 'BAL'),
('Cuenca', 'Balagbag', 13.93072342, 121.0650991, 'CUE'),
('Cuenca', 'Barangay 1', 13.89382637, 121.0508392, 'CUE'),
('Cuenca', 'Barangay 2', 13.89946961, 121.0499684, 'CUE'),
('Cuenca', 'Barangay 3', 13.89968565, 121.0528725, 'CUE'),
('Cuenca', 'Barangay 4', 13.90174348, 121.0516662, 'CUE'),
('Cuenca', 'Barangay 5', 13.90180000, 121.0504000, 'CUE'),
('Cuenca', 'Barangay 6', 13.90368483, 121.0489117, 'CUE'),
('Cuenca', 'Barangay 7', 13.90668149, 121.0495623, 'CUE'),
('Cuenca', 'Barangay 8', 13.90102448, 121.0459884, 'CUE'),
('Cuenca', 'Bungahan', 13.87054379, 121.0544711, 'CUE'),
('Cuenca', 'Calumayin', 13.94208114, 121.0594034, 'CUE'),
('Cuenca', 'Dalipit East', 13.86850000, 121.0325000, 'CUE'),
('Cuenca', 'Dalipit West', 13.86800000, 121.0280000, 'CUE'),
('Cuenca', 'Dita', 13.92048357, 121.0726851, 'CUE'),
('Cuenca', 'Don Juan', 13.90966822, 121.0332211, 'CUE'),
('Cuenca', 'Emmanuel', 13.88377800, 121.0517301, 'CUE'),
('Cuenca', 'Ibabao', 13.90858683, 121.0707289, 'CUE'),
('Cuenca', 'Labac', 13.89661238, 121.0596351, 'CUE'),
('Cuenca', 'Pinagkaisahan', 13.90804359, 121.0527905, 'CUE'),
('Cuenca', 'San Felipe', 13.89083916, 121.0421637, 'CUE'),
('Cuenca', 'San Isidro', 13.90870000, 121.0611000, 'CUE'),
('Laurel', 'As-Is', 14.05624297, 120.9199832, 'LAU'),
('Laurel', 'Balakilong', 14.06734625, 120.9340044, 'LAU'),
('Laurel', 'Barangay 1', 14.05397805, 120.9318861, 'LAU'),
('Laurel', 'Barangay 2', 14.05198293, 120.9314492, 'LAU'),
('Laurel', 'Barangay 3', 14.04983286, 120.9337907, 'LAU'),
('Laurel', 'Barangay 4', 14.05380473, 120.9337480, 'LAU'),
('Laurel', 'Barangay 5', 14.04587313, 120.9283396, 'LAU'),
('Laurel', 'Berinayan', 14.07148103, 120.9526091, 'LAU'),
('Laurel', 'Bugaan East', 14.04355003, 120.9400055, 'LAU'),
('Laurel', 'Bugaan West', 14.04120947, 120.9359924, 'LAU'),
('Laurel', 'Buso-buso', 14.02431290, 120.9479520, 'LAU'),
('Laurel', 'Dayap Itaas', 14.05605809, 120.8516833, 'LAU'),
('Laurel', 'Gulod', 14.03425536, 120.9408824, 'LAU'),
('Laurel', 'J. Leviste', 14.07095901, 120.9416547, 'LAU'),
('Laurel', 'Molinete', 14.06346164, 120.9239112, 'LAU'),
('Laurel', 'Niyugan', 14.07011434, 120.8895383, 'LAU'),
('Laurel', 'Paliparan', 14.05562585, 120.8986849, 'LAU'),
('Laurel', 'San Gabriel', 14.04082539, 120.9044118, 'LAU'),
('Laurel', 'San Gregorio', 14.02937278, 120.8728085, 'LAU'),
('Laurel', 'Santa Maria', 14.04564876, 120.8930267, 'LAU'),
('Laurel', 'Ticub', 14.03093414, 120.9099150, 'LAU'),
('Mataas Na Kahoy', 'Bayorbor', 13.98011992, 121.0956074, 'MNK'),
('Mataas Na Kahoy', 'Bubuyan', 13.98424169, 121.1083841, 'MNK'),
('Mataas Na Kahoy', 'Calingatan', 13.96172040, 121.1207993, 'MNK'),
('Mataas Na Kahoy', 'District I', 13.95533074, 121.1101794, 'MNK'),
('Mataas Na Kahoy', 'District II', 13.95596319, 121.1150109, 'MNK'),
('Mataas Na Kahoy', 'District III', 13.96150000, 121.1093000, 'MNK'),
('Mataas Na Kahoy', 'District IV', 13.95490000, 121.1193000, 'MNK'),
('Mataas Na Kahoy', 'Kinalaglagan', 14.00220000, 121.0954000, 'MNK'),
('Mataas Na Kahoy', 'Loob', 13.98132383, 121.1140546, 'MNK'),
('Mataas Na Kahoy', 'Lumang Lipa', 13.97002670, 121.0834664, 'MNK'),
('Mataas Na Kahoy', 'Manggahan', 13.96570650, 121.0902850, 'MNK'),
('Mataas Na Kahoy', 'Nangkaan', 13.98780000, 121.0894000, 'MNK'),
('Mataas Na Kahoy', 'San Sebastian', 13.98370000, 121.1021000, 'MNK'),
('Mataas Na Kahoy', 'Santol', 13.96840000, 121.1045000, 'MNK'),
('Mataas Na Kahoy', 'Upa', 13.96204443, 121.1131318, 'MNK'),
('San Nicolas', 'Abelo', 13.92463402, 120.9568911, 'SAN'),
('San Nicolas', 'Balete', 13.91651076, 120.9681848, 'SAN'),
('San Nicolas', 'Baluk-baluk', 13.92189476, 120.9583348, 'SAN'),
('San Nicolas', 'Bancoro', 13.91129627, 120.9718361, 'SAN'),
('San Nicolas', 'Bangin', 13.91819422, 120.9367142, 'SAN'),
('San Nicolas', 'Calangay', 13.91589376, 120.9397257, 'SAN'),
('San Nicolas', 'Hipit ', 13.91791688, 120.9552693, 'SAN'),
('San Nicolas', 'Maabud North', 13.91064788, 120.9625033, 'SAN'),
('San Nicolas', 'Maabud South', 13.91066668, 120.9625107, 'SAN'),
('San Nicolas', 'Munlawin', 13.91111094, 120.9545578, 'SAN'),
('San Nicolas', 'Pansipit ', 13.92313715, 120.9463857, 'SAN'),
('San Nicolas', 'Poblacion', 13.92957235, 120.9510797, 'SAN'),
('San Nicolas', 'Pulang-Bato', 13.92957994, 120.9510894, 'SAN'),
('San Nicolas', 'Sto. Nino', 13.91261841, 120.9462219, 'SAN'),
('San Nicolas', 'Sinturisan', 13.91050553, 120.9402419, 'SAN'),
('San Nicolas', 'Tagudtod', 13.91933439, 120.9594837, 'SAN'),
('San Nicolas', 'Talang', 13.92038073, 120.9481634, 'SAN'),
('Sta. Teresita', 'Antipolo', 13.88050000, 120.9757000, 'STA'),
('Sta. Teresita', 'Bihis', 13.87871311, 120.9658741, 'STA'),
('Sta. Teresita', 'Burol', 13.89574829, 120.9675106, 'STA'),
('Sta. Teresita', 'Calayaan', 13.86574587, 120.9559688, 'STA'),
('Sta. Teresita', 'Calumala', 13.88915009, 120.9791056, 'STA'),
('Sta. Teresita', 'Cuta East', 13.86628929, 120.9896024, 'STA'),
('Sta. Teresita', 'Cutang Cawayan', 13.87330000, 120.9854000, 'STA'),
('Sta. Teresita', 'Irukan', 13.86582771, 120.9482700, 'STA'),
('Sta. Teresita', 'Pacifico', 13.86255968, 120.9618685, 'STA'),
('Sta. Teresita', 'Poblacion I', 13.86107501, 120.9619046, 'STA'),
('Sta. Teresita', 'Poblacion II', 13.86785978, 120.9794997, 'STA'),
('Sta. Teresita', 'Poblacion III', 13.86869307, 120.9698009, 'STA'),
('Sta. Teresita', 'Saimsim', 13.90531460, 120.9781542, 'STA'),
('Sta. Teresita', 'Sampa', 13.86102119, 120.9619225, 'STA'),
('Sta. Teresita', 'Sinipian', 13.87706837, 120.9694727, 'STA'),
('Sta. Teresita', 'Tambo Ibaba', 13.89704483, 120.9762531, 'STA'),
('Sta. Teresita', 'Tambo Ilaya', 13.89975490, 120.9726723, 'STA'),
('Talisay', 'Aya', 14.09964042, 121.0403622, 'TAL'),
('Talisay', 'Balas', 14.09005193, 120.9963234, 'TAL'),
('Talisay', 'Banga', 14.09404042, 121.0122614, 'TAL'),
('Talisay', 'Buco', 14.08467618, 120.9864893, 'TAL'),
('Talisay', 'Caloocan', 14.09482131, 120.9768261, 'TAL'),
('Talisay', 'Leynes', 14.09441893, 120.9717825, 'TAL'),
('Talisay', 'Miranda', 14.10973745, 121.0145170, 'TAL'),
('Talisay', 'Poblacion 1', 14.09797895, 121.0227396, 'TAL'),
('Talisay', 'Poblacion 2', 14.09139784, 121.0236796, 'TAL'),
('Talisay', 'Poblacion 3', 14.09464884, 121.0216639, 'TAL'),
('Talisay', 'Poblacion 4', 14.09251900, 121.0218310, 'TAL'),
('Talisay', 'Poblacion 5', 14.09350000, 121.0209000, 'TAL'),
('Talisay', 'Poblacion 7', 14.09180000, 121.0206000, 'TAL'),
('Talisay', 'Poblacion 8', 14.08990000, 121.0200000, 'TAL'),
('Talisay', 'Quiling', 14.09484240, 121.0381213, 'TAL'),
('Talisay', 'Sampaloc', 14.08670870, 120.9717709, 'TAL'),
('Talisay', 'San Guillermo', 14.10517873, 120.9961785, 'TAL'),
('Talisay', 'Santa Maria', 14.08633262, 121.0036380, 'TAL'),
('Talisay', 'Tranca', 14.12068128, 121.0572919, 'TAL'),
('Talisay', 'Tumaway', 14.09385323, 121.0289233, 'TAL'),
('Tanauan', 'Altura Bata', 14.12692606, 121.0771054, 'TAN'),
('Tanauan', 'Altura Matanda', 14.13345275, 121.0856259, 'TAN'),
('Tanauan', 'Altura-South', 14.12891421, 121.0863958, 'TAN'),
('Tanauan', 'Ambulong', 14.08736447, 121.0600464, 'TAN'),
('Tanauan', 'Bagbag', 14.03476758, 121.0916138, 'TAN'),
('Tanauan', 'Bagumbayan', 14.07861824, 121.1380755, 'TAN'),
('Tanauan', 'Balele', 14.06268144, 121.0916285, 'TAN'),
('Tanauan', 'Banadero', 14.08361107, 121.0710751, 'TAN'),
('Tanauan', 'Banjo East', 14.05666378, 121.1429960, 'TAN'),
('Tanauan', 'Banjo Laurel', 14.05320384, 121.1318421, 'TAN'),
('Tanauan', 'Bilog-bilog', 14.11416700, 121.0875000, 'TAN'),
('Tanauan', 'Boot', 14.05605862, 121.0860595, 'TAN'),
('Tanauan', 'Cale', 14.11647226, 121.0986209, 'TAN'),
('Tanauan', 'Darasa', 14.06755906, 121.1531345, 'TAN'),
('Tanauan', 'Gonzales', 14.07111100, 121.0772220, 'TAN'),
('Tanauan', 'Hidalgo', 14.07113513, 121.1407635, 'TAN'),
('Tanauan', 'Janopol', 14.08170523, 121.0866615, 'TAN'),
('Tanauan', 'Janopol Oriental', 14.08844562, 121.0992933, 'TAN'),
('Tanauan', 'Laurel', 14.14921588, 121.1095569, 'TAN'),
('Tanauan', 'Luyos', 14.12379187, 121.0715567, 'TAN'),
('Tanauan', 'Mabini', 14.05997028, 121.1142527, 'TAN'),
('Tanauan', 'Malaking Pulo', 14.13868810, 121.0916977, 'TAN'),
('Tanauan', 'Maria Paz', 14.04883840, 121.0730001, 'TAN'),
('Tanauan', 'Maugat', 14.10176102, 121.0676086, 'TAN'),
('Tanauan', 'Montaña', 14.12792176, 121.0626369, 'TAN'),
('Tanauan', 'Natatas', 14.08306730, 121.1247076, 'TAN'),
('Tanauan', 'Pagaspas', 14.10422230, 121.1343663, 'TAN'),
('Tanauan', 'Pantay Bata', 14.12519127, 121.1145519, 'TAN'),
('Tanauan', 'Pantay Matanda', 14.11897279, 121.1200102, 'TAN'),
('Tanauan', 'Poblacion Barangay 1', 14.08628265, 121.1524664, 'TAN'),
('Tanauan', 'Poblacion Barangay 2', 14.08485400, 121.1530560, 'TAN'),
('Tanauan', 'Poblacion Barangay 3', 14.07888900, 121.1538890, 'TAN'),
('Tanauan', 'Poblacion Barangay 4', 14.08980094, 121.1479010, 'TAN'),
('Tanauan', 'Poblacion Barangay 5', 14.08185994, 121.1482358, 'TAN'),
('Tanauan', 'Poblacion Barangay 6', 14.08730252, 121.1457681, 'TAN'),
('Tanauan', 'Poblacion Barangay 7', 14.08000000, 121.1450000, 'TAN'),
('Tanauan', 'Sala', 14.10571378, 121.1153316, 'TAN'),
('Tanauan', 'Sambat', 14.08570451, 121.1368280, 'TAN'),
('Tanauan', 'San Jose', 14.11170188, 121.0651690, 'TAN'),
('Tanauan', 'Santol', 14.15254428, 121.0827144, 'TAN'),
('Tanauan', 'Santor', 14.09252133, 121.1156732, 'TAN'),
('Tanauan', 'Sulpoc', 14.13815180, 121.0678276, 'TAN'),
('Tanauan', 'Suplang', 14.15166700, 121.0608330, 'TAN'),
('Tanauan', 'Talaga', 14.09925989, 121.0917915, 'TAN'),
('Tanauan', 'Tinurik', 14.06563679, 121.1252566, 'TAN'),
('Tanauan', 'Trapiche', 14.09835292, 121.1240131, 'TAN'),
('Tanauan', 'Ulango', 14.13458079, 121.1089530, 'TAN'),
('Tanauan', 'Wawa', 14.06431250, 121.0762799, 'TAN');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `municipality_code` text NOT NULL,
  `user_type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ucs2 COLLATE=ucs2_bin;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `municipality_code`, `user_type`) VALUES
(1, 'ADMIN', 'ADMIN', 'ADMIN', 'ADMIN'),
(2, 'AGONCILLO', 'AGONCILLO', 'AGON', 'USER'),
(3, 'ALITAGTAG', 'ALITAGTAG', 'ALI', 'USER'),
(4, 'BALETE', 'BALETE', 'BAL', 'USER'),
(5, 'CUENCA', 'CUENCA', 'CUE', 'USER'),
(6, 'LAUREL', 'LAUREL', 'LAU', 'USER'),
(7, 'MATAASNAKAHOY', 'MATAASNAKAHOY', 'MNK', 'USER'),
(8, 'SANNICOLAS', 'SANNICOLAS', 'SAN', 'USER'),
(9, 'STATERESITA', 'SANTATERESITA', 'STA', 'USER'),
(10, 'TALISAY', 'TALISAY', 'TAL', 'USER'),
(11, 'TANAUAN', 'TANAUAN', 'TAN', 'USER');

-- --------------------------------------------------------

--
-- Table structure for table `piggeries`
--

CREATE TABLE `piggeries` (
  `id` int(11) NOT NULL,
  `municipality` varchar(15) DEFAULT NULL,
  `barangay` varchar(18) DEFAULT NULL,
  `municipality_code` varchar(4) DEFAULT NULL,
  `farm_name` varchar(24) DEFAULT NULL,
  `sow_count` int(2) DEFAULT NULL,
  `boar_count` int(2) DEFAULT NULL,
  `fattener_count` int(3) DEFAULT NULL,
  `piglet_count` int(3) DEFAULT NULL,
  `native_count` int(1) DEFAULT NULL,
  `latitude` varchar(18) DEFAULT NULL,
  `longitude` varchar(18) DEFAULT NULL,
  `sanitation` varchar(13) DEFAULT NULL,
  `discharge` decimal(5,3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `piggeries`
--

INSERT INTO `piggeries` (`id`, `municipality`, `barangay`, `municipality_code`, `farm_name`, `sow_count`, `boar_count`, `fattener_count`, `piglet_count`, `native_count`, `latitude`, `longitude`, `sanitation`, `discharge`) VALUES
(1, 'Agoncillo', 'Bilibinwang', 'AGON', 'Josephine M. Sarmiento', 0, 0, 12, 29, 0, '13.999579', '120.947213', 'Septic Tank', 0.000),
(2, 'Agoncillo', 'Bilibinwang', 'AGON', 'Bryant M. Mendoza', 1, 0, 5, 0, 0, '13.999653', '120.947627', 'Septic Tank', 0.000),
(3, 'Agoncillo', 'Bilibinwang', 'AGON', 'Norberto L. Reyes Jr.', 0, 0, 10, 0, 0, '13.994903', '120.943553', 'Septic Tank', 0.000),
(4, 'Agoncillo', 'Bilibinwang', 'AGON', 'Cristino A. Mendoza', 0, 0, 31, 0, 0, '13.990527', '120.944295', 'Septic Tank', 0.000),
(5, 'Agoncillo', 'Bilibinwang', 'AGON', 'Charles M. Mendoza', 0, 0, 72, 0, 0, '13.990692', '120.944875', 'Septic Tank', 0.000),
(6, 'Agoncillo', 'Bilibinwang', 'AGON', 'Agosto M. Harina', 3, 0, 13, 0, 0, '13.991098', '120.942428', 'Septic Tank', 0.000),
(7, 'Agoncillo', 'Bilibinwang', 'AGON', 'Venancio D. del Mundo', 2, 0, 3, 12, 0, '13.983373', '120.946965', 'Septic Tank', 0.000),
(8, 'Agoncillo', 'Barigon', 'AGON', 'John Aries Enriquez', 10, 2, 16, 6, 0, '13.984871', '120.909111', 'Composting', 0.000),
(9, 'Agoncillo', 'Barigon', 'AGON', 'Gregorio Enriquez', 1, 0, 8, 2, 0, '13.984236', '120.91012', 'Septic Tank', 0.000),
(10, 'Agoncillo', 'Santo Tomas', 'AGON', 'Erick De Castro', 3, 0, 33, 0, 0, '13.937032', '120.941878', 'Septic Tank', 0.000),
(11, 'Agoncillo', 'Santo Tomas', 'AGON', 'Manuel Encarnacion', 1, 0, 0, 0, 0, '13.935645', '120.942663', 'Septic Tank', 0.000),
(12, 'Agoncillo', 'Santo Tomas', 'AGON', 'Marisa Solis', 0, 0, 7, 0, 0, '13.93546', '120.942578', 'Septic Tank', 0.000),
(13, 'Agoncillo', 'Santo Tomas', 'AGON', 'Jayson Solis', 1, 0, 0, 0, 0, '13.939065', '120.943472', 'Septic Tank', 0.000),
(14, 'Agoncillo', 'Santo Tomas', 'AGON', 'Ruth Solis', 4, 0, 9, 17, 0, '13.93909', '120.94039', 'Septic Tank', 0.000),
(15, 'Agoncillo', 'Santo Tomas', 'AGON', 'Jonas Solis', 0, 0, 25, 0, 0, '13.939088', '120.941821', 'Septic Tank', 0.000),
(16, 'Agoncillo', 'Bagong Sikat', 'AGON', 'Godelia E. Reyes', 0, 0, 0, 0, 0, '13.94168', '120.937717', 'Free-flow', 0.000),
(17, 'Agoncillo', 'Bagong Sikat', 'AGON', 'Sean Brotonel', 7, 0, 9, 15, 0, '13.939568', '120.933362', 'Septic Tank', 0.000),
(18, 'Agoncillo', 'Bagong Sikat', 'AGON', 'Juan A. Andal', 0, 0, 0, 0, 0, '13.941865', '120.938234', 'Septic Tank', 0.000),
(19, 'Agoncillo', 'Bagong Sikat', 'AGON', 'Nolasco C. Brotonel', 10, 0, 2, 22, 0, '13.939406', '120.933467', 'Septic Tank', 0.000),
(20, 'Agoncillo', 'Bagong Sikat', 'AGON', 'Nick Alvarez Andal', 6, 0, 2, 3, 0, '13.940565', '120.937628', 'Free-flow', 14.700),
(21, 'Agoncillo', 'Bagong Sikat', 'AGON', 'Rea Malabanan', 0, 0, 4, 2, 0, '13.938122', '120.935305', 'Free-flow', 4.900),
(22, 'Agoncillo', 'Bagong Sikat', 'AGON', 'Simplicio A. Danio', 2, 0, 15, 0, 0, '13.938251', '120.932554', 'Free-flow', 25.200),
(23, 'Agoncillo', 'Bagong Sikat', 'AGON', 'Leandra Rogacio', 0, 0, 3, 0, 0, '13.938194', '120.932127', 'N/A', 0.000),
(24, 'Agoncillo', 'Bagong Sikat', 'AGON', 'Gudelia B. Reyes', 3, 0, 7, 7, 0, '13.941795', '120.937741', 'Free-flow', 18.900),
(25, 'Agoncillo', 'San Jacinto', 'AGON', 'Felagia De Leus', 10, 50, 20, 12, 0, '13.942078', '120.914403', 'Septic Tank', 0.000),
(26, 'Agoncillo', 'Panhulan', 'AGON', 'Eliseo Del Mundo Jr.', 1, 0, 1, 0, 0, '13.940922', '120.942608', 'Septic Tank', 0.000),
(27, 'Agoncillo', 'Panhulan', 'AGON', 'Nicko Capuno', 0, 0, 4, 0, 0, '13.942461', '120.943542', 'Septic Tank', 0.000),
(28, 'Agoncillo', 'Subic Ibaba', 'AGON', 'Romnick H. Malabanan', 10, 0, 29, 24, 0, '13.944858', '120.935303', 'Septic Tank', 0.000),
(29, 'Agoncillo', 'Subic Ibaba', 'AGON', 'Welfredo De Sagun', 24, 0, 100, 95, 0, '13.953484', '120.93713', 'Septic Tank', 0.000),
(30, 'Agoncillo', 'Subic Ilaya', 'AGON', 'Jaycel Mendoza', 4, 0, 10, 0, 0, '13.950463', '120.941087', 'Septic Tank', 0.000),
(31, 'Alitagtag', 'Munlawin Sur', 'ALI', 'Erlinda Castillo', 1, 0, 13, 0, 0, '13.86399935', '121.019813', 'Septic Tank', 0.000),
(32, 'Alitagtag', 'Munlawin Sur', 'ALI', 'Gloria Panlilio', 6, 0, 0, 20, 0, '13.87044824', '121.021653', 'Septic Tank', 0.000),
(33, 'Alitagtag', 'Ping-as ', 'ALI', 'Macario Lacqui', 1, 0, 0, 6, 0, '13.88820031', '121.0193171', 'Septic Tank', 0.000),
(34, 'Alitagtag', 'Ping-as ', 'ALI', 'Constancia Enriquez', 1, 0, 0, 0, 0, '13.87807978', '121.0257259', 'Septic Tank', 0.000),
(35, 'Alitagtag', 'Poblacion East', 'ALI', 'Ryan Atienza', 4, 0, 7, 28, 0, '13.87138438', '121.0105081', 'Septic Tank', 0.000),
(36, 'Alitagtag', 'San Jose ', 'ALI', 'Marivic Magnaye', 2, 0, 0, 0, 0, '13.86543224', '120.9953003', 'Septic Tank', 0.000),
(37, 'Alitagtag', 'San Jose ', 'ALI', 'Eugenia Patulot', 2, 0, 0, 6, 0, '13.86584563', '120.9983033', 'Septic Tank', 0.000),
(38, 'Alitagtag', 'San Juan', 'ALI', 'Janiza Angat', 3, 0, 5, 10, 0, '13.85155287', '121.0066839', 'Septic Tank', 0.000),
(39, 'Alitagtag', 'Tadlac', 'ALI', 'Lauro Cuya', 6, 0, 2, 18, 0, '13.87951062', '121.008549', 'Septic Tank', 0.000),
(40, 'Balete', 'Palsara', 'BAL', 'Victor Badillo', 5, 0, 24, 17, 0, '14.01062', '121.09603', 'Septic Tank', 0.000),
(41, 'Balete', 'Palsara', 'BAL', 'Rodolfo De Guzman', 2, 0, 0, 21, 0, '14.01023', '121.0963', 'Septic Tank', 0.000),
(42, 'Balete', 'Magapi', 'BAL', 'Rhiza Nitro', 2, 0, 0, 5, 0, '14.03036', '121.09637', 'Composting', 0.000),
(43, 'Balete', 'Magapi', 'BAL', 'Erwin Pilago', 0, 0, 0, 0, 0, '14.02996', '121.09651', 'Composting', 0.000),
(44, 'Balete', 'Magapi', 'BAL', 'Junjun', 0, 0, 0, 0, 0, '14.03069', '121.09611', 'Composting', 0.000),
(45, 'Balete', 'Magapi', 'BAL', 'Leoneda Mercado', 2, 0, 0, 6, 0, '14.03047', '121.09593', 'Septic Tank', 0.000),
(46, 'Balete', 'Magapi', 'BAL', 'Martin Apinuha', 1, 0, 0, 0, 0, '14.03111', '121.09588', 'Septic Tank', 0.000),
(47, 'Balete', 'Solis', 'BAL', 'Enrico Lucedo', 3, 0, 5, 7, 0, '14.03532', '121.09919', 'Septic Tank', 0.000),
(48, 'Balete', 'Solis', 'BAL', 'Danny Lipay', 0, 0, 3, 0, 0, '14.03496', '121.09992', 'Composting', 0.000),
(49, 'Balete', 'Solis', 'BAL', 'Samboy Roxas', 0, 0, 5, 0, 0, '14.03498', '121.10053', 'Septic Tank', 0.000),
(50, 'Balete', 'Solis', 'BAL', 'John Cedric', 1, 0, 0, 0, 0, '14.03487', '121.10045', 'Composting', 0.000),
(51, 'Balete', 'Solis', 'BAL', 'Edwin Kanila', 0, 0, 17, 0, 0, '14.03473', '121.1004', 'Septic Tank', 0.000),
(52, 'Balete', 'Looc', 'BAL', 'Leoni Maravilla', 3, 0, 3, 0, 0, '14.0271905', '121.0811172', 'Septic Tank', 0.000),
(53, 'Balete', 'Looc', 'BAL', 'Roel Ocampo', 0, 0, 3, 0, 0, '14.0272305', '121.0821388', 'Septic Tank', 0.000),
(54, 'Balete', 'Looc', 'BAL', 'Andres Aranes', 3, 0, 0, 6, 0, '14.027963', '121.08201', 'Septic Tank', 0.000),
(55, 'Balete', 'Looc', 'BAL', 'Rucita De Ocampo', 0, 0, 0, 0, 0, '14.0285733', '121.0804815', 'Septic Tank', 0.000),
(56, 'Balete', 'Looc', 'BAL', 'Renato Badillo', 4, 0, 0, 0, 0, '14.0281436', '121.0828197', 'Septic Tank', 0.000),
(57, 'Cuenca', 'Balagbag', 'CUE', 'Ismael Gutierrez', 1, 0, 0, 0, 0, '13.932001', '121.070528', 'Septic Tank', 0.000),
(58, 'Cuenca', 'Balagbag', 'CUE', 'Julie Ann Torres', 0, 0, 0, 0, 0, '13.92736', '121.06589', 'Septic Tank', 0.000),
(59, 'Cuenca', 'Balagbag', 'CUE', 'Jeriz Mayo', 1, 0, 0, 0, 0, '13.92865', '121.06658', 'Septic Tank', 0.000),
(60, 'Cuenca', 'Balagbag', 'CUE', 'Rizalisa Josue', 0, 0, 0, 0, 0, '13.92946', '121.06405', 'Septic Tank', 0.000),
(61, 'Cuenca', 'Balagbag', 'CUE', 'Geraldine Manalo', 1, 0, 5, 0, 0, '13.93216', '121.07028', 'Septic Tank', 0.000),
(62, 'Cuenca', 'Balagbag', 'CUE', 'Bertito Ona', 1, 0, 0, 0, 0, '13.9254', '121.0674', 'Septic Tank', 0.000),
(63, 'Cuenca', 'Balagbag', 'CUE', 'Erlenda Gutierrez', 0, 0, 0, 0, 0, '13.93510', '121.06568', 'Septic Tank', 0.000),
(64, 'Cuenca', 'Balagbag', 'CUE', 'Myrna Gutierrez', 1, 0, 0, 0, 0, '13.924247', '121.055013', 'Septic Tank', 0.000),
(65, 'Cuenca', 'Balagbag', 'CUE', 'Gemma Reponte', 1, 0, 0, 0, 0, '13.93188', '121.07023', 'Septic Tank', 0.000),
(66, 'Cuenca', 'Balagbag', 'CUE', 'Emma Escucharo', 1, 0, 3, 0, 0, '13.934203', '121.063081', 'Septic Tank', 0.000),
(67, 'Cuenca', 'Calumayin', 'CUE', 'Gutierrez Isabel H.', 0, 0, 0, 11, 0, '13.942667', '121.060639', 'Septic Tank', 0.000),
(68, 'Cuenca', 'Don Juan', 'CUE', 'Frances L. Laqui', 1, 0, 17, 0, 0, '13.93869', '121.038823', 'Septic Tank', 0.000),
(69, 'Cuenca', 'Don Juan', 'CUE', 'Pedro M. Matulac', 1, 0, 0, 0, 0, '13.938023', '121.037321', 'Septic Tank', 0.000),
(70, 'Cuenca', 'Don Juan', 'CUE', 'Joseph L. Zara', 0, 0, 0, 0, 0, '13.938626', '121.038836', 'Septic Tank', 0.000),
(71, 'Cuenca', 'Don Juan', 'CUE', 'Edgar L. Laqui', 1, 0, 0, 0, 0, '13.93819', '121.038662', 'Septic Tank', 0.000),
(72, 'Cuenca', 'Don Juan', 'CUE', 'Marvin L. Siscar', 0, 0, 2, 0, 0, '13.938462', '121.038606', 'Septic Tank', 0.000),
(73, 'Cuenca', 'Don Juan', 'CUE', 'Rosalie L. Cristobal', 0, 0, 0, 0, 0, '13.93773', '121.03842', 'Septic Tank', 0.000),
(74, 'Cuenca', 'Don Juan', 'CUE', 'Reynaldo L. Laqui', 1, 0, 0, 0, 0, '13.93773', '121.038957', 'Septic Tank', 0.000),
(75, 'Cuenca', 'Don Juan', 'CUE', 'Romei P. Zara', 0, 0, 0, 0, 0, '13.938856', '121.038731', 'Septic Tank', 0.000),
(76, 'Cuenca', 'Don Juan', 'CUE', 'Leovino G. Dimaculangan', 0, 0, 2, 0, 0, '13.93663', '121.038597', 'Septic Tank', 0.000),
(77, 'Cuenca', 'Barangay 8', 'CUE', 'Remigio M. Jumarang', 1, 0, 0, 0, 0, '13.906106', '121.050507', 'Septic Tank', 0.000),
(78, 'Cuenca', 'San Felipe', 'CUE', 'Ligaya Fabilitante', 1, 0, 0, 0, 0, '13.88599', '121.04295', 'Septic Tank', 0.000),
(79, 'Cuenca', 'San Felipe', 'CUE', 'Lourdes Corona', 1, 0, 0, 0, 0, '13.887425', '121.045623', 'Septic Tank', 0.000),
(80, 'Cuenca', 'San Felipe', 'CUE', 'Vicente R. Lunar', 5, 0, 8, 0, 0, '13.890567', '121.034532', 'Septic Tank', 0.000),
(81, 'Cuenca', 'San Felipe', 'CUE', 'Divina Quitain', 0, 0, 10, 0, 0, '13.89574 ', '121.03363 ', 'Septic Tank', 0.000),
(82, 'Cuenca', 'San Felipe', 'CUE', 'Rico Larosa', 1, 0, 3, 0, 0, '13.892307', '121.035326', 'Septic Tank', 0.000),
(83, 'Cuenca', 'San Felipe', 'CUE', 'Juliet Jarabejo', 0, 0, 30, 0, 0, '13.89174 ', '121.04135 ', 'Septic Tank', 0.000),
(84, 'Cuenca', 'San Felipe', 'CUE', 'Jesa Robles', 1, 0, 0, 0, 0, '13.88306', '121.04081', 'Septic Tank', 0.000),
(85, 'Cuenca', 'San Felipe', 'CUE', 'Leonardo Lunar', 3, 0, 8, 0, 0, '13.88464', '121.04217', 'Septic Tank', 0.000),
(86, 'Cuenca', 'San Felipe', 'CUE', 'Edilberto Badjang', 2, 0, 2, 0, 0, '13.89075', '121.03331', 'Septic Tank', 0.000),
(87, 'Laurel', 'As-Is', 'LAU', 'Resident 1', 45, 7, 50, 70, 0, '14.05745', '120.912352', 'Septic Tank', 0.000),
(88, 'Laurel', 'As-Is', 'LAU', 'Resident 2', 10, 1, 29, 12, 0, '14.059116', '120.903854', 'Septic Tank', 0.000),
(89, 'Laurel', 'As-Is', 'LAU', 'Resident 3', 2, 0, 0, 0, 0, '14.061489', '120.899906', 'Septic Tank', 0.000),
(90, 'Laurel', 'Balakilong', 'LAU', 'Resident 4', 1, 0, 10, 0, 0, '14.07612786', '120.9220687', 'Septic Tank', 0.000),
(91, 'Laurel', 'Balakilong', 'LAU', 'Resident 5', 5, 0, 10, 10, 0, '14.06809407', '120.9368722', 'Septic Tank', 0.000),
(92, 'Laurel', 'Balakilong', 'LAU', 'Resident 6', 0, 0, 0, 0, 0, '14.06940594', '120.9360173', 'Septic Tank', 0.000),
(93, 'Laurel', 'Balakilong', 'LAU', 'Resident 7', 3, 0, 10, 5, 0, '14.07225378', '120.9223551', 'Septic Tank', 0.000),
(94, 'Laurel', 'Berinayan', 'LAU', 'Resident 8', 14, 0, 20, 0, 0, '14.07284754', '120.9518939', 'Septic Tank', 0.000),
(95, 'Laurel', 'Berinayan', 'LAU', 'Resident 9', 3, 0, 8, 0, 0, '14.07274433', '120.9495504', 'Septic Tank', 0.000),
(96, 'Laurel', 'Bugaan East', 'LAU', 'Resident 10', 2, 0, 0, 0, 0, '14.050363', '120.940037', 'Septic Tank', 0.000),
(97, 'Laurel', 'Bugaan East', 'LAU', 'Resident 11', 0, 0, 22, 0, 0, '14.044545', '120.938401', 'Septic Tank', 0.000),
(98, 'Laurel', 'Bugaan East', 'LAU', 'Resident 12', 1, 0, 20, 15, 0, '14.046543', '120.937822', 'Septic Tank', 0.000),
(99, 'Laurel', 'Bugaan West', 'LAU', 'Resident 13', 1, 0, 20, 11, 0, '14.0360297', '120.9246009', 'Compost', 0.000),
(100, 'Laurel', 'Bugaan West', 'LAU', 'Resident 14', 4, 0, 15, 0, 0, '14.03483626', '120.9305773', 'Septic Tank', 0.000),
(101, 'Laurel', 'Buso-buso', 'LAU', 'Resident 15', 6, 0, 50, 30, 0, '14.01849866', '120.9200116', 'Septic Tank', 0.000),
(102, 'Laurel', 'Buso-buso', 'LAU', 'Resident 16', 2, 0, 25, 15, 0, '14.020438', '120.930634', 'Septic Tank', 0.000),
(103, 'Laurel', 'Dayap Itaas', 'LAU', 'Resident 17', 12, 0, 35, 25, 0, '14.01132', '120.918746', 'Septic Tank', 0.000),
(104, 'Laurel', 'Dayap Itaas', 'LAU', 'Resident 18', 0, 0, 20, 0, 0, '14.06577352', '120.8583746', 'Septic Tank', 0.000),
(105, 'Laurel', 'Gulod', 'LAU', 'Resident 19', 60, 2, 150, 150, 0, '14.03257364', '120.9404129', 'Septic Tank', 0.000),
(106, 'Laurel', 'Gulod', 'LAU', 'Resident 20', 6, 0, 47, 0, 0, '14.03241389', '120.9419447', 'Septic Tank', 0.000),
(107, 'Laurel', 'Gulod', 'LAU', 'Resident 21', 4, 0, 5, 0, 0, '14.035781', '120.938058', 'Septic Tank', 0.000),
(108, 'Laurel', 'J. Leviste', 'LAU', 'Resident 22', 0, 0, 20, 0, 0, '14.072577', '120.9390573', 'N/A', 0.000),
(109, 'Laurel', 'J. Leviste', 'LAU', 'Resident 23', 0, 0, 7, 0, 0, '14.0726221', '120.9386331', 'Septic Tank', 0.000),
(110, 'Laurel', 'J. Leviste', 'LAU', 'Resident 24', 4, 0, 15, 22, 0, '14.07133158', '120.938985', 'Septic Tank', 0.000),
(111, 'Laurel', 'Molinete', 'LAU', 'Resident 25', 0, 5, 0, 0, 0, '14.06258719', '120.9111393', 'Septic Tank', 0.000),
(112, 'Laurel', 'Molinete', 'LAU', 'Resident 26', 0, 0, 29, 0, 0, '14.06338387', '120.922759', 'Compost', 0.000),
(113, 'Laurel', 'Niyugan', 'LAU', 'Resident 27', 10, 0, 0, 10, 0, '14.07795094', '120.8698124', 'Septic Tank', 0.000),
(114, 'Laurel', 'Niyugan', 'LAU', 'Resident 28', 8, 0, 39, 0, 0, '14.07907742', '120.8710351', 'Septic Tank', 0.000),
(115, 'Laurel', 'Paliparan', 'LAU', 'Resident 29', 15, 0, 15, 30, 0, '14.05879794', '120.8812918', 'Septic Tank', 0.000),
(116, 'Laurel', 'Paliparan', 'LAU', 'Resident 30', 0, 0, 0, 0, 0, '14.05609808', '120.8880539', 'Septic Tank', 0.000),
(117, 'Mataas Na Kahoy', 'Kinalaglagan', 'MNK', 'Francisco Sandoval', 1, 0, 0, 8, 0, '14.00455', '121.09296', 'Septic Tank', 0.000),
(118, 'Mataas Na Kahoy', 'Kinalaglagan', 'MNK', 'Romio Orense', 0, 0, 9, 0, 0, '14.0043', '121.095', 'Septic Tank', 0.000),
(119, 'Mataas Na Kahoy', 'Kinalaglagan', 'MNK', 'Noel de Torres', 7, 0, 0, 25, 0, '14.00667', '121.09622', 'Septic Tank', 0.000),
(120, 'Mataas Na Kahoy', 'Kinalaglagan', 'MNK', 'Richard Calacal', 1, 0, 0, 12, 0, '14.00481', '121.09422', 'Septic Tank', 0.000),
(121, 'Mataas Na Kahoy', 'Nangkaan', 'MNK', 'Piggery 1', 0, 0, 0, 7, 0, '13.98398', '121.08496', 'Septic Tank', 0.000),
(122, 'Mataas Na Kahoy', 'Nangkaan', 'MNK', 'Piggery 2', 0, 3, 0, 0, 0, '13.98498', '121.08417', 'Compost', 0.000),
(123, 'Mataas Na Kahoy', 'Nangkaan', 'MNK', 'Piggery 3', 0, 0, 6, 0, 0, '13.98513', '121.08435', 'Septic Tank', 0.000),
(124, 'Mataas Na Kahoy', 'Nangkaan', 'MNK', 'Piggery 4', 0, 1, 0, 0, 0, '13.98498', '121.08482', 'Compost', 0.000),
(125, 'Mataas Na Kahoy', 'Nangkaan', 'MNK', 'Piggery 5', 0, 2, 0, 0, 0, '13.98534', '121.08472', 'Compost', 0.000),
(126, 'Mataas Na Kahoy', 'Nangkaan', 'MNK', 'Piggery 6', 0, 0, 6, 0, 0, '13.98513', '121.0852', 'Septic Tank', 0.000),
(127, 'Mataas Na Kahoy', 'Bubuyan', 'MNK', 'Daisy Mendoza', 0, 0, 5, 0, 0, '13.9970752', '121.1041778', 'Septic Tank', 0.000),
(128, 'Mataas Na Kahoy', 'Upa', 'MNK', 'Pedro Reyes', 15, 2, 0, 50, 0, '13.9623351', '121.1128712', 'Septic Tank', 0.000),
(129, 'Mataas Na Kahoy', 'Upa', 'MNK', 'Cesar Osena', 3, 1, 9, 20, 0, '13.9637944', '121.1115365', 'Septic Tank', 0.000),
(130, 'Mataas Na Kahoy', 'Upa', 'MNK', 'Homer Hernandez', 2, 0, 6, 0, 0, '13.9619008', '121.1120075', 'Septic Tank', 0.000),
(131, 'Mataas Na Kahoy', 'Upa', 'MNK', 'Jose Resinto', 25, 2, 100, 0, 0, '13.9729592', '121.1096375', 'Lagoon', 0.000),
(132, 'Mataas Na Kahoy', 'Upa', 'MNK', 'Violeta Rivera', 25, 1, 130, 0, 0, '13.9733669', '121.1096227', 'Septic Tank', 0.000),
(133, 'Mataas Na Kahoy', 'Bayorbor', 'MNK', 'Noel Gutierez', 7, 0, 10, 0, 0, '13.9796992', '121.0943848', 'Septic Tank', 0.000),
(134, 'Mataas Na Kahoy', 'Bayorbor', 'MNK', 'Eupoldo Landicho', 15, 2, 30, 0, 0, '13.9808275', '121.0961108', 'Septic Tank', 0.000),
(135, 'San Nicolas', 'Abelo', 'SAN', 'Aldin De Roxas Carolino', 0, 0, 9, 0, 0, '13.91896734', '120.9517486', 'Septic Tank', 0.000),
(136, 'San Nicolas', 'Abelo', 'SAN', 'Julia A. Belo', 2, 0, 12, 0, 0, '13.9216305', '120.9540897', 'Septic Tank', 0.000),
(137, 'San Nicolas', 'Bancoro', 'SAN', 'Ferdinand A. Delos Reyes', 6, 0, 8, 0, 0, '13.91312251', '120.9734984', 'Lagoon', 0.000),
(138, 'San Nicolas', 'Bangin', 'SAN', 'Alvin B. Maristela', 10, 0, 30, 0, 0, '13.91673485', '120.9399126', 'Lagoon', 0.000),
(139, 'San Nicolas', 'Bangin', 'SAN', 'Beatriz H. Catapang', 1, 0, 0, 0, 0, '13.91600316', '120.9392936', 'Septic Tank', 0.000),
(140, 'San Nicolas', 'Bangin', 'SAN', 'Catalino T. De Roxas', 3, 0, 21, 20, 0, '13.91512749', '120.9242825', 'Septic Tank', 0.000),
(141, 'San Nicolas', 'Bangin', 'SAN', 'Clemente M. Palo', 0, 0, 100, 0, 0, '13.91674842', '120.9268842', 'Septic Tank', 0.000),
(142, 'San Nicolas', 'Bangin', 'SAN', 'Crisanto M. Maristela', 10, 0, 30, 0, 0, '13.91653502', '120.939122', 'Septic Tank', 0.000),
(143, 'San Nicolas', 'Bangin', 'SAN', 'Demetrio G. Reyes', 5, 0, 30, 0, 0, '13.9185212', '120.9389106', 'Composting', 0.000),
(144, 'San Nicolas', 'Bangin', 'SAN', 'Editha D. Maristela', 0, 0, 0, 0, 0, '13.91653502', '120.939122', 'N/A', 0.000),
(145, 'San Nicolas', 'Calangay', 'SAN', 'Cleofe A. Lagasa', 3, 0, 0, 0, 0, '13.92029465', '120.9413974', 'Composting', 0.000),
(146, 'San Nicolas', 'Calangay', 'SAN', 'Corazon V. Satira', 3, 0, 0, 13, 0, '13.91431187', '120.9389884', 'Lagoon', 0.000),
(147, 'San Nicolas', 'Calangay', 'SAN', 'Joseferidad S. Morales', 10, 0, 0, 30, 0, '13.92200901', '120.9383057', 'Septic Tank', 0.000),
(148, 'San Nicolas', 'Calangay', 'SAN', 'Mary Jean M. Estiller', 8, 0, 30, 0, 0, '13.92098014', '120.9394356', 'Lagoon', 0.000),
(149, 'San Nicolas', 'Calangay', 'SAN', 'Oscar S. Endozo', 3, 0, 0, 0, 0, '13.91816654', '120.9394192', 'Septic Tank', 0.000),
(150, 'San Nicolas', 'Calangay', 'SAN', 'Rizalina C. Anonuevo', 3, 0, 8, 0, 0, '13.91895016', '120.9392802', 'Septic Tank', 0.000),
(151, 'San Nicolas', 'Munlawin', 'SAN', 'Mayette G. Torres', 4, 0, 0, 8, 0, '13.9127206', '120.9526993', 'Septic Tank', 0.000),
(152, 'San Nicolas', 'Munlawin', 'SAN', 'Lorenza Barrion', 0, 0, 0, 13, 0, '13.91134025', '120.9512946', 'Septic Tank', 0.000),
(153, 'San Nicolas', 'Munlawin', 'SAN', 'Emily\'s Tuna Piggery', 1, 0, 0, 0, 0, '13.91214262', '120.9509311', 'Free-flow', 0.000),
(154, 'San Nicolas', 'Pansipit', 'SAN', 'Lesley Ann Valencia', 2, 0, 0, 0, 0, '13.92009935', '120.9429979', 'Septic Tank', 0.000),
(155, 'San Nicolas', 'Poblacion', 'SAN', 'Katherine R. Mendoza', 5, 0, 0, 0, 0, '13.92400487', '120.9490976', 'Septic Tank', 0.000),
(156, 'San Nicolas', 'Poblacion', 'SAN', 'Gabby D. Rodriguez', 0, 0, 20, 0, 0, '13.924205', '120.952815', 'Septic Tank', 0.000),
(157, 'San Nicolas', 'Poblacion', 'SAN', 'Rosalinda V. Rodriguez', 0, 0, 30, 0, 0, '13.92437607', '120.9520718', 'Lagoon', 0.000),
(158, 'San Nicolas', 'Sinturisan', 'SAN', 'Loren Mercado Landicho', 4, 0, 10, 20, 0, '13.90661645', '120.9395067', 'Ipa/Rice Hull', 0.000),
(159, 'San Nicolas', 'Sto. Nino', 'SAN', 'Perla A. Cantal', 3, 0, 12, 7, 0, '13.9132902', '120.9461794', 'Septic Tank', 0.000),
(160, 'San Nicolas', 'Sto.Nino', 'SAN', 'Rolando B. Cantal', 3, 0, 15, 0, 0, '13.9101573', '120.947704', 'Lagoon', 0.000),
(161, 'San Nicolas', 'Talang', 'SAN', 'Dionisio M. Arenas', 2, 0, 21, 26, 0, '13.92047646', '120.9497195', 'Septic Tank', 0.000),
(162, 'San Nicolas', 'Talang', 'SAN', 'Edilberto H. Martinez', 0, 0, 0, 48, 0, '13.92075923', '120.9455124', 'Septic Tank', 0.000),
(163, 'San Nicolas', 'Talang', 'SAN', 'Elenita D. Arenas', 1, 0, 0, 0, 0, '13.9203449', '120.9456016', 'Septic Tank', 0.000),
(164, 'San Nicolas', 'Talang', 'SAN', 'Florentino Alolod', 0, 0, 13, 0, 0, '13.92094369', '120.9460522', 'Septic Tank', 0.000),
(165, 'Sta. Teresita', 'Antipolo', 'STA', 'May Punsalan', 1, 0, 0, 0, 0, '13.88182790630655', '120.97429783471', 'Septic Tank', 0.000),
(166, 'Sta. Teresita', 'Burol', 'STA', 'Resurrecsion Caguicla', 0, 0, 0, 0, 0, '13.895461616841849', '120.965415761575', 'N/A', 0.000),
(167, 'Sta. Teresita', 'Burol', 'STA', 'Jerome\'s Babuyan', 0, 0, 1, 0, 0, '13.8973891597423', '120.9670520098452', 'Ipa/Rice Hull', 0.000),
(168, 'Sta. Teresita', 'Burol', 'STA', 'Ecolerence Piggery', 5, 0, 0, 0, 0, '13.895556192898692', '120.967096098385', 'Septic Tank', 0.000),
(169, 'Sta. Teresita', 'Burol', 'STA', 'Retchie Bobadilla', 0, 0, 0, 0, 0, '13.89661384369715', '120.96654800184562', 'N/A', 0.000),
(170, 'Sta. Teresita', 'Calumala', 'STA', 'Danilo Katigbak', 0, 0, 0, 0, 0, '13.887474141414500', '120.9781742727220', 'N/A', 0.000),
(171, 'Sta. Teresita', 'Calumala', 'STA', 'Diosdado B. Bathan', 2, 0, 0, 7, 0, '13.88937800130199', '120.980316782961', 'Septic Tank', 0.000),
(172, 'Sta. Teresita', 'Calumala', 'STA', 'Guillermo B. Malaluan', 1, 0, 0, 10, 0, '13.88804023569232', '120.976400168345', 'Septic Tank', 0.000),
(173, 'Sta. Teresita', 'Calumala', 'STA', 'Joey A. Benedicto', 0, 0, 0, 0, 0, '13.88782667120326', '120.978798425373', 'N/A', 0.000),
(174, 'Sta. Teresita', 'Calumala', 'STA', 'John James B. Arellano', 0, 0, 2, 0, 0, '13.88992134654180', '120.977802545154', 'Lagoon', 0.000),
(175, 'Sta. Teresita', 'Calumala', 'STA', 'Jonah T. Coro', 0, 0, 0, 0, 0, '13.887246194460058', '120.976513085417', 'Septic Tank', 0.000),
(176, 'Sta. Teresita', 'Calumala', 'STA', 'Jose R. Alviz', 2, 0, 2, 0, 0, '13.88692793881696', '120.976825551274', 'Composting', 0.000),
(177, 'Sta. Teresita', 'Calumala', 'STA', 'Laami M. Basco', 6, 0, 0, 3, 0, '13.883823654802285', '120.974588448944', 'Septic Tank', 0.000),
(178, 'Sta. Teresita', 'Calumala', 'STA', 'Narmi Bathan', 1, 0, 0, 0, 0, '13.888633014480991', '120.976914744468', 'Free-flow', 11.298),
(179, 'Sta. Teresita', 'Calumala', 'STA', 'Nestor B. Manalo', 2, 0, 0, 0, 0, '13.88689701540584', '120.97652207187333', 'Lagoon', 0.000),
(180, 'Sta. Teresita', 'Calumala', 'STA', 'Ronald Mendoza', 1, 0, 0, 0, 0, '13.885460675361998', '120.982314093077', 'Composting', 0.000),
(181, 'Sta. Teresita', 'Calumala', 'STA', 'Sylvia D. Bancoro', 8, 0, 0, 31, 0, '13.888335952034526', '120.977992049833', 'Ipa/Rice Hull', 0.000),
(182, 'Sta. Teresita', 'Calumala', 'STA', 'Teodoro A. Agno', 0, 0, 1, 0, 0, '13.888952714771248', '120.977326405367', 'N/A', 0.000),
(183, 'Sta. Teresita', 'Cuta East', 'STA', 'Alberto Atienza', 7, 0, 23, 0, 0, '13.864882745815', '120.992212587159', 'Composting', 0.000),
(184, 'Sta. Teresita', 'Cutang Cawayan', 'STA', 'Arnold V. Amores', 0, 0, 0, 0, 0, '13.868829977470815', '120.987615695768', 'N/A', 0.000),
(185, 'Sta. Teresita', 'Cutang Cawayan', 'STA', 'Edison Dimailig', 2, 0, 10, 0, 0, '13.86751696757775', '120.9850511754255', 'Septic Tank', 0.000),
(186, 'Sta. Teresita', 'Cutang Cawayan', 'STA', 'Ronaldo Oftial', 4, 0, 20, 10, 0, '13.866303046162407', '120.985446698463', 'Biogas', 0.000),
(187, 'Sta. Teresita', 'Poblacion 1', 'STA', 'Felipe B. Maranan', 0, 0, 3, 0, 0, '13.87186662048421', '120.972800640376', 'Composting', 0.000),
(188, 'Sta. Teresita', 'Poblacion 2', 'STA', 'Isagani N. Arenas', 6, 0, 0, 0, 0, '13.866846091677708', '120.976384071738', 'Lagoon', 0.000),
(189, 'Sta. Teresita', 'Poblacion 3', 'STA', 'Eden Perez/Ruelito Perez', 0, 0, 23, 9, 0, '13.900079727400446', '120.972889380003', 'Septic Tank', 0.000),
(190, 'Sta. Teresita', 'Saimsim', 'STA', 'Welbert Salazar', 0, 1, 0, 0, 0, '13.911231408542054', '120.98073680269505', 'N/A', 0.000),
(191, 'Sta. Teresita', 'Saimsim', 'STA', 'Renato Comia', 0, 0, 0, 10, 0, '13.900982070021428', '120.97748446966', 'Septic Tank', 0.000),
(192, 'Sta. Teresita', 'Saimsim', 'STA', 'Aljon Comia', 4, 3, 31, 0, 0, '13.900982070021428', '120.979261990312', 'N/A', 0.000),
(193, 'Sta. Teresita', 'Sampa', 'STA', 'Celso Clor', 0, 0, 9, 0, 0, '13.859847054137376', '120.964058296214', 'Septic Tank', 0.000),
(194, 'Sta. Teresita', 'Sampa', 'STA', 'Philip Mendoza', 0, 0, 9, 0, 0, '13.86396997581948', '120.96697850283', 'Septic Tank', 0.000),
(195, 'Talisay', 'Aya', 'TAL', 'Gerry Cacao', 4, 0, 1, 0, 0, '14.092334500894', '121.050795002105', 'Lagoon', 0.000),
(196, 'Talisay', 'Aya', 'TAL', 'Edwin De Leon', 0, 0, 2, 0, 0, '14.094777382284', '121.051386743873', 'Septic Tank', 0.000),
(197, 'Talisay', 'Aya', 'TAL', 'Jr. Abante', 1, 0, 2, 0, 0, '14.100766745864', '121.051265360946', 'Free-flow', 6.900),
(198, 'Talisay', 'Aya', 'TAL', 'Alvin De Villa', 0, 0, 1, 0, 0, '14.101943997998', '121.056666901060', 'Free-flow', 2.400),
(199, 'Talisay', 'Balas', 'TAL', 'Edwin Encarnation', 1, 0, 0, 0, 0, '14.090165354975', '120.996170466446', 'Lagoon', 0.000),
(200, 'Talisay', 'Balas', 'TAL', 'Arlene Buno', 1, 1, 0, 0, 0, '14.087059603257', '120.994267107269', 'Septic Tank', 0.000),
(201, 'Talisay', 'Leynes', 'TAL', 'Felimon Piol', 0, 0, 0, 0, 0, '14.090318613496', '120.970641722281', 'Septic Tank', 0.000),
(202, 'Talisay', 'Leynes', 'TAL', 'Jacky Medina', 7, 0, 0, 0, 0, '14.097114889762', '120.967395422461', 'Septic Tank', 0.000),
(203, 'Talisay', 'Leynes', 'TAL', 'Andro Sagurot', 1, 0, 0, 0, 0, '14.098672409441', '120.973115268669', 'Lagoon', 0.000),
(204, 'Talisay', 'Leynes', 'TAL', 'Roderick Villanueva', 0, 3, 0, 1, 0, '14.094750496847', '120.967985764063', 'Free-flow', 0.700),
(205, 'Talisay', 'Leynes', 'TAL', 'Emma Magsino', 2, 0, 0, 11, 0, '14.091272590635', '120.976722339508', 'Septic Tank', 0.000),
(206, 'Talisay', 'Leynes', 'TAL', 'Cesar Caringal', 0, 0, 2, 0, 0, '14.099909403561', '120.972516635862', 'Septic Tank', 0.000),
(207, 'Talisay', 'Leynes', 'TAL', 'Benigno Caringal', 1, 0, 8, 1, 0, '14.096975004986', '120.968825916396', 'Septic Tank', 0.000),
(208, 'Talisay', 'Leynes', 'TAL', 'Bailon Caringal', 0, 0, 0, 0, 0, '14.087939613704', '120.973074460342', 'Septic Tank', 0.000),
(209, 'Talisay', 'Poblacion 1', 'TAL', 'Jollan Paragas', 1, 0, 4, 0, 0, '14.098451000000', '121.023224000000', 'Lagoon', 0.000),
(210, 'Talisay', 'Poblacion 1', 'TAL', 'Jonalyn Mpesigan', 2, 0, 0, 10, 0, '14.096709000000', '121.021742000000', 'Septic Tank', 0.000),
(211, 'Talisay', 'Poblacion 2', 'TAL', 'Arlym Amores', 1, 0, 0, 0, 0, '14.096390000000', '121.022306000000', 'Septic Tank', 0.000),
(212, 'Talisay', 'Poblacion 4', 'TAL', 'Jualita Lacanlale', 0, 0, 6, 0, 0, '14.089077000000', '121.018881000000', 'Composting', 0.000),
(213, 'Talisay', 'Sampaloc', 'TAL', 'Elisha Almendras', 2, 0, 0, 0, 0, '14.089614000000', '120.970434000000', 'Lagoon', 0.000),
(214, 'Talisay', 'Sampaloc', 'TAL', 'Ronald Lanting', 0, 0, 1, 0, 0, '14.087897000000', '120.964222000000', 'Lagoon', 0.000),
(215, 'Talisay', 'Santa Maria', 'TAL', 'Ajda Garcia', 4, 1, 0, 13, 0, '14.090908000000', '121.006717000000', 'Septic Tank', 0.000),
(216, 'Talisay', 'Tranca', 'TAL', 'Ramon Cornero', 1, 0, 2, 0, 0, '14.131156000000', '121.055234000000', 'Septic Tank', 0.000),
(217, 'Talisay', 'Tranca', 'TAL', 'Elpidio De Castro', 0, 0, 1, 0, 0, '14.138002000000', '121.051567000000', 'Lagoon', 0.000),
(218, 'Talisay', 'Tumaway', 'TAL', 'Emerson Casabuena', 1, 0, 0, 0, 0, '14.100763000000', '121.030296000000', 'Septic Tank', 0.000),
(219, 'Talisay', 'Tumaway', 'TAL', 'Junell Pidenez', 0, 0, 2, 0, 0, '14.100330000000', '121.029473000000', 'Free-flow', 2.000),
(220, 'Talisay', 'Tumaway', 'TAL', 'Michael Rebulado', 1, 0, 1, 0, 0, '14.101567000000', '121.032721000000', 'Composting', 0.000),
(221, 'Talisay', 'Tumaway', 'TAL', 'Nestor De Claro', 0, 0, 1, 0, 0, '14.104859000000', '121.037173000000', 'Lagoon', 0.000),
(222, 'Talisay', 'Tumaway', 'TAL', 'Edmon Pampulan', 1, 0, 0, 0, 0, '14.101951000000', '121.033110000000', 'Lagoon', 0.000),
(223, 'Talisay', 'Tumaway', 'TAL', 'Dennis Miranda', 1, 0, 0, 0, 0, '14.102687000000', '121.031355000000', 'Septic Tank', 0.000),
(224, 'Talisay', 'Tumaway', 'TAL', 'Felimon Carsocio', 0, 0, 2, 0, 0, '14.099580000000', '121.037523000000', 'Free-flow', 2.000),
(225, 'Tanauan', 'Talaga', 'TAN', 'Grace Malabanan', 2, 0, 0, 0, 0, '14.089080', '121.077518', 'N/A', 0.000),
(226, 'Tanauan', 'Talaga', 'TAN', 'Romulo Dapo', 2, 1, 0, 0, 0, '14.087278', '121.080103', 'Composting', 0.000),
(227, 'Tanauan', 'Talaga', 'TAN', 'Orticio Trambulo', 1, 0, 0, 13, 0, '14.090239', '121.078814', 'Free-flow', 11.200),
(228, 'Tanauan', 'Talaga', 'TAN', 'Rose Marquez', 2, 0, 0, 3, 0, '14.091080', '121.080745', 'Free-flow', 8.400),
(229, 'Tanauan', 'Talaga', 'TAN', 'Bonifacio Mercado', 6, 1, 0, 41, 0, '14.089334', '121.078039', 'Septic Tank', 0.000),
(230, 'Tanauan', 'Talaga', 'TAN', 'Melchor Catapang', 12, 2, 10, 48, 0, '14.097772', '121.105495', 'Biogas', 0.000),
(231, 'Tanauan', 'Talaga', 'TAN', 'Arthur Malabanan', 14, 0, 0, 37, 0, '14.103761', '121.105959', 'N/A', 0.000),
(232, 'Tanauan', 'Maugat', 'TAN', 'Antonio Miranda', 1, 0, 0, 15, 0, '14.110400', '121.072740', 'Septic Tank', 0.000),
(233, 'Tanauan', 'Maugat', 'TAN', 'Resty Miranda', 2, 0, 0, 13, 0, '14.110200', '121.073810', 'Septic Tank', 0.000),
(234, 'Tanauan', 'Banadero', 'TAN', 'Patrick Ramos', 4, 0, 2, 0, 0, '14.082479', '121.062582', 'Free-flow', 25.200),
(235, 'Tanauan', 'Banadero', 'TAN', 'Arturo Malabanan', 0, 0, 13, 0, 0, '14.080000', '121.064380', 'Free-flow', 25.800),
(236, 'Tanauan', 'Banadero', 'TAN', 'Pete Natanauan', 2, 0, 5, 2, 0, '14.086650', '121.055500', 'Free-flow', 14.100),
(237, 'Tanauan', 'Banadero', 'TAN', 'Tereso Hernates', 3, 0, 0, 0, 0, '14.056304', '121.075180', 'Free-flow', 12.600),
(238, 'Tanauan', 'Banadero', 'TAN', 'Precios Gonzales', 1, 0, 0, 9, 0, '14.084720', '121.068320', 'Free-flow', 1.400),
(239, 'Tanauan', 'Boot', 'TAN', 'Lito Precilla', 2, 0, 0, 20, 0, '14.049829', '121.081386', 'Septic Tank', 0.000),
(240, 'Tanauan', 'Balele', 'TAN', 'Nolasco Gozalez', 1, 0, 0, 10, 0, '14.064748', '121.099128', 'Free-flow', 8.400),
(241, 'Tanauan', 'Balele', 'TAN', 'Marcelo Veladco', 6, 2, 0, 19, 0, '14.064568', '121.099060', 'Septic Tank', 0.000),
(242, 'Tanauan', 'Balele', 'TAN', 'Freddie Rudas', 3, 0, 0, 13, 0, '14.065078', '121.098965', 'Septic Tank', 0.000),
(243, 'Tanauan', 'Balele', 'TAN', 'Roel Lerio', 2, 0, 20, 9, 0, '14.068048', '121.097417', 'Composting', 0.000),
(244, 'Tanauan', 'Ambulong', 'TAN', 'Mariano Matuto', 1, 0, 4, 6, 0, '14.084783', '121.060947', 'Ipa/Rice Hull', 0.000),
(245, 'Tanauan', 'Bilog-bilog', 'TAN', 'Salde Castillo', 4, 0, 8, 0, 0, '14.107485', '121.090040', 'Septic Tank', 0.000),
(246, 'Tanauan', 'Bilog-bilog', 'TAN', 'Leonila Terrible', 1, 0, 0, 0, 0, '14.106263', '121.094093', 'Septic Tank', 0.000),
(247, 'Tanauan', 'Bilog-bilog', 'TAN', 'Francisco Matundag', 3, 0, 12, 27, 0, '14.105827', '121.087252', 'Septic Tank', 0.000),
(248, 'Tanauan', 'Janopol Occidental', 'TAN', 'Rocel Robles', 2, 0, 0, 13, 0, '14.113058', '121.059846', 'Septic Tank', 0.000),
(249, 'Tanauan', 'Janopol Occidental', 'TAN', 'Nelson Alcantara', 4, 1, 0, 15, 0, '14.077322', '121.084763', 'Composting', 0.000),
(250, 'Tanauan', 'Bilog-bilog', 'TAN', 'Ronel Vergara', 3, 0, 0, 20, 0, '14.105762', '121.093270', 'Septic Tank', 0.000),
(251, 'Tanauan', 'Bilog-bilog', 'TAN', 'Benigno Castillo', 3, 0, 5, 11, 0, '14.107533', '121.090112', 'Septic Tank', 0.000),
(252, 'Tanauan', 'Bilog-bilog', 'TAN', 'Pastor Castillo', 1, 0, 10, 0, 0, '14.106090', '121.094185', 'Septic Tank', 0.000),
(253, 'Tanauan', 'Bilog-bilog', 'TAN', 'Fernando Castillo', 4, 0, 27, 0, 0, '14.105308', '121.085840', 'Septic Tank', 0.000),
(254, 'Tanauan', 'Talaga', 'TAN', 'Sergio Manalo', 1, 0, 1, 0, 0, '14.09671976', '121.0792151', 'Composting', 0.000),
(267, 'Laurel', 'Gulod', 'ADMI', 'Jay', 8, 0, 14, 9, 0, '14.032699998215309', '120.94661951065065', 'Free-flow', 61.000),
(269, 'Laurel', 'Gulod', 'ADMI', 'Harlene', 15, 10, 6, 11, 0, '14.032523050914314', '120.94541788101198', 'Free-flow', 72.000);

-- --------------------------------------------------------

--
-- Table structure for table `pig_farms`
--

CREATE TABLE `pig_farms` (
  `id` int(11) NOT NULL,
  `farm_name` varchar(100) DEFAULT NULL,
  `sow_count` int(11) DEFAULT NULL,
  `boar_count` int(11) DEFAULT NULL,
  `fattener_count` int(11) DEFAULT NULL,
  `piglet_count` int(11) DEFAULT NULL,
  `native_count` int(11) DEFAULT NULL,
  `latitude` decimal(10,6) DEFAULT NULL,
  `longitude` decimal(10,6) DEFAULT NULL,
  `sanitation` text DEFAULT NULL,
  `municipality_code` text NOT NULL,
  `barangay` varchar(20) DEFAULT NULL,
  `municipality` varchar(20) DEFAULT NULL,
  `discharge` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rain_g`
--

CREATE TABLE `rain_g` (
  `id` int(11) NOT NULL,
  `tributary` varchar(50) DEFAULT NULL,
  `gauge_id` varchar(10) DEFAULT NULL,
  `volume` float DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rain_g`
--

INSERT INTO `rain_g` (`id`, `tributary`, `gauge_id`, `volume`, `timestamp`) VALUES
(4, '', '', 5.68, '2025-02-17 06:57:06'),
(5, ' Buso-buso Stream 1gauge_id= RG1 ', '', 5.68, '2025-02-17 07:00:05'),
(6, ' Buso-buso Stream 1', ' RG1 ', 4.74, '2025-02-17 07:03:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `piggeries`
--
ALTER TABLE `piggeries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pig_farms`
--
ALTER TABLE `pig_farms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rain_g`
--
ALTER TABLE `rain_g`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `piggeries`
--
ALTER TABLE `piggeries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=270;

--
-- AUTO_INCREMENT for table `pig_farms`
--
ALTER TABLE `pig_farms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `rain_g`
--
ALTER TABLE `rain_g`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

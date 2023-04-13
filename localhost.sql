-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 13, 2023 at 12:04 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vnk`
--
CREATE DATABASE IF NOT EXISTS `vnk` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `vnk`;

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `product` varchar(50) NOT NULL,
  `decsription` text NOT NULL,
  `img_name` varchar(50) NOT NULL,
  `Price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id_menu`, `product`, `decsription`, `img_name`, `Price`) VALUES
(1, 'Піца 4 м\'яса', 'В складі піци знаходиться шинка, салямі пікантна, бекон і ковбаски мисливські, вони створюють справжній м\'ясної квартет, який не тільки не залишить байдужим любителів м\'яса, але і змусить вегетаріанців переглянути свій харчовий світогляд.', '1.jpg', 149.5),
(2, 'Хачапурі', 'Хачапурі являє собою хлібець різної форми з великим вмістом сиру: його в хачапурі приблизно вдвічі більше за вагою, ніж борошна. Часто тісто для хачапурі є абсолютно прісним, а от крім обов\'язкового сиру (свіжий або витриманий, часто овечий, наприклад сулугуні), до складу страви можуть входити яйця (наприклад, у аджарському хачапурі) та інші інгредієнти.', '2.jpg', 135.4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `name_user` varchar(40) NOT NULL,
  `password` varchar(145) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `login`, `name_user`, `password`) VALUES
(8, 'Ivaniuk', 'Maks', 'f5ecf212c2bea4d06593ddd7a89d4d47'),
(9, 'Ivaniuk', 'Maks', '26a8a711cb36b5be32ed081883f98116');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

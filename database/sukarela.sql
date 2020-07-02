-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2020 at 12:16 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sukarela`
--

-- --------------------------------------------------------

--
-- Table structure for table `bunga`
--

CREATE TABLE `bunga` (
  `id_bunga` int(11) NOT NULL,
  `nmr_rekening` varchar(30) NOT NULL,
  `tgl_awal` date NOT NULL DEFAULT current_timestamp(),
  `tgl_akhir` date NOT NULL DEFAULT current_timestamp(),
  `bunga` int(11) NOT NULL,
  `saldo_terendah` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bunga`
--

INSERT INTO `bunga` (`id_bunga`, `nmr_rekening`, `tgl_awal`, `tgl_akhir`, `bunga`, `saldo_terendah`, `created_at`) VALUES
(1, '20207267505', '2020-07-01', '2020-07-31', 1233, 250000, '2020-07-02 09:38:54'),
(2, '20207265483', '2020-07-01', '2020-07-31', 740, 150000, '2020-07-02 10:16:09');

--
-- Triggers `bunga`
--
DELIMITER $$
CREATE TRIGGER `tambah_bunga` AFTER INSERT ON `bunga` FOR EACH ROW BEGIN
	UPDATE nasabah SET saldo = saldo + NEW.bunga WHERE nmr_rekening = NEW.nmr_rekening;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `nasabah`
--

CREATE TABLE `nasabah` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(150) NOT NULL,
  `nmr_rekening` varchar(25) NOT NULL,
  `saldo` int(11) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `ktp` varchar(25) NOT NULL,
  `hp` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nasabah`
--

INSERT INTO `nasabah` (`id`, `nama`, `email`, `nmr_rekening`, `saldo`, `alamat`, `ktp`, `hp`) VALUES
(7, 'sulfikardi', 'sulfikardi25@gmail.com', '20207267505', 800000, 'Jl.pesona depok estate II blok b no 2', '7474747474747474', '0829374627182'),
(8, 'Ahmad Sayuti', 'ahmad@gmail.com', '20207265483', 700740, 'Jl.pesona depok estate II blok b no 2', '7408092501920001', '0829374627224');

-- --------------------------------------------------------

--
-- Table structure for table `setor`
--

CREATE TABLE `setor` (
  `id` int(11) NOT NULL,
  `nmr_rekening` varchar(30) NOT NULL,
  `jml_setor` int(20) NOT NULL,
  `tgl_setor` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setor`
--

INSERT INTO `setor` (`id`, `nmr_rekening`, `jml_setor`, `tgl_setor`) VALUES
(7, '20207267505', 300000, '2020-07-02 06:52:24'),
(8, '20207267505', 250000, '2020-07-02 06:54:53'),
(9, '20207265483', 250000, '2020-07-02 10:11:32'),
(10, '20207265483', 200000, '2020-07-02 10:11:52'),
(11, '20207265483', 150000, '2020-07-02 10:12:01');

--
-- Triggers `setor`
--
DELIMITER $$
CREATE TRIGGER `setor_dana` AFTER INSERT ON `setor` FOR EACH ROW BEGIN
	UPDATE nasabah SET saldo = saldo + NEW.jml_setor WHERE nmr_rekening = NEW.nmr_rekening;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `withdraw`
--

CREATE TABLE `withdraw` (
  `id` int(11) NOT NULL,
  `nmr_rekening` varchar(30) NOT NULL,
  `jml_withdraw` int(11) NOT NULL,
  `tgl_withdraw` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `withdraw`
--

INSERT INTO `withdraw` (`id`, `nmr_rekening`, `jml_withdraw`, `tgl_withdraw`) VALUES
(6, '20207267505', 200000, '2020-07-02'),
(7, '20207265483', 250000, '2020-07-02'),
(8, '20207265483', 150000, '2020-07-02');

--
-- Triggers `withdraw`
--
DELIMITER $$
CREATE TRIGGER `tarik_dana` AFTER INSERT ON `withdraw` FOR EACH ROW BEGIN
	UPDATE nasabah SET saldo = saldo - NEW.jml_withdraw WHERE nmr_rekening = NEW.nmr_rekening;
END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bunga`
--
ALTER TABLE `bunga`
  ADD PRIMARY KEY (`id_bunga`),
  ADD UNIQUE KEY `nmr_rekening` (`nmr_rekening`);

--
-- Indexes for table `nasabah`
--
ALTER TABLE `nasabah`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nmr_rekening` (`nmr_rekening`);

--
-- Indexes for table `setor`
--
ALTER TABLE `setor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdraw`
--
ALTER TABLE `withdraw`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bunga`
--
ALTER TABLE `bunga`
  MODIFY `id_bunga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nasabah`
--
ALTER TABLE `nasabah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `setor`
--
ALTER TABLE `setor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `withdraw`
--
ALTER TABLE `withdraw`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

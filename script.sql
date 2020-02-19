create database loja_peruca;

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `cpf` varchar(12) NOT NULL,
  `dataNasc` date NOT NULL,
  `email` varchar(70) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `sexo` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4


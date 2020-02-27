create database loja_peruca;

CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `cpf` varchar(12) NOT NULL,
  `dataNasc` date NOT NULL,
  `email` varchar(70) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `sexo` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `funcionarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `cargo` varchar(100) NOT NULL,
  `registro` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rua` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `cep` VARCHAR(45) NOT NULL,
  `clientes_id` INT,
  `fornecedores_id` INT,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_endereco_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `loja_peruca`.`clientes` (`id`),
  CONSTRAINT `fk_endereco_fornecedores1`
    FOREIGN KEY (`fornecedores_id`)
    REFERENCES `loja_peruca`.`fornecedores` (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `tipo_pgto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `parcelas` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cor` varchar(70) NOT NULL,
  `tamanho` varchar(45) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `sexo` varchar(12) NOT NULL,
  `preco` decimal(9,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


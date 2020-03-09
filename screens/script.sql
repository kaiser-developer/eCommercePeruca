create database loja_peruca;

use loja_peruca;

CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `cpf` varchar(12) NOT NULL,
  `dataNasc` date NOT NULL,
  `email` varchar(70) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `sexo` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `funcionario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `cargo` varchar(100) NOT NULL,
  `registro` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `fornecedor`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `cnpj` VARCHAR(15) NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rua` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `cep` VARCHAR(45) NOT NULL,
  `cliente_id` INT,
  `fornecedor_id` INT,
  PRIMARY KEY (`id`)
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

CREATE TABLE `produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cor` varchar(70) NOT NULL,
  `tamanho` varchar(45) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `sexo` varchar(12) NOT NULL,
  `preco` decimal(9,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `estoque`(
  `id_produto` INT NOT NULL,
  `saldo` INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `nota_fiscal`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_emissao` DATETIME NOT NULL,
  `id_pedido` INT,
  `id_entrada` INT,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `pedidos_vendas` (
  `cod_pedido` INT NOT NULL AUTO_INCREMENT,
  `valor_total` DOUBLE(9,2) NOT NULL,
  `status_pedido` VARCHAR(45) NOT NULL,
  `cliente_pesssoa_id` INT NOT NULL,
  `nota_fiscal_id` INT NOT NULL,
  `pagamento_id` INT NOT NULL,
  `status_id` INT NOT NULL,
  PRIMARY KEY (`cod_pedido`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `pedidos_compras`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `nota_fiscal_id` INT NOT NULL,
  `fornecedor_id` INT NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `itens_pedido`(
  `produto_id` INT NOT NULL,
  `qtd_produto` INT NOT NULL,
  `cod_pedidos_vendas` INT,
  `cod_pedidos_compras` INT
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- -------------------------------------FOREIGN KEYS-------------------------------------
ALTER TABLE `endereco`
ADD FOREIGN KEY (`cliente_id`) REFERENCES `loja_peruca`.`cliente` (`id`);

ALTER TABLE `endereco`
ADD FOREIGN KEY (`fornecedor_id`) REFERENCES `loja_peruca`.`fornecedor` (`id`);


ALTER TABLE `estoque`
ADD FOREIGN KEY (id_produto) REFERENCES `loja_peruca`.`produto` (`id`);


ALTER TABLE `nota_fiscal`
ADD FOREIGN KEY (id_pedido) REFERENCES `loja_peruca`.`pedidos_vendas` (`cod_pedido`);
  
ALTER TABLE `nota_fiscal`
ADD FOREIGN KEY (id_entrada) REFERENCES `loja_peruca`.`pedidos_compras` (`id`);


ALTER TABLE `pedidos_vendas`
ADD FOREIGN KEY (cliente_pesssoa_id) REFERENCES `loja_peruca`.`cliente` (`id`);

ALTER TABLE `pedidos_vendas`
ADD FOREIGN KEY (nota_fiscal_id) REFERENCES `loja_peruca`.`nota_fiscal` (`id`);

ALTER TABLE `pedidos_vendas`
ADD FOREIGN KEY (pagamento_id) REFERENCES `loja_peruca`.`tipo_pgto` (`id`);

ALTER TABLE `pedidos_vendas`
ADD FOREIGN KEY (status_id) REFERENCES `loja_peruca`.`status` (`id`);


ALTER TABLE `pedidos_compras`
ADD FOREIGN KEY (nota_fiscal_id) REFERENCES `loja_peruca`.`nota_fiscal` (`id`);

ALTER TABLE `pedidos_compras`
ADD FOREIGN KEY (fornecedor_id) REFERENCES `loja_peruca`.`fornecedor` (`id`);


ALTER TABLE `itens_pedido`
ADD FOREIGN KEY (produto_id) REFERENCES `loja_peruca`.`produto` (`id`);
  
ALTER TABLE `itens_pedido`
ADD FOREIGN KEY (cod_pedidos_vendas) REFERENCES `loja_peruca`.`pedidos_vendas` (`cod_pedido`);

ALTER TABLE `itens_pedido`
ADD FOREIGN KEY (cod_pedidos_compras) REFERENCES `loja_peruca`.`pedidos_compras` (`id`);
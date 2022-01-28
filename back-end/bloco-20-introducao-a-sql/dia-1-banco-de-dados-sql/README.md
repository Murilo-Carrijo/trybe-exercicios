Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila , que já deve estar instalado, caso você tenha feito a instalação do MySql Workbench de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila e siga as instruções listadas. Com esse banco disponível na sua instalação do Workbench , sua missão agora é tentar finalizar os exercícios a seguir!
Exercício 1 : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench .

Resposta: Clicando com o botão direito na tabela e selecionar a opção "Select Rows". 

Exercício 2 : Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench .

Resposta: Clcicando com o botão direinto na tabela e selecionando a opção "Create Table".

Exercício 3 : Feito isso, crie uma tabela com as seguintes restrições:
Nome da tabela: Filme
Colunas:
FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
Descricao - não permite nulos, tipo texto (varchar(100));
AnoLancamento - não permite nulos, tipo int;
Nota - permite nulos, tipo int;

Resposta: O comando para criar essa tabela seria

CREATE TABLE Filme (
filmeId INT NOT NULL AUTO_INCREMENT,
descricao VARCHAR(100) NOT NULL,
anoLancamento INT NOT NULL,
nota INT NULL,
PRIMARY KEY(`filmeId`));

Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.

Resposta: Ela faz referência a tabela country

a tabela city possui o seguinte DDL:
CREATE TABLE `city` (
  `city_id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `city` varchar(50) NOT NULL,
  `country_id` smallint unsigned NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`city_id`),
  KEY `idx_fk_country_id` (`country_id`),
  CONSTRAINT `fk_city_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`country_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=601 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?

Resposta: Relacionamento N-1

Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?

Resposta: 1-N

Exercício 7 : Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

A tabela address tem relação N-1 com a tabela city;
A tabela customer tem relação N-1 com a tabela store;
A tabela film tem relação N-1 com a tabela language;

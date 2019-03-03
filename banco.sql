CREATE DATABASE escola CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'sistema'@'localhost' IDENTIFIED BY 'arcoiris';
GRANT ALL PRIVILEGES ON escola.* TO 'sistema'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE TB_TURMA (
	TUR_ID int(5) not null auto_increment primary key,
	TUR_ANO int(4) not null,
    TUR_SERIE int(2) not null,   -- 11 é primeiro ano do fundamental, 19 é Nono ano do fundamental e 22 é segundo ano do médio 
    TUR_LETRA varchar(1) not null
);
CREATE TABLE TB_USUARIO (
	USR_ID int(5) not null auto_increment primary key,
	USR_EMAIL varchar(100) not null,
	USR_SENHA varchar(30) not null,
    USR_NOME varchar(100) not null,
	USR_CPF int(14) not null, -- caso o responsável seja uma pessoa jurídica como um orfanato 
    USR_REDES varchar(100) not null,
    USR_TELEFONE int(11) not null,
	USR_CLASSIFICACAO int(1) not null, -- 1 secretaria, 2 professor, 3 responsável 
	USR_NIVEL int(1) not null -- usado apenas para secretaria 
);
CREATE TABLE TB_ALUNO (
	ALN_ID int(5) not null auto_increment primary key,
	ALN_NOME varchar(100) not null,
	USR_ID int(5) not null,
    TUR_ID int(5) not null,
    ALN_NUMERO int(2) not null,
    ALN_EMAIL varchar(150) not null,
    ALN_TELEFONE int(11),
	FOREIGN KEY (USR_ID) REFERENCES TB_USUARIO(USR_ID),
	FOREIGN KEY (TUR_ID) REFERENCES TB_TURMA(TUR_ID)	
);
CREATE TABLE TB_DISCIPLINA (
	DIS_ID int(5) not null auto_increment primary key,
    DIS_NOME varchar(40) not null
);
CREATE TABLE TB_SERIE (
	SER_ID int(2) not null primary key,
    SER_DESCRICAO varchar(40) not null
);
CREATE TABLE TB_NOTAS (
	TUR_ID int(5) not null,
	ALN_ID int(5) not null,
	USR_ID int(5) not null,
	DIS_ID int(5) not null,
	NTA_BIMESTRE int(1) not null,
	NTA_ATIVIDADE int(2) not null,
	NTA_PESO int(2) not null,
    NTA_AVALIAÇÃO float(5,2) not null,
	FOREIGN KEY (TUR_ID) REFERENCES TB_TURMA(TUR_ID),	
	FOREIGN KEY (ALN_ID) REFERENCES TB_ALUNO(ALN_ID),	
	FOREIGN KEY (USR_ID) REFERENCES TB_USUARIO(USR_ID),	
	FOREIGN KEY (DIS_ID) REFERENCES TB_DISCIPLINA(DIS_ID),
	PRIMARY KEY(TUR_ID,ALN_ID,USR_ID,DIS_ID,NTA_BIMESTRE,NTA_ATIVIDADE)
);

Insert into TB_TURMA(TUR_ANO, TUR_SERIE, TUR_LETRA) values (2019,01,’A’);
Insert into TB_TURMA(TUR_ANO, TUR_SERIE, TUR_LETRA) values (2019,11,’A’);
Insert into TB_TURMA(TUR_ANO, TUR_SERIE, TUR_LETRA) values (2019,17,’A’);
Insert into TB_TURMA(TUR_ANO, TUR_SERIE, TUR_LETRA) values (2019,21,’A’);
Insert into TB_TURMA(TUR_ANO, TUR_SERIE, TUR_LETRA) values (2019,23,’A’);
-- 1 secretaria, 2 professor, 3 responsável
Insert into TB_USUARIO( USR_EMAIL, --USR_ID 1 
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'supervisor@salvum',
                    '123Mudei',
                    'Supervisor',
                    74328938886,
                    ' ',
                    11952189891,
                    9,
                    9);
-- Secretaria
Insert into TB_USUARIO( USR_EMAIL,  --USR_ID 2
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'funcionario1@escola.com.br',
                    '123Mudar',
                    'Bertoldo Brecha',
                    01913379868,
                    ' ',
                    11952189891,
                    1,
                    0);
Insert into TB_USUARIO( USR_EMAIL,  --USR_ID 3
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'funcionario2@escola.com.br',
                    '123Mudar',
                    'Patropi',
                    31122272804,
                    ' ',
                    11952189891,
                    1,
                    1);
Insert into TB_USUARIO( USR_EMAIL,  --USR_ID 4
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'funcionario3@escola.com.br',
                    '123Mudar',
                    'Dolores Joana Umbridge',
                    18934163801,
                    ' ',
                    11952189891,
                    1,
                    3);
-- Professores
Insert into TB_USUARIO( USR_EMAIL,  --USR_ID 5
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'professorahelena@escola.com.br',
                    '123Mudar',
                    'Helena Fernandes',
                    12859413812,
                    ' ',
                    11952189891,
                    2,
                    0);
Insert into TB_USUARIO( USR_EMAIL,  --USR_ID 6
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'professorraimundo@escola.com.br',
                    '123Mudar',
                    'Raimundo Nonato',
                    26673678801,
                    ' ',
                    11952189891,
                    2,
                    0);
Insert into TB_USUARIO( USR_EMAIL,  --USR_ID 7
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'professoraminerva@escola.com.br',
                    '123Mudar',
                    'Minerva McGonagall',
                    26092064880,
                    ' ',
                    11952189891,
                    2,
                    0);
-- Responsaveis
Insert into TB_USUARIO( USR_EMAIL,  --USR_ID 8
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'donalurdinha@bairrolimoeiro.com.br',
                    '123Mudar',
                    'Lurdes Marquês de Araújo',
                    65377272862,
                    ' ',
                    11952189891,
                    3,
                    0);
Insert into TB_USUARIO( USR_EMAIL,  --USR_ID 9
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'donaluisa@bairrolimoeiro.com.br',
                    '123Mudar',
                    'Luisa Moreira de Sousa',
                    26006503859,
                    ' ',
                    11952189891,
                    3,
                    0);
Insert into TB_USUARIO( USR_EMAIL,  --USR_ID 10
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'donacebola@bairrolimoeiro.com.br',
                    '123Mudar',
                    'Maria Cebolácia Carneiro Menezes da Silva',
                    29858687850,
                    ' ',
                    11952189891,
                    3,
                    0);
Insert into TB_USUARIO( USR_EMAIL,  --USR_ID 11
                        USR_SENHA, 
                        USR_NOME, 
                        USR_CPF, 
                        USR_REDES, 
                        USR_TELEFONE, 
                        USR_CLASSIFICACAO, 
                        USR_NIVEL)
            values( 'donalili@bairrolimoeiro.com.br',
                    '123Mudar',
                    'Lidia Lima',
                    47264442802,
                    ' ',
                    11952189891,
                    3,
                    0);
-- Alunos
Insert into TB_ALUNO(ALN_NOME, USR_ID, TUR_ID, ALN_NUMERO, ALN_EMAIL, ALN_TELEFONE) 
    values ('Cássio Marques de Araújo', 8, 2, 1, 'cascao@bairrolimoeiro.com.br',11982821515);
Insert into TB_ALUNO(ALN_NOME, USR_ID, TUR_ID, ALN_NUMERO, ALN_EMAIL, ALN_TELEFONE) 
    values ('Mônica Sousa', 9, 2, 4, 'maedosansao@bairrolimoeiro.com.br',11982821515);
Insert into TB_ALUNO(ALN_NOME, USR_ID, TUR_ID, ALN_NUMERO, ALN_EMAIL, ALN_TELEFONE) 
    values ('Cebolácio Menezes da Silva', 10, 2, 2, 'cebolinha@bairrolimoeiro.com.br',11982821515);
Insert into TB_ALUNO(ALN_NOME, USR_ID, TUR_ID, ALN_NUMERO, ALN_EMAIL, ALN_TELEFONE) 
    values ('Magali Sales', 11, 2, 3, 'magali@bairrolimoeiro.com.br',11982821515);
Insert into TB_ALUNO(ALN_NOME, USR_ID, TUR_ID, ALN_NUMERO, ALN_EMAIL, ALN_TELEFONE) 
    values ('Maria Cebolácia Menezes da Silva Filha', 10, 1, 1, 'mariacebola@bairrolimoeiro.com.br',11982821515);
-- Disciplinas
Insert into TB_DISCIPLINA(DIS_NOME) values ('Português');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Matemática');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Geografria');
Insert into TB_DISCIPLINA(DIS_NOME) values ('História');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Ciências');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Estudos Sociais');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Fisica');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Quimica');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Educação Fisica');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Informática');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Inglês');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Espanhol');
Insert into TB_DISCIPLINA(DIS_NOME) values ('Educação Artistica');

Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (10, 'Maternal');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (11, '1º Série - Fundamental');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (12, '2º Série - Fundamental');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (13, '3º Série - Fundamental');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (14, '4º Série - Fundamental');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (15, '5º Série - Fundamental');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (16, '6º Série - Fundamental');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (17, '7º Série - Fundamental');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (18, '8º Série - Fundamental');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (19, '9º Série - Fundamental');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (21, '1º Série - Médio');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (22, '2º Série - Médio');
Insert into TB_SERIE(SER_ID, SER_DESCRICAO) values (23, '3º Série - Médio');

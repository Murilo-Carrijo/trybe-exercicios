# Instalando o Jest

---

### 1º Passo

* É preciso ter o pacote npm instalando para poder seguir com a instalação do Jest.

* verifique se o pacote npm está instalando:

```bash
npm -v
```

---

### 2º Passo

* criar e acessar a pasta do projeto

```bash
mkdir new-project && cd new-project
```

---

### 3º Passo

* Criar o arquivo package.json, esse é um arquivo de configuração com tudo o que é necessário para rodar esse projeto

* Esse arquivo é responsável por armazenar informações importantes do projeto, como:
- A versão do Node e do npm utilizadas;
- A url do repositório;
- A versão na qual o seu projeto se encontra;
- Dependências de produção e desenvolvimento

* Para criar o arquivo basta rodar o comando abaixo:

```bash
npm init -y
```

---

### 4º Passo

* Abra o seu VsCode:

```bash
code .
```

* Abra o arquivo package.json e altere o valor atribuído a chave test para Jest:

```
"scripts": {
"test": "jest"
},
```

* Salve a alteração.

### 5º Passo

* Volte ao terminal;

* Verifique se você ainda está na pasta do projeto:

```bash
pwd
```

* Execute o comando abaixo para instalar o Jest:
- como os testes são utilizados somente no desenvolvimento do projeto, a instalação será feita como dependência de desenvolvimento. Por esse motivo o comando possui "--save-dev".

```bash
npm install --save-dev jest
```

---

### Seguindo esses passos a biblioteca estará instalada!

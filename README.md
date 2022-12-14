<h1 align="center">BLOG'S API 💻</h1>

## Descrição
Blog's API é um API Rest desenvolvida com uma arquitetura em camadas MSC (Model-Service-Controller), usando Sequilize ORM para mapear e manipular o banco de dados. Trata-se de um sistema para gerenciar um blog, fazendo o gerenciamento de usuários, posters e categorias. A API conta ainda com sistema de autenticação e criptografia de senha. A aplicação foi desenvolvida em agosto de 2022, durante o Modulo de Back-End da [Trybe](https://www.betrybe.com/).

### Esquema das tabelas
![image](./images/der.png)

## Tecnologias
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

O projeto foi desenvolvido em uma arquitetura em camadas **MSC** (Model-Service-Controller), usa ORM, em específico o framework **Sequelize**, responsável pela interação direta com banco de dados, consultas e manipulações. Sendo construída com o framework **Express** para estruturar endpoints e tratar erros. Usando os princípios dos **REST** para garantir qualidade e padrão do código, além de padronizar o formato que os dados seriam recebidos e retornados.

A API conta com camadas de segurança. Isso inclui o gerenciamento de token feito por meio da lib **jsonwebtoken** (JWT), que gera e valida os tokens usados. As senhas dos usuários são salvas de forma criptografada no banco de dados, isso é feito pela lib **bcrypt**, que criptografa a senha dos usuários e faz a validação, assim é nem mesmos quem possua acesso direto ao banco de dados conseguira ter acesso às senhas reais dos usuários.

## Desenvolvimento

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

Para assegurar um ambiente isolado e seguro para o desenvolvimento e dos testes, foi usado o **Docker**. Os códigos foram escritas na ferramenta da Microsoft, **Visual Studio Code**. Durante a criação o **Nodemon** foi utilizado para rodar a execução, essa ferramenta tornou o desenvolvimento mais dinâmico, o monitoramento do comportamento da API foi feito com o **Insomnia**.

## Utilização

<details>
  <summary><strong>💻 Localmente</strong></summary>

- Para rodar a aplicação, obrigatoriamente você deve ter o `node` instalado em seu computador.
- É necessário ter o MySQL sendo executado
- ✨ **Dica:** Caso não possua o banco de dados criado ainda, user o comando `npm run create`
- ✨ **Dica:** Para povoar o banco de dados, execute o comando `npm run seed`

1. Clone o projeto para sua maquina
```
  git clone git@github.com:JeffersonSimplicio/project-blogs-api.git
```

2. Entre no diretório gerado  
```
  cd project-blogs-api
```

3. Instale as dependências
  ```
    npm i
  ```
4. Renomeie o arquivo `.env.example` para `.env` e edite os dados para os da sua maquina
  
5. Inicialize a aplicação
  ```
    npm start
  ```
</details>

<details>
  <summary><strong>🐳 Docker</strong></summary>

- Para rodar a aplicação com docker, é necessário ter instalando em sua maquina `Docker` e `Docker Compose`

- ✨ **Dica:** Caso não possua o banco de dados criado ainda, user o comando `npm run create`
- ✨ **Dica:** Para povoar o banco de dados, execute o comando `npm run seed`

1. Clone o projeto para sua maquina
```
  git clone git@github.com:JeffersonSimplicio/project-blogs-api.git
```

2. Entre no diretório gerado  
```
  cd project-blogs-api
```

3. Suba o ambiente do docker
  ```
    docker-compose up -d --build
  ```

4. Acesse o terminal do contêiner
  ```
    docker exec -it blogs_api bash
  ```

5. Instale as dependências
  ```
    npm i
  ```
6. Renomeie o arquivo `.env.example` para `.env` e edite os dados para os da sua maquina
  
7. Inicialize a aplicação
  ```
    npm start
  ```
</details>


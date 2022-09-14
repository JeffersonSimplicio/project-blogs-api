<h1 align="center">BLOG'S API 💻</h1>

## Descrição
Blog's API é um API Rest desenvolvida com uma arquitetura em camadas MSC (Model-Service-Controller), usando Sequilize ORM para mapear e manipular o banco de dados. Trata-se de um sistema para gerenciar um blog, fazendo o gerenciamento de usuários, posters e categorias. A API conta ainda com sistema de autenticação e criptografia de senha. Foi densenvonvolvida em agosto de 2022, durante o Modulo de Back-End da [Trybe](https://www.betrybe.com/).

### Esquema das tabelas
![image](./images/der.png)

## Tecnologias
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

O projeto foi desenvolvido em uma arquitetura em camadas **MSC** (Model-Service-Controller), faz uso de ORM, em especifico o framework **Sequelize**, responsável pela interação direta com banco de dados, consultas e manipulações. Sendo construída com o framework **Express** para estruturar endpoints e tratar erros. Usando os princípios dos **REST** para garantir qualidade e padrão do código, além de padronizar o formato que os dados seriam recebidos e retornados.

A API conta com camadas de segurança. Isso inclui o gerenciamento de token que é feito por meio da lib **jsonwebtoken** (JWT), que gera e valida os tokens usados. As senhas dos usuários são salvas de forma criptografada no banco de dados, isso é feito pela lib **bcrypt**, que que criptografa a senha dos usuários e faz a validação, assim é nem mesmos quem possua acesso direto ao banco de dados conseguira ter acesso as senhas reais dos usuários.

## Desenvolvimento

## Utilização

### Docker
  - WIP...
<!-- <details>
  <summary>Clique para expandir!</summary>
</details> -->

### Localmente
<details>
  <summary>Clique para expandir!</summary>

- Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
- É necessário ter o MySQL sendo executado
- Caso não possua o banco de dados criado ainda, user o comando `npm run create`
- ✨ **Dica:** Para povoar o banco de dados, execute o comando `npm run seed`

1. Clone o projeto e entre no diretório
  ```
    git clone git@github.com:JeffersonSimplicio/project-blogs-api.git
    cd project-blogs-api
  ```
2. Instale as dependências
  ```
    npm i
  ```
3. Renomeie o arquivo `.env.example` para `.env` e edite os dados para os da sua maquina
  
4. Inicie a aplicação
  ```
    npm start
  ```
</details>
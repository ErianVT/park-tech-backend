# Projeto ParkTech - Back-end

## Visão Geral

Este repositório contém o **Back-end** do sistema ParkTech, uma solução completa para gerenciamento de estacionamentos. Ele é responsável por toda a lógica de negócios, persistência de dados e exposição de uma API RESTful para o front-end e outras possíveis integrações.

Desenvolvido com foco em robustez, segurança e escalabilidade, o back-end do ParkTech gerencia as informações cruciais do estacionamento, desde o cadastro de usuários e veículos até o controle de entradas, saídas e precificação.

## Funcionalidades

O back-end do ParkTech oferece as seguintes funcionalidades principais através de sua API:

*   **Autenticação e Autorização:** Gerenciamento de usuários, login, registro e controle de acesso baseado em perfis (Admin, Operador).
*   **Gerenciamento de Usuários:** CRUD (Criar, Ler, Atualizar, Deletar) de usuários do sistema.
*   **Gerenciamento de Clientes:** Cadastro e manutenção de informações de clientes.
*   **Gerenciamento de Veículos:** Registro e controle de veículos associados a clientes.
*   **Gerenciamento de Preços:** Definição e atualização de configurações de preços por período.
*   **Registro de Estacionamento:** Controle de entrada e saída de veículos, cálculo de tempo e valor a pagar.
*   **Relatórios:** Geração de dados para acompanhamento e análise do estacionamento.

## Tecnologias Utilizadas

O back-end do ParkTech foi construído com as seguintes tecnologias e bibliotecas:

*   **Node.js:** Ambiente de execução JavaScript assíncrono e orientado a eventos.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e escalabilidade do código.
*   **Express.js:** Framework web rápido, flexível e minimalista para Node.js, utilizado para construir a API RESTful.
*   **Prisma ORM:** ORM (Object-Relational Mapper) moderno e de próxima geração, que facilita a interação com o banco de dados de forma segura e eficiente.
*   **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional robusto e de código aberto.
*   **bcrypt:** Biblioteca para hash de senhas, garantindo a segurança das credenciais dos usuários.
*   **jsonwebtoken:** Implementação de JSON Web Tokens (JWT) para autenticação e autorização baseada em tokens.
*   **Zod:** Biblioteca de validação de esquemas TypeScript-first, utilizada para garantir a integridade dos dados de entrada.
*   **dotenv:** Módulo para carregar variáveis de ambiente de um arquivo `.env`.
*   **cors:** Middleware para Express.js que habilita o Cross-Origin Resource Sharing (CORS).

## Estrutura do Banco de Dados

O banco de dados é modelado utilizando Prisma ORM, com as seguintes entidades principais:

*   **User:** Gerencia os usuários do sistema, incluindo autenticação e perfis de acesso (Admin, Operador).
*   **Client:** Informações dos clientes do estacionamento.
*   **Vehicle:** Detalhes dos veículos estacionados, associados a clientes.
*   **PriceConfig:** Configurações de preços para diferentes períodos de estacionamento.
*   **Entry:** Registros de entrada de veículos.
*   **Exit:** Registros de saída de veículos, com cálculo de duração e valor.
*   **ParkingRecord:** Registro consolidado de estacionamento.

## Rotas da API (Endpoints)

A API do ParkTech expõe os seguintes grupos de rotas principais:

| Categoria           | Rotas Exemplo                                   | Descrição                                                              |
| :------------------ | :---------------------------------------------- | :--------------------------------------------------------------------- |
| **Autenticação**    | `POST /auth/login`                              | Realiza o login do usuário e retorna um token JWT.                     |
|                     | `POST /auth/register`                           | Registra um novo usuário no sistema.                                   |
| **Usuários**        | `GET /users`                                    | Lista todos os usuários (requer autenticação e autorização).           |
|                     | `GET /users/:id`                                | Obtém detalhes de um usuário específico.                               |
|                     | `PUT /users/:id`                                | Atualiza informações de um usuário.                                    |
|                     | `DELETE /users/:id`                             | Remove um usuário.                                                     |
| **Clientes**        | `GET /clients`                                  | Lista todos os clientes.                                               |
|                     | `POST /clients`                                 | Cria um novo cliente.                                                  |
| **Veículos**        | `GET /vehicles`                                 | Lista todos os veículos.                                               |
|                     | `POST /vehicles`                                | Registra um novo veículo.                                              |
| **Preços**          | `GET /price-configs`                            | Lista as configurações de preço.                                       |
|                     | `POST /price-configs`                           | Cria uma nova configuração de preço.                                   |
| **Estacionamento**  | `POST /parking/entry`                           | Registra a entrada de um veículo.                                      |
|                     | `POST /parking/exit`                            | Registra a saída de um veículo e calcula o valor a pagar.              |

*(Esta é uma lista simplificada. Para detalhes completos, consulte a documentação da API ou o código-fonte.)*

## Como Rodar o Projeto Localmente

Para configurar e executar o back-end do ParkTech em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/ErianVT/park-tech-backend.git
    cd park-tech-backend
    ```

2.  **Instale as dependências:**

    ```bash
    pnpm install
    # ou npm install
    # ou yarn install
    ```

3.  **Configure o banco de dados:**

    Certifique-se de ter uma instância do PostgreSQL rodando. Crie um arquivo `.env` na raiz do projeto com a string de conexão do seu banco de dados, por exemplo:

    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/parktech_db"
    JWT_SECRET="sua_chave_secreta_jwt"
    ```

4.  **Execute as migrações do Prisma:**

    ```bash
    pnpm prisma migrate dev --name init
    ```

5.  **Inicie o servidor:**

    ```bash
    pnpm dev
    # ou npm run dev
    # ou yarn dev
    ```

    O servidor estará rodando em `http://localhost:3000` (ou a porta configurada).

## Deploy e Produção

### Detalhes da Infraestrutura

*   **Hospedagem:** EasyPanel via Hostinger.
*   **Banco de Dados:** PostgreSQL (Postgres-db).
*   **Ambiente:** Dockerizado para garantir consistência entre desenvolvimento e produção.

## Agradecimentos

Gostaria de expressar minha gratidão ao meu curso de programação pelo apoio e conhecimento fornecidos durante o desenvolvimento deste projeto. Foi uma jornada de aprendizado valiosa e desafiadora.

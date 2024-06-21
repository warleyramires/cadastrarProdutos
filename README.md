# Projeto de Cadastro de Produtos

Este projeto é uma aplicação simples de cadastro de produtos desenvolvida com Java 17 (Spring Boot) para o backend e React para o frontend.

## Funcionalidades

- Cadastro de produtos com nome, descrição, valor e disponibilidade para venda.
- Listagem de produtos ordenados pelo valor.
- Interface intuitiva para adicionar novos produtos e visualizar os existentes.

## Tecnologias Utilizadas

### Backend (Java 17 + Spring Boot)

- Spring Boot 2.6.4
- Java Development Kit (JDK) 17
- Maven para gerenciamento de dependências

### Frontend (React)

- React
- Axios para requisições HTTP
- Bootstrap para estilização

### Banco de Dados

- H2 Database (em memória para desenvolvimento)

## Pré-requisitos

- JDK 17 instalado
- Node.js e npm instalados
- IDE de sua escolha (IntelliJ IDEA, VS Code, etc.)
- Maven para o backend (pode ser embutido no IntelliJ IDEA)

## Configuração e Execução

### Backend (Spring Boot)

1. Clone o repositório:

   ```bash
   git clone https://github.com/warleyramires/cadastroProduto
   cd cadastroProdutos
   ```

2. Abra o projeto na sua IDE.

3. Configure o JDK 17 como JDK padrão do projeto.

4. Execute a aplicação Spring Boot. Isso pode ser feito via IDE ou usando Maven:

   ```bash
   mvn spring-boot:run
   ```

5. O backend estará acessível em `http://localhost:8080`.

### Frontend (React)

1. No diretório `frontend` do projeto:

   ```bash
   cd cadastroprodutofront
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

## Uso

- Acesse `http://localhost:3000` para visualizar a aplicação.
- Use o formulário na página para cadastrar novos produtos.
- A listagem de produtos será atualizada automaticamente após o cadastro de um novo produto.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

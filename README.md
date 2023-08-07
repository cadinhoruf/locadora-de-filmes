# API de Gerenciamento de Coleção de Filmes para Plataforma de Streaming

Este projeto consiste em uma API desenvolvida para ser integrada a uma plataforma de streaming, visando o gerenciamento eficiente da coleção de filmes disponíveis. Através dessa API, é possível realizar operações como adicionar, atualizar, consultar e remover filmes da plataforma.

## Funcionalidades Principais

A API de Gerenciamento de Coleção de Filmes oferece as seguintes funcionalidades principais:

1. **Adicionar Filme**: Adicione novos filmes à coleção, informando detalhes como título, diretor, ano de lançamento, gênero e sinopse.

2. **Atualizar Filme**: Atualize informações de filmes existentes, permitindo a modificação de campos como título, diretor, gênero e sinopse.

3. **Consultar Filme**: Consulte informações detalhadas de um filme específico através do seu ID, ou faça consultas com base em critérios como gênero, diretor ou ano de lançamento.

4. **Listar Filmes**: Obtenha uma lista paginada com todos os filmes presentes na coleção, facilitando a navegação pelos títulos disponíveis.

5. **Remover Filme**: Remova filmes da coleção utilizando o ID correspondente, garantindo um processo de remoção simplificado.

## Configuração do Projeto

Para configurar e executar o projeto em seu ambiente local, siga as instruções abaixo:

1. **Clonar o Repositório**: Clone este repositório em sua máquina utilizando o comando:
   **git clone https://github.com/seu-usuario/nome-do-repositorio.git**

2. **Instalar Dependências**: Navegue até o diretório do projeto e instale as dependências usando o gerenciador de pacotes de sua escolha, como npm ou yarn:
   **npm install**

3. **Configurar Variáveis de Ambiente**: Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente necessárias, como configurações de banco de dados e chaves de API.

4. **Executar o Servidor**: Inicie o servidor da API com o seguinte comando:
   **npm start**

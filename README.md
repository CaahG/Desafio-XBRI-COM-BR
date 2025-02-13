# Desafio teste de API de Usuários na XBRI-COM-BR 

# 📌 Testes Automatizados para API de Usuários

Este documento descreve os testes automatizados para a API de usuários, utilizando **Jest** e **Axios**. Os testes verificam a funcionalidade dos endpoints de criação, listagem, busca, atualização e exclusão de usuários.

## 📂 Tecnologias Utilizadas
- **Jest** para a execução dos testes 🧪
- **Axios** para realizar as requisições HTTP 🔗
- **Visual Studio Code** como ambiente de desenvolvimento 💻
- **GitHub** para versionamento do código 🌍

## 📁 Estrutura do Projeto
```
📂 teste-final-xbri-com-br
├── 📂 .github/
│   ├── 📂 workflows
│   │   ├── run_test.yaml
│   ├── teste
│   │   ├── api.test.js
├── 📂 utils
│   ├── createUser.js
├── package.json
└── README.md
```


## 🔧 Implementação dos Testes
Os testes foram desenvolvidos no arquivo `api.test.js`, localizado na pasta `teste`. A função auxiliar `createUser` foi utilizada para facilitar a criação de usuários durante os testes.

## Execução dos Testes 👩🏻‍💻 🖊
Os testes podem ser executados diretamente pelo Github Actions. Dentro da pasta `.github/workflows` temos o arquivo `run_test.yaml`, utilizado para configurar um fluxo de integração continua para os nossos testes com Github Actions.
Esse fluxo define os passos para se instalar o projeto e executar os testes.
Para executarmos o teste, podemos ir na Aba `Actions` do nosso repositorio. Clicar no workflow `Run tests` no canto esquerdo da página. Depois clicar em `Run Workflow` no canto superior direito da página, e finalmente clicar no botão `Run workflow`.
Após seguir esses passos o proprio github irá começar a instalação e execução dos testes.

## Execução dos testes localmente✨
Para executar os testes, basta clonar o repositorio. Executar o comando `npm install`, e executar o comando `npm run mock` em um terminal, e em outro terminal executar o comando `npm run test` para execução dos testes.

## 📝 Casos de Teste Implementados

### 1️⃣ Criar um Usuário
📌 **Descrição**: Testa se um usuário pode ser criado corretamente.
- ✅ Requisição **POST /users** com dados do usuário.
- ✅ Verificação do código de resposta **201**.
- ✅ Validação se a resposta contém um **ID** gerado.

### 2️⃣ Listar Usuários
📌 **Descrição**: Testa se a API retorna corretamente a lista de usuários.
- ✅ Requisição **GET /users**.
- ✅ Verificação do código de resposta **200**.
- ✅ Validação se a resposta é um **array**.

### 3️⃣ Buscar um Usuário por ID
📌 **Descrição**: Testa se um usuário pode ser consultado pelo seu ID.
- ✅ Criar um usuário e obter seu **ID**.
- ✅ Requisição **GET /users/{id}**.
- ✅ Validação do código de resposta **200** e ID correto.

### 4️⃣ Atualizar um Usuário
📌 **Descrição**: Testa se um usuário pode ser atualizado corretamente.
- ✅ Criar um usuário e obter seu **ID**.
- ✅ Requisição **PATCH /users/{id}** com novos dados.
- ✅ Verificação do código de resposta **200**.
- ✅ Validação se o nome do usuário foi atualizado corretamente.

### 5️⃣ Deletar um Usuário
📌 **Descrição**: Testa se um usuário pode ser removido corretamente.
- ✅ Criar um usuário e obter seu **ID**.
- ✅ Requisição **DELETE /users/{id}**.
- ✅ Verificação do código de resposta **200**.
- ✅ Tentativa de buscar o usuário deletado deve retornar **404**.


## 📊 Resultados
✅ Todos os testes passaram com sucesso, garantindo que os principais fluxos da API de usuários estão funcionando corretamente. 





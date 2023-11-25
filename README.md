# API Tasks 📋

Bem-vindo à API Tasks! Esta API foi desenvolvida para gerenciar tarefas de forma simples e eficiente.

## Funcionalidades Principais

### 1. Criar Tarefa ✨

- **Endpoint:** `POST /api/tasks`
- **Descrição:** Cria uma nova tarefa com base nos dados fornecidos no corpo da solicitação.

### 2. Listar Tarefas 📝

- **Endpoint:** `GET /api/tasks`
- **Descrição:** Lista todas as tarefas cadastradas no sistema.

### 3. Detalhes da Tarefa 📄

- **Endpoint:** `GET /api/tasks/:id`
- **Descrição:** Recupera os detalhes de uma tarefa específica com base no ID fornecido.

### 4. Atualizar Tarefa 🔄

- **Endpoint:** `PUT /api/tasks/:id`
- **Descrição:** Atualiza os detalhes de uma tarefa específica com base no ID fornecido.

### 5. Excluir Tarefa ❌

- **Endpoint:** `DELETE /api/tasks/:id`
- **Descrição:** Exclui uma tarefa específica com base no ID fornecido.

### 6. Alternar Status da Tarefa ⚙️

- **Endpoint:** `PUT /api/tasks/:id/toggle-status`
- **Descrição:** Altera o status de uma tarefa específica entre "pending" e "completed".

## Como Usar 🚀

Siga as etapas abaixo para configurar e executar a API Tasks localmente:

**Clone o Repositório:**

```bash
  git clone https://github.com/seu-usuario/api-tasks.git
  cd api-tasks
```
**Instale as Dependências:**

```bash
  npm install
  # ou
  yarn
```
**Configure as Variáveis de Ambiente:**

Renomeie o arquivo `.env.example` para `.env`.
Edite o arquivo .env e configure as variáveis conforme necessário.

**Execute o Servidor em Modo de Desenvolvimento:**

```bash
  npm run start:dev
  # ou
  yarn start:dev
```
O servidor será iniciado em http://localhost:3333 por padrão, .

**Executar Build para Produção:**

```bash
  npm run build
  # ou
  yarn build
```
**Executar Testes:**

```bash
  npm test
  # ou
  yarn test
```

## Estrutura JSON de uma Tarefa 📊

```json
{
  "id": "3f89ed00-dee6-4ba2-973f-e15f663cbe75",
  "title": "Minha Tarefa",
  "status": "pending",
  "created_at": "2023-11-08T12:06:01.929Z",
  "updated_at": null
}
```

## Autor 👨‍💻

- **Tiago Mota**

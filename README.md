## Como rodar o Backend

### Pré-requisitos
- Node.js instalado
- MongoDB rodando localmente (`mongodb://localhost:27017`)

### Passos

```bash
cd backend
npm install
npm run dev 
# ou
npm start 
```

A API estará disponível em `http://localhost:3000`.

### Rotas disponíveis

| Método | Rota              | Descrição           |
|--------|-------------------|---------------------|
| GET    | /api/livros       | Listar todos        |
| GET    | /api/livros/:id   | Buscar por ID       |
| POST   | /api/livros       | Criar novo livro    |
| PUT    | /api/livros/:id   | Atualizar livro     |
| DELETE | /api/livros/:id   | Remover livro       |

#  NotesApp - Frontend React + JWT
---
## 🟣 Descrição

O **NotesApp** é uma aplicação fullstack desenvolvida com **React** e **Node.js** que permite ao usuário criar, visualizar, editar e excluir notas de forma simples e segura.  

O projeto integra frontend e backend com autenticação **JWT**, garantindo acesso restrito às rotas protegidas.

A interface foi desenvolvida com **Tailwind CSS** e componentes **shadcn/ui**, inspirada em designs modernos como Notion e Vercel Dashboard.

---
## 🟣 Funcionalidades

- ✅ Cadastro e autenticação de usuários com JWT  
- ✅ Login e logout com controle de sessão  
- ✅ CRUD completo de notas (criar, visualizar, editar e excluir)  
- ✅ Busca de notas por título  
- ✅ Feedback visual com toasts (sucesso e erro)  
- ✅ Indicadores de carregamento (loading states)  
- ✅ Proteção de rotas para usuários autenticados  
- ✅ Redirecionamento automático em token expirado  
- ✅ Página 404 personalizada  
- ✅ Layout responsivo para mobile, tablet e desktop 

---

## 🟣 Tecnologias Utilizadas

**Frontend**
- **React 18** com TypeScript
- **React Router DOM** para navegação
- **Axios** para requisições HTTP
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes
- **Lucide React** para ícones
- **Sonner** para notificações toast
- **Context API** para gerenciamento de autenticação

---

## 🟣 Estrutura de Pastas

Abaixo está a organização dos arquivos e diretórios principais do projeto:


```
mini-projeto-fullstack-parte-iii/
├── node_modules
├── public 
├── src/
├── api/
│   └── api.ts              # Configuração Axios + endpoints
├── components/
│   ├── ProtectedRoute.tsx  # HOC para rotas autenticadas
│   ├── LoadingSpinner.tsx  # Componente de loading
│   └── ui/                 # Componentes shadcn
├── context/
│   └── AuthContext.tsx     # Context de autenticação
├── hooks/
|   ├── use-mobile.tsx
|   ├── use-toast.ts
|── lib/
|   ├── utils.ts
├── pages/
│   ├── Index.tsx           # Página inicial (landing)
│   ├── Register.tsx        # Cadastro de usuário
│   ├── Login.tsx           # Login
│   ├── Dashboard.tsx       # Área logada (CRUD notas)
│   └── NotFound.tsx        # 404
├── App.tsx                 # Rotas principais
├── App.css
├── index.css
└── main.tsx     
├── .env
├── .env.mongodb
├── .env.postgresql     
├── .gitignore
├── index.html
├── package-lock.json
└── package.json
```

---
## 🟣 Instruções de Instalação e Uso

Siga os passos abaixo para executar o projeto localmente e conectar ao backend correto:

### 1. Clonar o Repositório

Clone este repositório em sua máquina local utilizando o Git:

```bash
git clone https://github.com/Nathalia1234/mini-projeto-fullstack-parte-iii.git
```

Em seguida, acesse a pasta do projeto:
```bash
cd mini-projeto-fullstack-parte-iii
```


### 2. Instalar Dependências

Instale as dependências necessárias com:

```bash
npm install
```

### 3. Configurar o Ambiente

O projeto possui três arquivos `.env` prontos, um para cada tipo de ambiente:

| Ambiente             | Arquivo           | Descrição                             |
| -------------------- | ----------------- | ------------------------------------- |
| Local (teste rápido) | `.env`      | Usa backend local em `localhost:3000` |
| Produção MongoDB     | `.env.mongodb`    | Aponta para o backend com MongoDB     |
| Produção PostgreSQL  | `.env.postgresql` | Aponta para o backend com PostgreSQL  |


Para alternar o ambiente, renomeie o arquivo correspondente para `.env` antes de executar o projeto.

Exemplo: 
```bash
cp .env.mongodb .env
```

### 4. Executar o Frontend

Após definir o `.env` desejado, execute o comando: 

```bash
npm run dev
```
O servidor local do Vite iniciará na porta padrão (geralmente 5173).

Acesse o projeto em:

```bash
http://localhost:5173
```

### 5. Executar o Backend (opcional)

Se desejar testar também o backend localmente:

* **MongoDB:**
```bash
cd ../mini-projeto-fullstack-parte2
npm install
npm start
```

* **PostgreSQL:**
```bash
cd ../backend-express-postgresql
npm install
npm run dev:local
```
> Certifique-se de que a API está rodando em http://localhost:3000.

### 6. Testar as Funcionalidades

No navegador, execute o fluxo completo:

1. Cadastrar um novo usuário
2. Fazer login com o usuário cadastrado
3. Criar Nota
4. Editar Nota
5. Buscar Nota pelo Título
6. Excluir Nota
7. Fazer Logout
8. Testar feedbacks visuais (toasts e loadings)


### 7. Executar em Produção

Após o deploy no **Vercel**, as versões estão disponíveis nos seguintes links:

- **Frontend + MongoDB:** [https://app-notes.nathaliaohana.dev/](https://app-notes.nathaliaohana.dev/)

- **Frontend + PostgreSQL:** [https://app-notes-pg.nathaliaohana.dev/](https://app-notes-pg.nathaliaohana.dev/)

> Ambos se integram automaticamente com seus respectivos backends hospedados.

### 8. Encerrar o Servidor

Para encerrar o servidor local, utilize ```Ctrl + C``` no terminal.

--- 

## 🟣 Integração com Backend

O frontend consome os endpoints do backend hospedado em produção.  

A aplicação será  integrada com o backend **MongoDB**  e **PostgreSQL**:

- API com PostgreSQL: https://notes-pg.nathaliaohana.dev/

- API com MongoDB: https://notes.nathaliaohana.dev

O frontend espera que o backend forneça os seguintes endpoints:

### Autenticação do Usuário

| Endpoint / Rota | Método | Descrição | Autenticação |
|:--:|:--|:--|:--:|
| `/register` | POST | Cadastra novo usuário | ❌ |
| `/login` | POST | Realiza login e retorna token JWT | ❌ |

### Notas
| Endpoint  / Rota| Método | Descrição | Autenticação |
|:--:|:--|:--|:--:|
| `/notes` | POST | Cria uma nova nota |    ✅   |
| `/notes` | GET | Lista todas as notas do usuário autenticado | ✅ |
| `/notes?title=...` | GET | Filtra notas por título	 | ✅ |
| `/notes/:id` | PUT | Atualiza todos os dados de uma nota existente | ✅ |
| `/notes/:id` | PATCH | Atualiza parcialmente uma nota | ✅ |
| `/notes/:id` | DELETE | Remove uma nota do usuário autenticado | ✅ |

---

## 🟣 Variáveis de Ambiente (.env)

O projeto utiliza arquivos `.env` diferentes para facilitar a alternância entre os backends **MongoDB** e **PostgreSQL**, além do ambiente local de testes.

Cada arquivo define a URL base da API e o tipo de backend ativo.

###  Estrutura de Arquivos de Ambiente

| Arquivo | Finalidade | Exemplo de Configuração |
|----------|-------------|--------------------------|
| `.env` | Ambiente local (teste rápido com backend local) | `VITE_API_URL=http://localhost:3000` |
| `.env.mongodb` | Produção com backend MongoDB | `VITE_API_URL=https://mini-projeto-fullstack-parte2.vercel.app/` |
| `.env.postgresql` | Produção com backend PostgreSQL | `VITE_API_URL=https://backend-express-postgresql-flame.vercel.app/` |


###  Como Alternar Entre os Ambientes

Para alternar o ambiente antes de executar o projeto, basta **renomear ou copiar** o arquivo desejado para `.env`.

**Exemplo – para usar o backend MongoDB:**
```bash
cp .env.mongodb .env
```

**Exemplo – para usar o backend PostgreSQL:**
```bash
cp .env.postgresql .env
```

**Exemplo – para testar localmente:**
```bash
cp .env.local .env
```

> O Vite lerá automaticamente as variáveis do arquivo .env ativo durante a execução.

---

## 🟣 Segurança

- Token JWT armazenado no **LocalStorage**
- Interceptor Axios adiciona token automaticamente
- Redirecionamento automático para **/login** em caso de erro **401**
- Validação de campos obrigatórios
- Proteção de rotas com `ProtectedRoute`
- Quando o token expira, o usuário é automaticamente redirecionado para a tela de login, exibindo um toast de sessão expirada.


---

## 🟣 Responsividade

A aplicação é totalmente responsiva e adaptável, funciona em:
- 📱 **Mobile** (< 768px)
- 📱 **Tablet** (768px - 1024px)
- 💻 **Desktop** (> 1024px)

---

## 🟣 Vídeo de Demonstração

Vídeo de 3 minutos foi gravado demonstrando:

- Telas funcionando (cadastro, login, área logada);

- Demonstração de integração com backend em ambiente local e de produção;

- Feedbacks de erro, sucesso e logout (toasts).


👉 [Clique aqui para assistir no Google Drive]()

--- 






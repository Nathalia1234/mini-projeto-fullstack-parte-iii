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
├── main.tsx          
└── vite-env.d.ts
├── .env
├── .env.mongodb
├── .env.postgresql     
├── .gitignore
├── index.html
├── package-lock.json
└──  package.json

```

---

## 🟣 Integração com Backend

O frontend consome os endpoints do backend hospedado em produção.  

A aplicação será  integrada com o backend **MongoDB**  e **PostgreSQL**:

- API com PostgreSQL: https://pg-notes.nathaliaohana.dev

- API com MongoDB: https://notes.nathaliaohana.dev

O frontend espera que o backend forneça os seguintes endpoints:

### Autenticação

| Endpoint | Método | Descrição | Auth |
|----------|--------|-----------|------|
| `/register` | POST | Cadastra novo usuário | Não |
| `/login` | POST | Realiza login e retorna token JWT | Não |

### Notas
| Endpoint | Método | Descrição | Auth |
|----------|--------|-----------|------|
| `/notes` | GET | Lista todas as notas do usuário autenticado | Sim |
| `/notes` | POST | Cria uma nova nota | Sim |
| `/notes/:id` | PUT | Atualiza todos os dados de uma nota | Sim |
| `/notes/:id` | DELETE | Remove uma nota do usuário autenticado | Sim |

---

## 🟣 Variáveis de Ambiente (.env)

**.env.local**:
```env
VITE_API_URL=http://localhost:3000
VITE_BACKEND_TYPE=local
```

**.env.mongodb**:

```env
VITE_API_URL=https://mini-projeto-fullstack-parte2.vercel.app/
VITE_BACKEND_TYPE=mongodb
```
**.env.postgresql**:
```env
VITE_API_URL=https://backend-express-postgresql-flame.vercel.app/
VITE_BACKEND_TYPE=postgresql
```

---

## 🟣  Links de Deploy [Em Andamento]

- **Frontend + MongoDB:** [https://frontend-mongodb.vercel.app](https://frontend-mongodb.vercel.app)
- **Frontend + PostgreSQL:** [https://frontend-postgresql.vercel.app](https://frontend-postgresql.vercel.app)


---

## 🟣 Segurança

- Token JWT armazenado no **LocalStorage**
- Interceptor Axios adiciona token automaticamente
- Redirecionamento automático para **/login** em caso de erro **401**
- Validação de campos obrigatórios
- Proteção de rotas com `ProtectedRoute`

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






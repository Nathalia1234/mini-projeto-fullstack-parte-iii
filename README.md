# 🎯 NotesApp - Frontend React + JWT

## 📋 Descrição

Frontend completo em React para o projeto **Mini-Projeto Fullstack – Parte III**, integrado com backend REST API usando autenticação JWT.

## ✨ Funcionalidades

- ✅ **Cadastro de usuários** com validação
- ✅ **Login com JWT** e armazenamento seguro
- ✅ **Dashboard protegido** com autenticação
- ✅ **CRUD completo de notas** (criar, listar, editar, deletar)
- ✅ **Feedback visual** com toasts (sucesso/erro)
- ✅ **Loading states** em todas as requisições
- ✅ **Logout** com limpeza de sessão
- ✅ **Página 404** personalizada
- ✅ **Design responsivo** (mobile, tablet, desktop)
- ✅ **Proteção de rotas** automática
- ✅ **Redirecionamento** para login em token expirado


## 🛠️ Tecnologias

- **React 18** com TypeScript
- **React Router DOM** para navegação
- **Axios** para requisições HTTP
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes
- **Lucide React** para ícones
- **Sonner** para notificações toast
- **Context API** para gerenciamento de autenticação

## 📁 Estrutura do Projeto

```
src/
├── api/
│   └── api.ts              # Configuração Axios + endpoints
├── components/
│   ├── ProtectedRoute.tsx  # HOC para rotas autenticadas
│   ├── LoadingSpinner.tsx  # Componente de loading
│   └── ui/                 # Componentes shadcn
├── context/
│   └── AuthContext.tsx     # Context de autenticação
├── pages/
│   ├── Index.tsx           # Página inicial (landing)
│   ├── Register.tsx        # Cadastro de usuário
│   ├── Login.tsx           # Login
│   ├── Dashboard.tsx       # Área logada (CRUD notas)
│   └── NotFound.tsx        # 404
├── App.tsx                 # Rotas principais
└── main.tsx                # Entry point
```


## 🔗 Integração com Backend

O frontend espera que o backend forneça os seguintes endpoints:

| Endpoint | Método | Descrição | Auth |
|----------|--------|-----------|------|
| `/register` | POST | Cadastro de usuário | Não |
| `/login` | POST | Login (retorna token JWT) | Não |
| `/notes` | GET | Listar todas as notas | Sim |
| `/notes` | POST | Criar nova nota | Sim |
| `/notes/:id` | PUT | Atualizar nota | Sim |
| `/notes/:id` | DELETE | Deletar nota | Sim |

### Formato esperado do token JWT

O backend deve retornar no login:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123",
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
```

O token é enviado automaticamente no header de todas as requisições autenticadas:

```
Authorization: Bearer <token>
```

## 🔒 Segurança

- Token JWT armazenado no **LocalStorage**
- Interceptor Axios adiciona token automaticamente
- Redirecionamento para `/login` em token expirado (401)
- Validação de campos no frontend
- Proteção de rotas com `ProtectedRoute`

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 📱 **Mobile** (< 768px)
- 📱 **Tablet** (768px - 1024px)
- 💻 **Desktop** (> 1024px)

## 🎥 Demo


## 🚢 Deploy no Vercel



## 📚 Bibliotecas Utilizadas

- **axios** - Cliente HTTP
- **react-router-dom** - Roteamento
- **sonner** - Notificações toast
- **lucide-react** - Ícones
- **tailwindcss** - Utility-first CSS
- **@radix-ui** - Componentes acessíveis (via shadcn)





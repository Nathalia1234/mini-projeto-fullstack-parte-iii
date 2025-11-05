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

## 🎨 Design

Interface moderna e minimalista inspirada em:
- **Notion** (simplicidade e organização)
- **Linear** (polish e atenção aos detalhes)
- **Vercel Dashboard** (clean e profissional)

**Características visuais:**
- Paleta de cores suaves (azul/indigo como primária)
- Animações sutis e transições suaves
- Cards com sombras e bordas arredondadas
- Tipografia clara e hierarquia visual
- Sistema de design consistente

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

## 🚀 Como Executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000
```

**Importante:** Altere a URL para o endereço do seu backend (local ou produção).

### 3. Executar em desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:8080`

### 4. Build para produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

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

Para gravar o vídeo de demonstração, siga este roteiro:

1. ✅ Abrir a página inicial
2. ✅ Criar uma nova conta (Register)
3. ✅ Fazer login
4. ✅ Criar uma nota
5. ✅ Editar a nota
6. ✅ Deletar a nota
7. ✅ Fazer logout
8. ✅ Tentar acessar `/dashboard` sem login (deve redirecionar)
9. ✅ Fazer login novamente

## 🚢 Deploy no Vercel

### Via CLI:

```bash
npm install -g vercel
vercel
```

### Via Git (recomendado):

1. Push do código para GitHub
2. Importar no Vercel Dashboard
3. Configurar variável de ambiente `VITE_API_URL`
4. Deploy automático

**Importante:** Lembre-se de configurar a variável `VITE_API_URL` no Vercel apontando para a URL do seu backend em produção.

## 📚 Bibliotecas Utilizadas

- **axios** - Cliente HTTP
- **react-router-dom** - Roteamento
- **sonner** - Notificações toast
- **lucide-react** - Ícones
- **tailwindcss** - Utility-first CSS
- **@radix-ui** - Componentes acessíveis (via shadcn)

## 💡 Próximas Melhorias

- [ ] Dark mode toggle
- [ ] Paginação de notas
- [ ] Busca e filtros
- [ ] Categorias/tags para notas
- [ ] Editor Markdown
- [ ] Compartilhamento de notas
- [ ] PWA (Progressive Web App)

## 📄 Licença

Este projeto é parte do **Mini-Projeto Fullstack – Parte III** para fins educacionais.

---

**Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS**

#  NotesApp - Frontend React + JWT

## 🟣 Descrição

O **NotesApp** é uma aplicação web desenvolvida em **React** que consome uma **API Node.js/Express** com autenticação **JWT**, permitindo ao usuário **criar, visualizar, editar e excluir notas** de forma simples e segura.  

A aplicação foi projetada para se integrar a **dois backends distintos** - um utilizando **MongoDB** e outro **PostgreSQL** - possibilitando testar e comparar o comportamento da mesma interface com diferentes bancos de dados.  

O frontend utiliza **Tailwind CSS** e componentes **shadcn/ui**, oferecendo uma experiência moderna e responsiva inspirada em ferramentas como **Notion** e **Vercel Dashboard**.


---
## 🟣 Funcionalidades

O **NotesApp** oferece uma experiência completa de gerenciamento de notas, com autenticação segura, interface responsiva e integração total com o backend.  

###  Autenticação e Sessão
- Cadastro e login de usuários com **validação de campos**  
- Autenticação via **JWT (JSON Web Token)**  
- Armazenamento seguro do token no **LocalStorage**  
- **Logout** com limpeza automática da sessão  
- **Redirecionamento automático** para login em caso de token expirado  

###  Gerenciamento de Notas
- **CRUD completo** (criar, listar, editar e excluir notas)  
- **Busca de notas por título**  
- Atualização dinâmica da lista de notas após cada ação  
- Feedback visual com **toasts** de sucesso e erro  

###  Interface e Experiência do Usuário
- Layout **responsivo** (mobile, tablet e desktop)  
- Indicadores de **carregamento (loading states)**  
- Página **404 personalizada**  
- Design moderno e minimalista com **Tailwind CSS** e **shadcn/ui**  

###  Integração com Backends
- Compatibilidade com **dois backends distintos**:
  -  **MongoDB** – hospedado em Vercel  
  -  **PostgreSQL** – hospedado em Vercel  
- Alternância de ambientes via arquivos `.env`  
- Consumo automático da API configurada conforme o ambiente ativo

---

## 🟣 Tecnologias Utilizadas

O projeto **NotesApp** foi desenvolvido utilizando um conjunto de tecnologias modernas que garantem **segurança**, **performance** e **organização** do código.

###  Frontend

| Categoria | Tecnologias | Descrição |
|------------|-------------|------------|
| Framework | **React 18 + TypeScript** | Criação de interfaces reativas e tipadas |
| Estilização | **Tailwind CSS** | Estilo responsivo com utilitários CSS |
| Componentes | **shadcn/ui** + **Lucide React** | Componentes acessíveis e ícones modernos |
| Roteamento | **React Router DOM** | Navegação entre páginas e rotas protegidas |
| HTTP Client | **Axios** | Comunicação com a API e interceptação de tokens |
| Estado Global | **Context API** | Gerenciamento de autenticação e sessão |
| Notificações | **Sonner** | Toasts de sucesso, erro e alerta |
| Build Tool | **Vite** | Empacotamento e execução do ambiente local |

---

###  Backend (Integração)

O frontend consome uma **API REST Node.js/Express**, configurada com autenticação **JWT** e compatível com dois bancos de dados:

| Banco de Dados | Descrição |
|----------------|------------|
| **MongoDB (Atlas)** | Utilizado na versão original do backend, com foco em flexibilidade e velocidade |
| **PostgreSQL (Neon)** | Utilizado na versão relacional do backend, com foco em integridade e tipagem forte |

---

###  Hospedagem e Deploy

| Camada | Plataforma | Observação |
|--------|-------------|-------------|
| Frontend | **Vercel** | Deploy automático a partir do GitHub |
| Backend MongoDB | **Vercel** | API hospedada em ambiente serverless |
| Backend PostgreSQL | **Vercel** | API paralela para integração relacional |
| Banco MongoDB | **MongoDB Atlas** | Banco na nuvem gratuito |
| Banco PostgreSQL | **Neon Database** | Banco relacional escalável e gratuito |


---

## 🟣 Estrutura de Pastas

Abaixo está a organização dos principais diretórios e arquivos do projeto **NotesApp (Frontend)**.

```bash
mini-projeto-fullstack-parte-iii/
├── public                 # Arquivos públicos (index.html, ícones, etc.)
├── src/                      # Código-fonte principal
├── api/
│   └── api.ts              # Configuração Axios + endpoints
├── components/                # Componentes reutilizáveis
│   ├── ProtectedRoute.tsx  # HOC para rotas autenticadas
│   ├── LoadingSpinner.tsx  # Componente de loading
│   └── ui/                 # Componentes do shadcn/ui
├── context/              
│   └── AuthContext.tsx     # Context de autenticação
├── hooks/                        # Hooks personalizados
|   ├── use-mobile.tsx
|   ├── use-toast.ts
|── lib/                                # Funções utilitárias e helpers
|   ├── utils.ts
├── pages/                    # Páginas principais do sistema
│   ├── Index.tsx           # Página inicial (landing)
│   ├── Register.tsx        # Cadastro de usuário
│   ├── Login.tsx           # Login
│   ├── Dashboard.tsx       # Área logada (CRUD notas)
│   └── NotFound.tsx        # Página 404
├── App.tsx                 # Rotas principais
├── App.css                 # Estilos globais
├── index.css                # Estilos base do Tailwind
└── main.tsx                  # Ponto de entrada do React
├── .env                          # Arquivo de ambiente ativo
├── .env.mongodb          # Configuração para backend MongoDB
├── .env.postgresql         # Configuração para backend PostgreSQL
├── .gitignore
├── index.html                # HTML base da aplicação
├── package.json               # Dependências e scripts do projeto
├── tsconfig.json             # Configuração do TypeScript
└── vite.config.ts            # Configuração do Vite
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
O servidor local do Vite iniciará na porta padrão (geralmente 5173 ou 8080).

Acesse o projeto em:

```bash
http://localhost:5173 ou http://localhost:8080
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

- **Frontend + MongoDB:** [https://app-notes.nathaliaohana.dev](https://app-notes.nathaliaohana.dev)

Usuário para teste:
  - Email: nathalia.teste@example.com
  - Senha: 123456

- **Frontend + PostgreSQL:** [https://app-notes-pg.nathaliaohana.dev](https://app-notes-pg.nathaliaohana.dev)

> Ambos se integram automaticamente com seus respectivos backends hospedados.

### 8. Encerrar o Servidor

Para encerrar o servidor local, utilize ```Ctrl + C``` no terminal.

--- 

## 🟣 Integração com Backend

O **NotesApp** se integra a dois backends REST distintos, desenvolvidos em **Node.js/Express**, que implementam a mesma estrutura de rotas e lógica de autenticação.  

O frontend identifica automaticamente qual backend utilizar de acordo com o arquivo `.env` ativo - **MongoDB** ou **PostgreSQL** - permitindo alternar entre os ambientes sem modificações no código-fonte.

###  Backends em Produção

| Banco de Dados | URL da API | Hospedagem |
|----------------|-------------|-------------|
| MongoDB | https://notes.nathaliaohana.dev | Vercel |
| PostgreSQL | https://notes-pg.nathaliaohana.dev | Vercel |





### Autenticação

| Endpoint / Rota | Método | Descrição | Autenticação |
|:--:|:--|:--|:--:|
| `/register` | POST | Cadastra um novo usuário | ❌ |
| `/login` | POST | Realiza login e retorna um token JWT e os dados do usuário | ❌ |

### Notas
| Endpoint  / Rota| Método | Descrição | Autenticação |
|:--:|:--|:--|:--:|
| `/notes` | POST | Cria uma nova nota vinculada ao usuário |    ✅   |
| `/notes` | GET | Lista todas as notas do usuário autenticado | ✅ |
| `/notes?title=...` | GET | Filtra notas pelo título informado	 | ✅ |
| `/notes/:id` | PUT | Atualiza todos os dados de uma nota existente | ✅ |
| `/notes/:id` | PATCH | Atualiza parcialmente os dados de uma nota | ✅ |
| `/notes/:id` | DELETE | Remove uma nota do usuário autenticado | ✅ |

###  Fluxo de Comunicação

1. O usuário realiza **login** → recebe um **token JWT**.  
2. O token é armazenado no **LocalStorage** e enviado em todas as requisições com o header:  Authorization: Bearer <token>
3. O backend valida o token e retorna as notas, erros ou confirmações.  
4. Em caso de token inválido ou expirado, o frontend:
   - Limpa a sessão,
   - Redireciona o usuário para `/login`,
   - Exibe um toast com a mensagem de sessão expirada.

###  Padrão de Resposta
**Exemplo de resposta de login bem-sucedido:**
```json
{
    "message": "Login realizado com sucesso!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Exemplo de resposta de email não cadastrado:**
```json
{
  "error": "E-mail não cadastrado"
}
```

---

## 🟣 Variáveis de Ambiente (.env)

O projeto utiliza arquivos `.env` diferentes para facilitar a alternância entre os backends **MongoDB** e **PostgreSQL**, além do ambiente local de testes.

Cada arquivo define a URL base da API e o tipo de backend ativo.

###  Estrutura de Arquivos de Ambiente

| Arquivo | Finalidade | Exemplo de Configuração |
|----------|-------------|--------------------------|
| `.env` | Ambiente local (teste rápido com backend local) | `VITE_API_URL=http://localhost:3000` |
| `.env.mongodb` | Produção com backend MongoDB | `VITE_API_URL=https://mini-projeto-fullstack-parte2.vercel.app` |
| `.env.postgresql` | Produção com backend PostgreSQL | `VITE_API_URL=https://backend-express-postgresql-flame.vercel.app` |


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
cp .env .env
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


👉 [Clique aqui para assistir no Google Drive](https://drive.google.com/file/d/16j0xGU3sFUUCvW2l5aNoavq8rM894Zmg/view?usp=sharing)

--- 

## 🟣 Mock Service Worker (MSW)

###  Objetivo
O **Mock Service Worker (MSW)** foi configurado no projeto **frontend** para simular requisições HTTP durante o desenvolvimento e os testes da aplicação.  Essa configuração permite que a interface funcione normalmente **sem depender de um backend real**, garantindo mais agilidade e estabilidade durante os testes locais.

###  Configuração

Foram seguidos os passos abaixo para a implementação:

1. Instalação do pacote MSW:
```bash
   npm install msw --save-dev
```

2. Inicialização do service worker:
```bash
npx msw init public/ --save
```

3. Criação do arquivo:
```bash
src/mocks/handlers.ts
```

Contendo os endpoints mockados utilizados no projeto:

- POST /api/login → Simula login de usuário e retorna token e nome fictício.
- POST /api/register → Simula o cadastro de um novo usuário.
- GET /api/notes → Retorna notas mockadas para exibição no dashboard.

4. Registro do Service Worker no ponto de entrada da aplicação (main.tsx), garantindo que ele seja iniciado apenas em ambiente de desenvolvimento:
```bash
if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start();
}
```

### Testes realizados 

Os testes foram feitos no ambiente local para validar o funcionamento do MSW.

### Teste 1 – Inicialização 
Ao iniciar o projeto, o console exibe a mensagem: 
```bash
[MSW] Mocking enabled.
```
> Isso confirma que o MSW foi iniciado corretamente.

### Teste 2 – Login e Registro simulados

As requisições para **/api/login** e **/api/register** foram interceptadas com sucesso.

O console exibiu:
```bash
Interceptado login: { email: 'nathalia.teste@example.com', password: '123456' }
Interceptado registro: { name: 'Nathalia Teste', email: nathalia.teste@example.com', password: '123456' }
```
> A interface respondeu normalmente com mensagens de sucesso mockadas.

### Teste 3 – Listagem de Notas Mockadas
A rota **/api/notes** retornou dados simulados:
```bash
[
  { "id": 1, "title": "Nota Mockada 1", "content": "Conteúdo de teste 1" },
  { "id": 2, "title": "Nota Mockada 2", "content": "Conteúdo de teste 2" }
]
```
> As notas foram exibidas corretamente no dashboard, confirmando a interceptação.

### Como ativar ou desativar o MSW?

- O MSW é ativado automaticamente em ambiente de desenvolvimento utilizando o comando `npm run dev`.

- Para desativar, basta comentar o trecho que inicia o worker no arquivo `main.tsx`.


import { http, HttpResponse } from 'msw';

export const handlers = [
  //  Login
  http.post('http://localhost:3000/api/login', async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string };
    console.log('Interceptado login:', body);

    return HttpResponse.json(
      {
        message: 'Login realizado com sucesso!',
        token: 'fake-jwt-token-12345',
        user: { name: 'Nathalia Teste', email: body.email },
      },
      { status: 200 }
    );
  }),

  //  Registro
  http.post('http://localhost:3000/api/register', async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string };
    console.log('Interceptado registro:', body);

    return HttpResponse.json(
      { message: 'Usuário cadastrado com sucesso!' },
      { status: 201 }
    );
  }),

  //  Notas
  http.get('http://localhost:3000/api/notes', () => {
    return HttpResponse.json([
      { id: 1, title: 'Nota Mockada 1', content: 'Conteúdo de teste 1' },
      { id: 2, title: 'Nota Mockada 2', content: 'Conteúdo de teste 2' },
    ]);
  }),
];

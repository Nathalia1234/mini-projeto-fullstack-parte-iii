import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Configura o service worker para interceptar as requisições
export const worker = setupWorker(...handlers);

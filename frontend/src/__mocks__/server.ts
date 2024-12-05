// // frontend/src/__mocks__/server.ts
// import { setupServer } from 'msw/node';
// import { handlers } from './handlert';

// export const server = setupServer(...handlers);
// server.ts
// import { setupServer } from 'msw/node';  // Importa 'setupServer' para crear el servidor mockeado
// import { handlers } from './handlers';  // Importa los handlers definidos en 'handlers.ts'

// // Crea y exporta el servidor mockeado
// export const server = setupServer(...handlers);




// frontend/src/__mocks__/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers'; // Asegúrate de que importes tus handlers aquí

// Configuración del servidor mock de MSW
export const server = setupServer(...handlers);


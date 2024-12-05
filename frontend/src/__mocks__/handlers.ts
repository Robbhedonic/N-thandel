// frontend/src/__mocks__/handlers.ts


// import { rest } from 'msw'; // Solo importa `rest` de 'msw'
// import { Response, RestContext } from 'msw'; // No necesitas importar `Request`, ya está implícito

// // Definir los manejadores (handlers)
// export const handlers = [
//   // Ejemplo de un manejador para un GET
//   rest.get('/api/endpoint', (req, res: Response, ctx: RestContext) => {
//     return res(
//       ctx.status(200),  // Status HTTP 200
//       ctx.json({ message: 'Hola, mundo!' })  // Respuesta JSON
//     );
//   }),

//   // Ejemplo de un manejador para un POST
//   rest.post('/api/submit', (req, res: Response, ctx: RestContext) => {
//     // Obtener datos del cuerpo de la solicitud (req.body)
//     const { name, email } = req.body as { name: string; email: string };  // Asegúrate de tipar el cuerpo si es necesario

//     return res(
//       ctx.status(200),
//       ctx.json({ message: 'Datos recibidos correctamente', name, email })
//     );
//   }),

//   // Ejemplo de un manejador para un PUT
//   rest.put('/api/update', (req, res: Response, ctx: RestContext) => {
//     const { id, data } = req.body as { id: string; data: any };  // Tipar el cuerpo según lo que se espera

//     return res(
//       ctx.status(200),
//       ctx.json({ message: 'Datos actualizados', id, data })
//     );
//   }),

//   // Ejemplo de un manejador para un DELETE
//   rest.delete('/api/delete', (req, res: Response, ctx: RestContext) => {
//     const { id } = req.params;  // Obtener parámetros de la URL

//     return res(
//       ctx.status(200),
//       ctx.json({ message: `Recurso con ID ${id} eliminado` })
//     );
//   })
// ];


// frontend/src/__mocks__/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/user', () => {
    return HttpResponse.json({ username: 'john_doe' });
  }),
];
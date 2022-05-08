import * as chalk from 'chalk';
import * as net from 'net';
import { event } from '../events/events';
import { RequestType } from '../types/types';

/**
 * En esta funcion es donde el cliente mandara la comunicacion con el servidor y poder trasmitirle la solicitud al servidor y que asi este le devuelva un mensaje y lo muestre por pantalla
 * @param com parametros recogidos por linea de comandos
 */
export function Handler(com: RequestType){

  const socket = net.connect({port: 60300});
  const client = new event(socket);
  
  socket.write(JSON.stringify(com), (err) => {
    if (err){
      console.log(chalk.red("La solicitud no se ha podido llevar a cabo"));
    }else {
      console.log(chalk.green("La solicitud se ha llevado a cabo con exito"));
      socket.end();
    }
  });
  
  client.on('mensaje', (mensaje) => {
      console.log(mensaje.mensaje);
  });
  
  
  client.on('error', (err) => {
    console.log(chalk.red(`La conexión no se ha podido establecer`));
  });
}

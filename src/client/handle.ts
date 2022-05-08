import * as chalk from 'chalk';
import * as net from 'net';
import { event } from '../events/events';
import { RequestType } from '../types/types';


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
      console.log("cualquier cosa");
      console.log(mensaje.mensaje);
  });
  
  
  client.on('error', (err) => {
    console.log(chalk.red(`La conexión no se ha podido establecer`));
  });
}

import * as chalk from 'chalk';
import * as net from 'net';
import { Nota } from '../Notas/nota/nota';
import { Gestor } from '../Notas/gestor/gestor';
import { event } from '../events/events';
import { ResponseType } from '../types/types';

/**
 * Servidos que se encarga de procesar la request solicitada por el cliente, el cual se rediirige a la funcion que el cliente pida de la clase gestor, haciendo uso asi de la aplicacion de notas. 
 * AL finalizar esto el servidor le mandara el mensaje de notificacion al cliente
 */
const server = net.createServer({allowHalfOpen: true}, (connection) => {
  console.log(chalk.green('Un cliente se ha conectado.'));

  const socket = new event(connection);

  socket.on('mensaje', (mensaje) => {
    let gestor = new Gestor();
    console.log(chalk.green("la solicitud del cliente ha sido recibida"));
    let respuesta: ResponseType = {
      mensaje: '',
    }
    if (mensaje.type === 'add'){
      let newNota = new Nota(mensaje.titulo, mensaje.cuerpo, mensaje.color);
      respuesta.mensaje = gestor.addNota(mensaje.user, newNota)
    } else if (mensaje.type === 'mod'){
      let newNota2 = new Nota(mensaje.titulo, mensaje.cuerpo, mensaje.color);
      respuesta.mensaje = gestor.modNota(mensaje.user, newNota2, mensaje.fichero);
    } else if (mensaje.type === 'del'){
      respuesta.mensaje = gestor.delNota(mensaje.user, mensaje.fichero);
    } else if (mensaje.type === 'leer' ){ 
      respuesta.mensaje = gestor.readNota(mensaje.user, mensaje.fichero);
    } else if (mensaje.type === 'mostrar'){
      respuesta.mensaje = gestor.mostrarTitulos(mensaje.user);
    }

    connection.write(JSON.stringify(respuesta), (err) => {
      if (err){
        console.log(chalk.red("La respuesta no se ha podido mandar al cliente"));
      } else {
        console.log(chalk.green("Se ha enviado el mensaje al cliente"));
        connection.end();
      }
    });
  });

  connection.on('error', (err) => {
    if (err)
      console.log(chalk.red('La conexión no se ha podido realizar'));
  });

  connection.on('close', () => {
    console.log(chalk.blue('El cliente se ha desconectado'));
  });
});

server.listen(60300, () => {
  console.log(chalk.blue('Esperando por los clientes'));
});
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507?branch=main)  [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2122_ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507)
# Práctica 11 - Cliente y servidor para una aplicación de procesamiento de notas de texto

[Enlace a github pages](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507/)

Para esta practica hemos de hacer uso de la aplicacion de notas que se ha utilizado para la practica 9 y comunicarla mediante cliente servidor para ello hemos usado las clases de la aplicacion de notas previamente creada:

## [Clase Nota](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507/blob/main/src/Notas/nota/nota.ts)

El principal cambio de la practica anterior a este es el cambio en la devolucion de los colores de los titulos y textos pues ahora esas funcions que previamente eran void, ahora retornaran una string la cual nos devolvera el titulo o el cuerpo de la nota con el color que le pertezeca a la nota para que sea procesada por cliente/servidor:

```typescript
 printNotaTitulo(): string{ //rojo verde azul amarillo
    let aux: string = ''
    if(this.color == "Rojo") {
      aux = (chalk.red(`${this.titulo}`));
    } else if(this.color == "Verde") {
      aux = (chalk.green(`${this.titulo}`));
    } else if(this.color == "Azul") {
      aux = (chalk.blue(`${this.titulo}`));
    } else if(this.color == "Amarillo") {
      aux = (chalk.yellow(`${this.titulo}`));
    } else if(this.color == ""){
      aux = (chalk.red(`${this.titulo}`))
    }
    return aux
  }

  /**
   * Funcion que nos permite cambiar el color al cuerpo
   */
  printNotaCuerpo(): string{
    let aux:string = ''
    if(this.color == "Rojo") {
      aux = (chalk.red(`${this.cuerpo}`));
    } else if(this.color == "Verde") {
      aux = (chalk.green(`${this.cuerpo}`));
    } else if(this.color == "Azul") {
      aux = (chalk.blue(`${this.cuerpo}`));
    } else if(this.color == "Amarillo") {
      aux = (chalk.yellow(`${this.cuerpo}`));
    } else if(this.color == ""){
      aux = (chalk.red(`${this.cuerpo}`))
    }
    return aux
  }
```

Como ahi se ve ahora ambas funciones ahora devuelven una string con el correcto formateo de ambas partes de la nota

## [Clase Gestor](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507/blob/main/src/Notas/gestor/gestor.ts)

Para esta clase gestor he arreglado los problemas que tenia de la practica anterior, añadiendo salidas de errores para el caso de mostrar cuando no existe el directorio, añadir mas de una nota, poder leer con los colores, ademas de que ahora todas las funciones, al igual que los **printNotaTitulo()** y **printNotaCuerpo()**, para que se puedan controlar desde el cliente/servidor


## [Clase Events](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507/blob/main/src/events/events.ts)

En esta clase que hereda de EventEmmitter lo que hacemos es al recibir un mensaje a trozos ir concatenandolo dentro de una string que es la que almacenara el mensaje que reciba y que despues cuando se produzca la llamada a el end como etiqueta mandara el mensaje para que pueda ser utilizado

```typescript
import {EventEmitter} from 'events';
/**
 * Clase que hereda de la clase EventEmmiter, es la encargada de recibir mensajes entre servidor y cliente y ver sus datos
 */
export class event extends EventEmitter{
  /**
   * Constructor
   * @param connection 
   */
  constructor(connection: EventEmitter){
    super();

    /**
     * Division de los datos, ya que nos pueden llegar muchos datos entre cliente y servidor y hay que procesarlos para poder convertirlos
     */
    let wholeData = '';
    connection.on('data', (dataChunk)  => {
      wholeData += dataChunk;  
    });

    connection.on('end', () => {
      const mensaje = JSON.parse(wholeData.toString());
      this.emit('mensaje', mensaje);
    });
  } 
}
```

## [Types](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507/blob/main/src/types/types.ts)

En este fichero lo que tendremos seran las dos tipos de comunicacion entre cliente servidor como son el RequestType y el ResponseType que seran los mensajes de comunicacion entre el cliente y el servidor.

El RequestType, que son las peticiones que realizara el cliente a el servidor, contara con las etiquetas de cada uno de los metodos del gestor de notas como añadir, eliminar, leer, etc y a su vez contara con el usuario, el titulo de la nota, el cuerpo, el color y el fichero al cual haremos referencia en funciones como leer o mostrar

El ResponseType, que es la respuesta que enviara el servidor al cliente, sera el mensaje que nos llegara de cada una de las funciones que pida el cliente y que mostraran si se ha creado un fichero, si da error etc

## [Servidor](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507/blob/main/src/server/server.ts)

En el servidor hemos de inicializar el servidor que estara escuchando a el puerto 60300, una vez que un cliente se conecte e introduzca los parametros por consola para la funcion de las notas que quiera realizar, primero en el server se creara un socket que sera un objeto de **event** el cual recibira el socket del servidor que es coneection, una vez ocurrido esto cuando el socket por el que transitara la informacion recive un mensaje crea un objeto gestor para poder llevar a cabo las funciones requeridas por el cliente e inicializara la respuesta a travez e la cual se le pasara el resultado de las funciones realizadas, teniendo asi la respuesta a mandar al cliente cuando se cumpla la funcion, esto lo realizo con usa serie de if y elseif que iran comprobando cual es el tipo del mensaje enviado, es decir el Requesttype si conicide con el del mensaje enviado realizara la funicon correspondiente de la clase gestor, dicho esto el server se veria de la siguiente manera:

```typescript
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
```

Tambien en caso de la que la coneccion no se pueda realizar o el cliente se desconecte cuando finaliza su peticion o pierde la coneccion se notificara por la terminal del servidor que el cliente se desconecto o que la conexcion fallo.

## [Cliente](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507/blob/main/src/client/client.ts)

En este fichero lo que se ha realizado es el movimiento de los yargs que antes estaban en la funcion de note-app a este, pero modificando el paso de parametros para que se pueda comunicar con el servidor, como ejemplo pondre el llamado a el add:

```typescript
yargs.command({
  command: 'add',
  describe: 'Añadir una nueva nota',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
    titulo: {
      describe: 'Titulo',
      demandOption: true,
      type: 'string',
    },
    cuerpo: {
      describe: 'Cuerpo de la nota',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Color de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' &&
        typeof argv.titulo === 'string' &&
        typeof argv.cuerpo === 'string' &&
        typeof argv.color === 'string') {
      // Required logic to add a new note
          let com: RequestType = {
            type: 'add',
            user: argv.user,
            titulo: argv.titulo,
            cuerpo: argv.cuerpo,
            color: argv.color,
          };
          Handler(com);
    }
  },
});
```

Como aqui se ve introduciremos los terminos introducidos por terminal en una variable que sera una variabe de RequestType, teniendo asi los campos necesarios para la funcion, que posteriosmente pasaremos a una funcion auxiliar llamada **Handler** que sera la encargada de mandar esta peticion al servidor y de la conexcion con el mismo servidor

### [Handler](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507/blob/main/src/client/handle.ts)

En esta funcion lo primero que haremos sera conectarnos mediante un socket a el puerto de escucha del servidor y despues crearemos el atributo cliente que sera un objeto event que estara conectado a este socket, quedando esta funcion tal que asi:

```typescript
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
```

En esta funcion mediante el socker.write() enviaremos la peticion al servidor, cuando sea llevada a cabo con exito el cliente cerrara el socket de su lado pues el no volvera a realizar otra peticion por tanto cierra su socket.

Despues mediante el client.on() es donde recibiremos el resultado de la respuesta enviado por el servidor al cliente, recibiendo por pantalla un mensaje que estara definido dentro de las funciones de la clase gestor, como por ejemplo que el fichero se ha creado con exito en la funcion de addNota.

Tambien hay que realizar un manejo de errores y en caso de que la conexxcion no se pudiera establecer saltaria por pantalla ese console log que nos indica que la conexcion no se ha podido establecer

[Enlace a github pages](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct11-async-sockets-alu0101101507/)



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

import {EventEmitter} from 'events';

export class event extends EventEmitter{
  constructor(connection: EventEmitter){
    super();

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

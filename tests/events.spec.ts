import 'mocha';
import {expect} from 'chai';
import {EventEmitter} from 'events';
import {event} from '../src/events/events';

describe('event', () => {
  it('Emitimos un mensaje una vez que se encuentre completo', (done) => {
    let socket = new EventEmitter();
    let emit = new event(socket);
    
    emit.on('message', (message) => {
      expect(message).to.be.eql({'titulo': 'Nota roja', 'cuerpo': 'Esto es una nota roja', 'color': 'Rojo'});
      done();
    });

    socket.emit('data', '{"titulo": "Nota roja",');
    socket.emit('data', '"cuerpo": "Esto es una nota roja",');
    socket.emit('data', '"color": "Rojo"}');
    socket.emit('end');
  });
});
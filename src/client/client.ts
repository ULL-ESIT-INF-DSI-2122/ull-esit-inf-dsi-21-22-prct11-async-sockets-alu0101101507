import * as chalk from 'chalk';
import * as yargs from 'yargs';
import * as net from 'net';
import { Nota } from '../Notas/nota/nota';
import { Gestor } from '../Notas/gestor/gestor';
import { event } from '../events/events';
import { RequestType } from '../types/types';
import { Handler } from './handle';

/**
 * Comando que nos permite añadir una nota
 */
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

/**
 * Comando que nos permite modificar una nota
 */
yargs.command({
  command: 'mod',
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
    fichero: {
      describe: 'Nombre fichero',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' &&
        typeof argv.titulo === 'string' &&
        typeof argv.cuerpo === 'string' &&
        typeof argv.color === 'string' && 
        typeof argv.fichero === 'string') {
      // Required logic to add a new note
      let com: RequestType = {
        type: 'mod',
        user: argv.user,
        titulo: argv.titulo,
        cuerpo: argv.cuerpo,
        color: argv.color,
        fichero: argv.fichero,
      };
      Handler(com)
    }
  },
});

/**
 * Comando que nos permite borrar una nota
 */
yargs.command({
  command: 'del',
  describe: 'Eliminar nota',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
    fichero: {
      describe: 'Nombre fichero',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' &&
        typeof argv.fichero === 'string') {
      // Required logic to add a new note
      let com: RequestType = {
        type: 'del',
        user: argv.user,
        fichero: argv.fichero,
      };
      Handler(com)
    }
  },
});

/**
 * Comando que nos permite mostrar una lista de titulos
 */
yargs.command({
  command: 'mostrar',
  describe: 'Mostrar titulos de las notas',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      // Required logic to add a new note
      let com: RequestType = {
        type: 'mostrar',
        user: argv.user,
      };
      Handler(com);
    }
  },
});

/**
 * Comando que nos permite leer una nota en concreto
 */
yargs.command({
  command: 'leer',
  describe: 'Leer una nota en cocreto',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
    fichero: {
      describe: 'Nombre fichero',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' &&
        typeof argv.fichero === 'string') {
      // Required logic to add a new note
      let com: RequestType = {
        type: 'leer',
        user: argv.user,
        fichero: argv.fichero,
      };
      Handler(com);
    }
  },
});

/**
 * Comando que ejecutara el comando dado por el usuario
 */
yargs.parse()




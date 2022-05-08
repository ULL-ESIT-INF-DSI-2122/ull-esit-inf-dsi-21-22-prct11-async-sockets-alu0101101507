import { Gestor } from '../gestor/gestor';
import { Nota } from '../nota/nota';
import * as yargs from 'yargs';


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
    title: {
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
        typeof argv.title === 'string' &&
        typeof argv.cuerpo === 'string' &&
        typeof argv.color === 'string') {
      // Required logic to add a new note
      console.log(new Gestor().addNota(argv.user, new Nota(argv.title, argv.cuerpo, argv.color)))
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
    title: {
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
        typeof argv.title === 'string' &&
        typeof argv.cuerpo === 'string' &&
        typeof argv.color === 'string' && 
        typeof argv.fichero === 'string') {
      // Required logic to add a new note
      console.log(new Gestor().modNota(argv.user, new Nota(argv.title, argv.cuerpo, argv.color), argv.fichero))
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
      console.log(new Gestor().delNota(argv.user, argv.fichero));
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
      console.log(new Gestor().mostrarTitulos(argv.user))
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
      console.log(new Gestor().readNota(argv.user, argv.fichero))
    }
  },
});

/**
 * Comando que ejecutara el comando dado por el usuario
 */
yargs.parse()
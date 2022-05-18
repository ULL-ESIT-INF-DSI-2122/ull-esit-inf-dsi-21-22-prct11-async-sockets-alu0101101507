import * as yargs from 'yargs';
import { addDepor } from '../functions/add'
import { searchDepor } from '../functions/search'
import { modifyDepor } from '../functions/modify'
import { deleteDepor } from '../functions/delete'
/**
 * Comando que nos permite crear un usuario
 */
yargs.command({
  command: 'add',
  describe: 'Añadir un nuevo deportista',
  builder: {
    name: {
      describe: 'Nombre',
      demandOption: true,
      type: 'string',
    },
    surname1: {
      describe: 'Apellido',
      demandOption: true,
      type: 'string',
    },
    DNI: {
      describe: 'DNI',
      demandOption: true,
      type: 'string',
    },
    age: {
      describe: 'Edad',
      demandOption: true,
      type: 'number',
    },
    sport: {
      describe: 'Edad',
      demandOption: true,
      type: 'string',
    },
    better: {
      describe: 'Mejor prueba',
      demandOption: true,
      type: 'string',
    },
    record: {
      describe: 'Mejor marca',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.name === 'string' &&
        typeof argv.surname1 === 'string' &&
        typeof argv.DNI === 'string' &&
        typeof argv.age === 'number' &&
        typeof argv.sport === 'string' &&
        typeof argv.better === 'string' &&
        typeof argv.record === 'string') {
        addDepor(argv.name, argv.surname1, argv.DNI, argv.age, argv.sport, argv.better, argv.record);
    }
  },
});

/**
 * Comando que nos permite buscar un usuario
 */
yargs.command({
  command: 'search',
  describe: 'Buscar un nuevo deportista',
  builder: {
    DNI: {
      describe: 'DNI',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.DNI === 'string') {
        searchDepor(argv.DNI);
    }
  },
});

/**
 * Comando que nos permite modificar un deportista
 */
yargs.command({
  command: 'modify',
  describe: 'Modificar un nuevo deportista',
  builder: {
    filter: {
      describe: 'filtro de busqueda',
      demandOption: true,
      type: 'string',
    },
    name: {
      describe: 'Nombre',
      demandOption: true,
      type: 'string',
    },
    surname1: {
      describe: 'Apellido',
      demandOption: true,
      type: 'string',
    },
    DNI: {
      describe: 'DNI',
      demandOption: true,
      type: 'string',
    },
    age: {
      describe: 'Edad',
      demandOption: true,
      type: 'number',
    },
    sport: {
      describe: 'Edad',
      demandOption: true,
      type: 'string',
    },
    better: {
      describe: 'Mejor prueba',
      demandOption: true,
      type: 'string',
    },
    record: {
      describe: 'Mejor marca',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.filter === 'string' &&
        typeof argv.name === 'string' &&
        typeof argv.surname1 === 'string' &&
        typeof argv.DNI === 'string' &&
        typeof argv.age === 'number' &&
        typeof argv.sport === 'string' &&
        typeof argv.better === 'string' &&
        typeof argv.record === 'string') {
        modifyDepor(argv.filter, argv.name, argv.surname1, argv.DNI, argv.age, argv.sport, argv.better, argv.record);
    }
  },
});

/**
 * Comando que nos permite borrar un usuario
 */
yargs.command({
  command: 'del',
  describe: 'Borrar un deportista',
  builder: {
    DNI: {
      describe: 'DNI',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.DNI === 'string') {
        deleteDepor(argv.DNI);
    }
  },
});

yargs.parse()
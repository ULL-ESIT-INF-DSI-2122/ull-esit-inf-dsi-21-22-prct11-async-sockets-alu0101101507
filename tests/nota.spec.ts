import 'mocha';
import {expect} from 'chai';
import {Nota} from '../src/Notas/nota/nota';

let nota = new Nota("prueba", "prueba", "Amarillo");

describe('existe una nota', () => {
  it('Notas se puede instancias', () => {
    expect(nota).to.be.instanceOf(Nota);
  });
});

describe('getTitulo()', () => {
  it('getTitulo()', () => {
    expect(nota.getTitulo()).to.be.eq("prueba");
  });
});

describe('getCuerpo()', () => {
  it('getCuerpo()', () => {
    expect(nota.getCuerpo()).to.be.eq("prueba");
  });
});

describe('getColor()', () => {
  it('getColor()', () => {
    expect(nota.getColor()).to.be.eq("Amarillo");
  });
});

describe('setTitulo()', () => {
  it('setTitulo()', () => {
    expect(nota.getTitulo()).to.be.eq("prueba");
    nota.setTitulo("prueba2");
    expect(nota.getTitulo()).to.be.eq("prueba2");
    nota.setTitulo("prueba");
  });
});

describe('setCuerpo()', () => {
  it('setCuerpo()', () => {
    expect(nota.getCuerpo()).to.be.eq("prueba");
    nota.setCuerpo("prueba2");
    expect(nota.getCuerpo()).to.be.eq("prueba2");
    nota.setCuerpo("prueba");
  });
});

describe('setColor()', () => {
  it('setColor()', () => {
    expect(nota.getColor()).to.be.eq("Amarillo");
    nota.setColor("Rojo");
    expect(nota.getColor()).to.be.eq("Rojo");
    nota.setColor("Amrillo");
  });
});

describe('printNotaTitulo()', () => {
  it('printNotaTitulo()', () => {
    expect(nota.printNotaTitulo()).to.be.eq("");
  });
});

describe('printCuerpoTitulo()', () => {
  it('printCuerpoTItulo()', () => {
    expect(nota.printNotaCuerpo()).to.be.eq("");
  });
});



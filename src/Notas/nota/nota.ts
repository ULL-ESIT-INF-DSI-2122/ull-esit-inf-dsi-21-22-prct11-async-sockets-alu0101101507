import * as chalk from 'chalk';
/**
 * Clase que define el esqueleto de una nota
 */
export class Nota {
  constructor(protected titulo: string, protected cuerpo: string , protected color: string){

  }

  /**
   * Funcion que nos devuelve el titulo de la nota
   * @returns this.titulo
   */
  getTitulo(): string {
    return this.titulo;
  }

  /**
   * Funcion que nos devuelve el cuerpo de la nota
   * @returns this.cuerpo
   */
  getCuerpo(): string{ 
    return this.cuerpo;
  }

  /**
   * Funcion que nos devuelve el color de la nota
   * @returns this.color
   */
  getColor(): string {
    return this.color;
  }

  /**
   * Funcion que nos permite cambiar el titulo
   * @param aux Cadena que cambiara el titulo
   */
  setTitulo(aux: string) {
    this.titulo = aux;
  }

  /**
   * Funcion que nos permite cambiar el cuerpo
   * @param aux Cadena que cambiara el cuerpo
   */
  setCuerpo(aux: string){
    this.cuerpo = aux;
  }

  /**
   * Funcion que nos permite cambiar el color
   * @param aux Cadena que nos permite cambiar el color
   */
  setColor(aux: string){
    this.color = aux;
  }

  /**
   * Funcion que nos permite poner el color al titulo
   */
  //no se si he de pasarle el color o ya lo tengo desde el this.color
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
}

import { Nota } from "../nota/nota";
import * as fs from 'fs';
import * as chalk from 'chalk';
/**
 * Clase encargada de la gestion de las notas: añadir nuevas notas, modificar las notas, borrar las notas, mostrar una lista de notas y mostrar el contenido de una nota en concreto
 */
export class Gestor {
  constructor(){

  }
  
  /**
   * Funcion que añade una nueva nota a la lista
   * @param user usuario creador de esa nota
   * @param new_nota nuevo objeto nota
   */
  addNota(user: string, new_nota: Nota): string{
    let aux2: string = ''
    console.log(`../../database/${user}`)
    if (fs.existsSync(`../../database/${user}`)){
      console.log(chalk.green('Existe el directorio'));
      if (fs.existsSync(`../../database/${user}/${new_nota.getTitulo()}`+ ".json")){
        aux2 = chalk.red("EL fichero ya existe")
      }else{
        const nota = {"Titulo": new_nota.getTitulo(), "Cuerpo": new_nota.getCuerpo(), "Color": new_nota.getColor()};
        let aux = JSON.stringify(nota);
        fs.writeFileSync(`../../database/${user}/${new_nota.getTitulo()}`+ ".json", aux);
        aux2 = chalk.green("Se ha creado el fichero 1")
      }
    } else {
        fs.mkdirSync(`../../database/${user}`); 
        console.log(new_nota.getTitulo());
        const nota = {"Titulo": new_nota.getTitulo(), "Cuerpo": new_nota.getCuerpo(), "Color": new_nota.getColor()};
        let aux = JSON.stringify(nota);
        fs.writeFileSync(`../../database/${user}/${new_nota.getTitulo()}`+ ".json", aux);
        aux2 = chalk.green("Se ha creado el fichero 2")
    }
    return aux2;
  }

  /**
   * Funcion que modifica el objeto nota que especifique el usuario
   * @param user usuario creador de la nota
   * @param new_nota nuevo objeto nota que nos quedara despues de modificar
   * @param aux2 nota que vamos a modificar
   */
  modNota(user: string, new_nota: Nota, aux2: string): string{
    let aux3: string = ''
    if (fs.existsSync(`../../database/${user}`)){
      if(fs.existsSync(`../../database/${user}/${aux2}`)) {
        const nota = {"Titulo": new_nota.getTitulo(), "Cuerpo": new_nota.getCuerpo(), "Color": new_nota.getColor()};
        const aux = JSON.stringify(nota);
        fs.writeFileSync(`../../database/${user}/${aux2}`, aux);
          aux3 = chalk.green('Se ha modificado la nota');
      } else {
        aux3 = chalk.red("No existe la nota en la lista");
      }
    } else {
      aux3 = chalk.red("no existe el directorio");
    }
    return aux3;
  }

  /**
   * Funcion que nos eliminara una nota
   * @param user usuario propietario de la nota
   * @param aux nota a eliminar
   */
  delNota(user: string, aux: string){
    let aux2: string = ''
    if(fs.existsSync(`../../database/${user}/${aux}`)) {
      fs.rmSync(`../../database/${user}/${aux}`);
      aux2 = chalk.green('Se ha eliminado la nota');
    } else {
      aux2 = chalk.red("No existe la nota en la lista");
    }
    return aux2;
  }

  /**
   * Fichero que nos mostrara las notas creadas
   * @param user usuario creador de las notas
   */
  mostrarTitulos(user: string): string{
    let aux2: string = ''
    if(fs.existsSync(`../../database/${user}`)){
      let filename = fs.readdirSync(`../../database/${user}`);
      console.log("\nTitulos de las notas de la lista: ");
        filename.forEach((file => {
          aux2 = chalk.green(file);
        }));
    } else {
      aux2 = chalk.red("No existe la carpeta que esta buscando");
    }
    return aux2;
  }

  /**
   * Funcion que nos leera el contenido de una nota en concreto
   * @param user usuario creador y propietario de la nota
   * @param aux nota a leer
   */
  readNota(user: string, aux: string): string{
    console.log(aux)
    let aux3: string = ''
    if(fs.existsSync(`../../database/${user}/${aux}`)){
      let file = fs.readFileSync(`../../database/${user}/${aux}`, "utf8");
      let newfile = JSON.parse(file);
      let nota = new Nota(newfile["Titulo"], newfile["Cuerpo"], newfile["Color"]);
      aux3 = nota.printNotaTitulo();
      aux3 = aux3 + '\n' + nota.printNotaCuerpo();
    } else {
      aux3 = (chalk.red('Error la nota no se encuentra en la lista'))
    }
    return aux3
  }
}

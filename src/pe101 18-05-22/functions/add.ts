import '../db/moongose';
import { Deportista } from '../server/model';

/**
 * Funcion que nos permite añadir un deportista a la base de datos
 * @param name_ nombre del deportista
 * @param surname1_ apellido del deportista
 * @param DNI_ dni del deportista
 * @param age_ edad del deportista
 * @param sport_ deporqte que practica el deportista
 * @param better_ prueba en la que es experto
 * @param record_ mejor marca personal
 */
export function addDepor(name_: string, surname1_: string, DNI_: string, age_: number, sport_: string, better_?: string, record_?: string){

  const deportista = new Deportista({
    name: name_ ,
    surname1: surname1_ ,
    DNI: DNI_ ,
    age: age_ ,
    sport: sport_ ,
    better: better_ , 
    record: record_ ,
  });

  deportista.save().then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

}
//addDepor("Rafa", "Nadal", "66349211F", 45, "Tenis",  "Rolanga", "Mundial")
// --better="Rolanga" --record="Mundial"
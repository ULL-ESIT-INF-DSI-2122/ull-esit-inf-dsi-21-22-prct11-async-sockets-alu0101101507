import '../db/moongose';
import { Deportista } from '../server/model';

/**
 * Funcion que nos permite borrar un usuario de la base de datos
 * @param DNI_ dni por el que s ebuscara al deportista y se le borrara
 */
export function deleteDepor(DNI_: string) {
  
  Deportista.findOneAndDelete({DNI: DNI_}).then((result) => {
    if(!result){
      console.log('El usuario no existe')
    }else {
      console.log(result);
      console.log('Elemento borrado')
    }
  }).catch((error) => {
    console.log(error);
  })
}

//deleteDepor('48091441M')
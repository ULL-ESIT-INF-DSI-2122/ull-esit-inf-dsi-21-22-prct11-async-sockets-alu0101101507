import '../db/moongose';
import { Deportista } from '../server/model';

/**
 * Funcion que nos permite buscar a un usuario en la base de datos
 * @param DNI_ dni para hacer la busqueda
 */
export function searchDepor(DNI_: string) {

  Deportista.find({DNI: DNI_}).then((result) => {
    if(!result){
      console.log('El usuario no existe')
    }else {
      console.log(result);
    }
  }).catch((error) => {
    console.log(error);
  });

}

//searchDepor("66349211F")

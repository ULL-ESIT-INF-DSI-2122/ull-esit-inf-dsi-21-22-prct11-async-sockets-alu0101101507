"use strict";
exports.__esModule = true;
require("../db/moongose");
var model_1 = require("../server/model");
/**
 * Funcion que nos permite borrar un usuario de la base de datos
 * @param DNI_ dni por el que s ebuscara al deportista y se le borrara
 */
function deleteDepor(DNI_) {
    model_1.Deportista.findOneAndDelete({ DNI: DNI_ }).then(function (result) {
        if (!result) {
            console.log('El usuario no existe');
        }
        else {
            console.log(result);
            console.log('Elemento borrado');
        }
    })["catch"](function (error) {
        console.log(error);
    });
}
exports.deleteDepor = deleteDepor;
//deleteDepor('48091441M')

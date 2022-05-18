"use strict";
exports.__esModule = true;
require("../db/moongose");
var model_1 = require("../server/model");
/**
 * Funcion que nos permite buscar a un usuario en la base de datos
 * @param DNI_ dni para hacer la busqueda
 */
function searchDepor(DNI_) {
    model_1.Deportista.find({ DNI: DNI_ }).then(function (result) {
        if (!result) {
            console.log('El usuario no existe');
        }
        else {
            console.log(result);
        }
    })["catch"](function (error) {
        console.log(error);
    });
}
exports.searchDepor = searchDepor;
//searchDepor("66349211F")

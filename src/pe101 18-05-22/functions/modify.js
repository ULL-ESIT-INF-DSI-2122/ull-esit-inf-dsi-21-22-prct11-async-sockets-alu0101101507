"use strict";
exports.__esModule = true;
require("../db/moongose");
var model_1 = require("../server/model");
/**
 * Funcion que nos permite modificar a un usuario
 * @param filter_ filtro por el que se buscara al usuario
 * @param name_ nuevo nombre
 * @param surname1_ nuevo apellido
 * @param DNI_ nuevo dni
 * @param age_ nueva edad
 * @param sport_ nuevo deporte que practica
 * @param better_ nuevo mejor prueba
 * @param record_ nuevo mejor record
 */
function modifyDepor(filter_, name_, surname1_, DNI_, age_, sport_, better_, record_) {
    model_1.Deportista.findOneAndUpdate({ DNI: filter_ }, { name: name_,
        surname1: surname1_,
        DNI: DNI_,
        age: age_,
        sport: sport_,
        better: better_,
        record: record_
    }, { "new": true }).then(function (result) {
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
exports.modifyDepor = modifyDepor;
//modifyDepor('66349211F', 'Pepe', 'Villuela','48091441M', 50, 'Futbol', 'Campeon', 'Campeon')

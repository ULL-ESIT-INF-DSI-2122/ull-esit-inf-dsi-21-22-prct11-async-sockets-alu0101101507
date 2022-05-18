"use strict";
exports.__esModule = true;
require("../db/moongose");
var model_1 = require("../server/model");
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
function addDepor(name_, surname1_, DNI_, age_, sport_, better_, record_) {
    var deportista = new model_1.Deportista({
        name: name_,
        surname1: surname1_,
        DNI: DNI_,
        age: age_,
        sport: sport_,
        better: better_,
        record: record_
    });
    deportista.save().then(function (result) {
        console.log(result);
    })["catch"](function (error) {
        console.log(error);
    });
}
exports.addDepor = addDepor;
//addDepor("Rafa", "Nadal", "66349211F", 45, "Tenis",  "Rolanga", "Mundial")
// --better="Rolanga" --record="Mundial"

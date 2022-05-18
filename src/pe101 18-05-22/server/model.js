"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema_1 = require("./schema");
/**
 * Modelo de la base de datos
 */
exports.Deportista = mongoose_1.model('Deportista', schema_1.AthleteSchema);

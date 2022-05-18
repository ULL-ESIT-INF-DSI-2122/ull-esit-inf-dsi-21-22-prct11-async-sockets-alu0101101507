"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
/**
 * Esquema de la base de datos
 */
exports.AthleteSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        validate: function (value) {
            if (!value.match(/^[A-Z]/)) {
                throw new Error('El nombre debe empezar por una letra mayuscula');
            }
        }
    },
    surname1: {
        type: String,
        trim: true,
        required: true,
        validate: function (value) {
            if (!value.match(/^[A-Z]/)) {
                throw new Error('El apellido debe empezar por una letra mayuscula');
            }
        }
    },
    DNI: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        validate: function (value) {
            if (!value.match(/[A-Z]$/)) {
                throw new Error('El DNI debe acabar por una letra mayuscula');
            }
        }
    },
    age: {
        type: Number,
        trime: true,
        required: true,
        validate: function (value) {
            if (value < 0) {
                throw new Error('La edad no puede ser menor a 0');
            }
        }
    },
    sport: {
        type: String,
        trim: true,
        required: true,
        "enum": ['Atletismo', 'Ciclismo', 'Natacion', 'Futbol', 'Basket', 'Tenis', 'Padel', 'Voleybol', 'Boxeo', 'Judo']
    },
    better: {
        type: String,
        trim: true,
        required: false
    },
    record: {
        type: String,
        trim: true,
        required: false
    }
});

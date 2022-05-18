import { Schema } from "mongoose";
import { AthleteInterface } from "./interface";

/**
 * Esquema de la base de datos
 */

export const AthleteSchema = new Schema<AthleteInterface>({
  name: {
    type: String,
    trim: true,
    required: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('El nombre debe empezar por una letra mayuscula');
    }
   },
  },
  surname1: {
    type: String,
    trim: true,
    required: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('El apellido debe empezar por una letra mayuscula');
    }
   },
  },
  DNI: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    validate: (value: string) => {
      if (!value.match(/[A-Z]$/)) {
        throw new Error('El DNI debe acabar por una letra mayuscula');
    }
   },
  },
  age: {
    type: Number,
    trime: true,
    required: true,
    validate: (value: number) => {
      if(value < 0){
        throw new Error('La edad no puede ser menor a 0');
      }
    } 
  }, 
  sport: {
    type: String,
    trim: true,
    required: true,
    enum: ['Atletismo', 'Ciclismo', 'Natacion', 'Futbol', 'Basket', 'Tenis', 'Padel', 'Voleybol', 'Boxeo', 'Judo'],
  },
  better: {
    type: String,
    trim: true,
    required: false,
  },
  record: {
    type: String,
    trim: true,
    required: false,
  },
});
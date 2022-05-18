import { Document } from "mongoose";

/**
 * Interfaz con la que se crearan a los deportistas en la base de datos
 */

export interface AthleteInterface extends Document {
  name: string,
  surname1: string,
  DNI: string,
  age: number,
  sport: string,
  better: string,
  record: string,
}
import { model } from "mongoose";
import { AthleteInterface } from "./interface";
import { AthleteSchema } from "./schema";
/**
 * Modelo de la base de datos
 */
export const Deportista = model<AthleteInterface>('Deportista', AthleteSchema)


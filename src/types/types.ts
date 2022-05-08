import { Nota } from '../Notas/nota/nota';
/**
 * Tipo que representa la request del cliente al servidor, con cada uno de las diferentes funciones de gestor y sus parametros teniendo solo el parametro user y type como obligatorios
 * 
 */
export type RequestType = {
  type: 'add' | 'mod' | 'del' | 'leer' | 'mostrar';
  user: string;
  titulo?: string;
  cuerpo?: string;
  color?: string;
  fichero?: string;
}

/**
 * Tipo que representa la respuesta del servidor hacia el cliente
 */
export type ResponseType = {
  mensaje: string;
}
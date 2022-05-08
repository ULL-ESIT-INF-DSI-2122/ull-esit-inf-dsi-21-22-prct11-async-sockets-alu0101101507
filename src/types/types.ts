import { Nota } from '../Notas/nota/nota';

export type RequestType = {
  type: 'add' | 'mod' | 'del' | 'leer' | 'mostrar';
  user: string;
  titulo?: string;
  cuerpo?: string;
  color?: string;
  fichero?: string;
}

export type ResponseType = {
  mensaje: string;
}
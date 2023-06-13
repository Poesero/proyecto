import { Usuario } from './user';

export class Post {
  id: number;
  userId: number;
  text: String;
  user: Usuario;
}

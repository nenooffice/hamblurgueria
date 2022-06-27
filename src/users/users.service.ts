import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  create() {
    return 'Criação';
  }
  getAll() {
    return 'Listagem';
  }
}

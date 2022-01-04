import { Injectable } from '@nestjs/common';
// import { CreateAuthLogInput } from './dto/create-auth-log.input';
// import { UpdateAuthLogInput } from './dto/update-auth-log.input';

@Injectable()
export class AuthLogService {
  // create(createAuthLogInput: CreateAuthLogInput) {
  //   return 'This action adds a new authLog';
  // }

  findAll() {
    return `This action returns all authLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authLog`;
  }

  // update(id: number, updateAuthLogInput: UpdateAuthLogInput) {
  //   return `This action updates a #${id} authLog`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} authLog`;
  // }
}

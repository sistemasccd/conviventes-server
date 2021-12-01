import { Inject, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UsersListener {
  constructor() {}

  @OnEvent('user.created')
  async handleUserCreatedEvent(createdUser) {
    // Send welcome email to created user;
  }

  @OnEvent('user.created')
  async handleUserUpdatePasswordEvent(updatedUser) {
    // Send notification email to updated user;
  }
}

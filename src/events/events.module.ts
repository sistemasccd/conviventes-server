import { Module } from '@nestjs/common';
import { UsersListener } from '../users/listeners/users.listener';

@Module({
  providers: [UsersListener],
})
export class EventsModule {}

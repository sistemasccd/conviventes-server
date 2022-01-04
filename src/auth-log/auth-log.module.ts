import { Module } from '@nestjs/common';
import { AuthLogService } from './auth-log.service';
import { AuthLogResolver } from './auth-log.resolver';

@Module({
  providers: [AuthLogResolver, AuthLogService]
})
export class AuthLogModule {}

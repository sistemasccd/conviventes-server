import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { AuthLogService } from './auth-log.service';
import { AuthLog } from './entities/auth-log.entity';

@Resolver(() => AuthLog)
export class AuthLogResolver {
  constructor(private readonly authLogService: AuthLogService) {}

  @Query(() => [AuthLog], { name: 'authLog' })
  findAll() {
    return this.authLogService.findAll();
  }

  @Query(() => AuthLog, { name: 'authLog' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authLogService.findOne(id);
  }
}

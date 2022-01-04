import { Test, TestingModule } from '@nestjs/testing';
import { AuthLogResolver } from './auth-log.resolver';
import { AuthLogService } from './auth-log.service';

describe('AuthLogResolver', () => {
  let resolver: AuthLogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthLogResolver, AuthLogService],
    }).compile();

    resolver = module.get<AuthLogResolver>(AuthLogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

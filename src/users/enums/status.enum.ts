import { registerEnumType } from '@nestjs/graphql';

export enum UserStatusEnum {
  IN_REVIEW,
  ACTIVE,
  BLOCKED,
  UNACTIVE,
}

registerEnumType(UserStatusEnum, {
  name: 'UserStatusEnum',
  description: 'A users statuses.',
  valuesMap: {
    IN_REVIEW: {
      description: 'Created user but not linked with his personal information',
    },
    ACTIVE: {
      description: 'Created and linked with his personal information',
    },
    BLOCKED: {
      description: 'Blocked for bad login, need to recobery his password',
    },
    UNACTIVE: {
      description: 'Blocked for particular reasons',
    },
  },
});

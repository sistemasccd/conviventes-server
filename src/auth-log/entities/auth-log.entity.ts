import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AuthLog {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

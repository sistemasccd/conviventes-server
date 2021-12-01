import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field({ description: 'User id to update' })
  _id: string;

  @Field()
  oldPassword: string;

  @Field()
  newPassword: string;
}

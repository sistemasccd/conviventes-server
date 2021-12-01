import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { UserStatusEnum } from '../enums/status.enum';

@InputType()
export class CreateUserInput {
  @IsEmail(
    {},
    {
      message: 'Error Email',
    },
  )
  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ description: 'Profile picture', nullable: true })
  picture: string;
}

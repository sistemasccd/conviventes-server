import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserStatusEnum } from '../enums/status.enum';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  @Field()
  _id: string;

  @Prop({ required: true })
  @Field()
  password: string;

  @Prop({
    type: [String],
  })
  oldPasswords: String[];

  @Prop({ required: true })
  @Field()
  email: string;

  @Prop({ required: true, enum: UserStatusEnum })
  @Field((type) => UserStatusEnum)
  status: UserStatusEnum;

  @Prop()
  @Field({ description: 'Profile picture', nullable: true })
  picture: string;

  @Prop({ type: Date, default: Date.now })
  @Field()
  createdAt: string;

  @Prop({ type: Date, default: Date.now })
  @Field()
  updatedAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

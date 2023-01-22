import { User } from "@prisma/client";
import { Field, ObjectType } from "type-graphql";

// PE 3/3
@ObjectType()
export class AuthUserOutput {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  token: string;

  @Field()
  expiresAt: Date;

  constructor(user: User, token: string, expiresAt: Date) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;

    this.token = token;
    this.expiresAt = expiresAt;
  }
}

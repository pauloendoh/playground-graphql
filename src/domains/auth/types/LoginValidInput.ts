import { IsString, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class LoginValidInput {
  @Field()
  @IsString({ message: "Username or email is required." })
  usernameOrEmail: string;

  @Field()
  @IsString({ message: "Password is required." })
  @MinLength(6, { message: "Password must have at least 6 characters." })
  password: string;
}

import { IsEmail, IsString, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterValidInput {
  @Field()
  @IsString({ message: "Username is required." })
  @MinLength(6, { message: "Username must have at least 6 characters." })
  username: string;

  @Field()
  @IsEmail(undefined, { message: "Email is required." })
  email: string;

  @Field()
  @IsString({ message: "Password is required." })
  @MinLength(6, { message: "Password must have at least 6 characters." })
  password1: string;

  @Field()
  @IsString({ message: "Password2 is required." })
  @MinLength(6, { message: "Password2 must have at least 6 characters." })
  password2: string;
}

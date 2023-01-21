import { ArrayMaxSize, IsEmail, Length, MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @Length(30, 255)
  description?: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => [String])
  @ArrayMaxSize(30)
  ingredients: string[];
}

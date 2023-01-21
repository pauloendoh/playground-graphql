import { Field } from "type-graphql";
import { Column, ObjectType } from "typeorm";

export function MyRelationFieldColumn<T>(
  relationType: "OneToMany" | "ManyToMany",
  objectType: ObjectType<T>
): PropertyDecorator {
  return (target, key) => {
    if (fieldOptions) Field(fieldOptions)(target, key);
    else Field()(target, key);

    if (columnOptions) Column(columnOptions)(target, key);
    else Column()(target, key);

    OneToMany()(target, key);
    Field(() => [objectType])(target, key);
  };
}

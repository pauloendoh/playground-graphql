import { ObjectType } from "type-graphql";
import { Entity } from "typeorm";

export function MyEntityObjectType(): ClassDecorator {
  return (target) => {
    Entity()(target);
    ObjectType()(target);
  };
}

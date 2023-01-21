import { Field, FieldOptions } from "type-graphql";
import { Column, ColumnOptions } from "typeorm";

export function MyFieldColumn(
  fieldOptions?: FieldOptions,
  columnOptions?: ColumnOptions
): PropertyDecorator {
  return (target, key) => {
    if (fieldOptions) Field(fieldOptions)(target, key);
    else Field()(target, key);

    if (columnOptions) Column(columnOptions)(target, key);
    else Column()(target, key);
  };
}

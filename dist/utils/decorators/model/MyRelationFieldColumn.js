"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRelationFieldColumn = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
function MyRelationFieldColumn(relationType, objectType) {
    return (target, key) => {
        if (fieldOptions)
            (0, type_graphql_1.Field)(fieldOptions)(target, key);
        else
            (0, type_graphql_1.Field)()(target, key);
        if (columnOptions)
            (0, typeorm_1.Column)(columnOptions)(target, key);
        else
            (0, typeorm_1.Column)()(target, key);
        OneToMany()(target, key);
        (0, type_graphql_1.Field)(() => [objectType])(target, key);
    };
}
exports.MyRelationFieldColumn = MyRelationFieldColumn;

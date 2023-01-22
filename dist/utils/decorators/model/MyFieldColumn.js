"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFieldColumn = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
function MyFieldColumn(fieldOptions, columnOptions) {
    return (target, key) => {
        if (fieldOptions)
            (0, type_graphql_1.Field)(fieldOptions)(target, key);
        else
            (0, type_graphql_1.Field)()(target, key);
        if (columnOptions)
            (0, typeorm_1.Column)(columnOptions)(target, key);
        else
            (0, typeorm_1.Column)()(target, key);
    };
}
exports.MyFieldColumn = MyFieldColumn;

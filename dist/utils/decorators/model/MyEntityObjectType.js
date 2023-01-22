"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyEntityObjectType = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
function MyEntityObjectType() {
    return (target) => {
        (0, typeorm_1.Entity)()(target);
        (0, type_graphql_1.ObjectType)()(target);
    };
}
exports.MyEntityObjectType = MyEntityObjectType;

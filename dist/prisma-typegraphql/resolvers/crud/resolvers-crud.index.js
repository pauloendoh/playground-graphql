"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCrudResolver = exports.RecipeCrudResolver = exports.CurrentSavingCrudResolver = void 0;
var CurrentSavingCrudResolver_1 = require("./CurrentSaving/CurrentSavingCrudResolver");
Object.defineProperty(exports, "CurrentSavingCrudResolver", { enumerable: true, get: function () { return CurrentSavingCrudResolver_1.CurrentSavingCrudResolver; } });
var RecipeCrudResolver_1 = require("./Recipe/RecipeCrudResolver");
Object.defineProperty(exports, "RecipeCrudResolver", { enumerable: true, get: function () { return RecipeCrudResolver_1.RecipeCrudResolver; } });
var UserCrudResolver_1 = require("./User/UserCrudResolver");
Object.defineProperty(exports, "UserCrudResolver", { enumerable: true, get: function () { return UserCrudResolver_1.UserCrudResolver; } });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = exports.RecipeRelationsResolver = exports.CurrentSavingRelationsResolver = void 0;
var CurrentSavingRelationsResolver_1 = require("./CurrentSaving/CurrentSavingRelationsResolver");
Object.defineProperty(exports, "CurrentSavingRelationsResolver", { enumerable: true, get: function () { return CurrentSavingRelationsResolver_1.CurrentSavingRelationsResolver; } });
var RecipeRelationsResolver_1 = require("./Recipe/RecipeRelationsResolver");
Object.defineProperty(exports, "RecipeRelationsResolver", { enumerable: true, get: function () { return RecipeRelationsResolver_1.RecipeRelationsResolver; } });
var UserRelationsResolver_1 = require("./User/UserRelationsResolver");
Object.defineProperty(exports, "UserRelationsResolver", { enumerable: true, get: function () { return UserRelationsResolver_1.UserRelationsResolver; } });

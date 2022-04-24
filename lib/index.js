"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example = void 0;
var three_1 = require("three");
var example = function (name) {
    var obj = new three_1.Object3D();
    obj.name = name;
    return obj;
};
exports.example = example;

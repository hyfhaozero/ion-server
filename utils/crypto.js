"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.md5 = exports.sha512 = void 0;
var crypto_1 = require("crypto");
var sha512 = function (data) {
    return (0, crypto_1.createHash)('sha512')
        .update(data)
        .digest('hex');
};
exports.sha512 = sha512;
var md5 = function (data) {
    return (0, crypto_1.createHash)("md5")
        .update(data)
        .digest("hex");
};
exports.md5 = md5;

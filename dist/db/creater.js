"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pocketbase_1 = __importDefault(require("pocketbase"));
const config_reader_1 = require("../services/config_reader");
const pb = new pocketbase_1.default(config_reader_1.db_url);
const authData = await pb.collection('users').authWithPassword('YOUR_EMAIL', 'YOUR_PASSWORD');
;
async function create(data) {
    if (data.password == data.passwordConfirm) {
        await pb.collection(config_reader_1.db_name).create(data);
        return true;
    }
    else {
        return false;
    }
}
exports.default = create;

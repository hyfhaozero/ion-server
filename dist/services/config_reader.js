"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isdev = exports.db_admin_pwd = exports.db_admin_email = exports.db_name = exports.db_url = void 0;
const config_json_1 = __importDefault(require("../config.json"));
// Define configurations
const db_url = config_json_1.default.database_url;
exports.db_url = db_url;
const db_name = config_json_1.default.database_name;
exports.db_name = db_name;
const db_admin_email = config_json_1.default.db_admin_email;
exports.db_admin_email = db_admin_email;
const db_admin_pwd = config_json_1.default.db_admin_password;
exports.db_admin_pwd = db_admin_pwd;
const isdev = config_json_1.default.isdev;
exports.isdev = isdev;

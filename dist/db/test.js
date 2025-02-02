"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pocketbase_1 = __importDefault(require("pocketbase"));
const pb = new pocketbase_1.default('http://127.0.0.1:8090');
const authData = pb.collection('_superusers').authWithPassword('hyfhao@outlook.com', 'Hyf123456.');
const data = {
    "password": "12345678",
    "passwordConfirm": "12345678",
    "email": "test@example.com",
    "emailVisibility": true,
    "verified": true
};
// console.log(write(data))
console.log(pb.authStore.token);

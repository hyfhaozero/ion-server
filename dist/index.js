"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const token_ts_1 = __importDefault(require("./auth/token.ts")); // 根据实际路径引入
const app = (0, express_1.default)();
// 使用 token 路由
app.use('/api', token_ts_1.default);
// 启动服务器
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

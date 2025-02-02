import express from "express";
import tokenRouter from "./auth/token"; // 根据实际路径引入

const app = express();

// 使用 token 路由
app.use("/api/auth", tokenRouter);

// 启动服务器
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import PocketBase from "pocketbase";
import {
  db_url,
  db_superuser_email,
  db_superuser_pwd,
  db_name,
} from "../services/config_reader";

// 创建 PocketBase 实例
const pb = new PocketBase(db_url);
// 定义数据对象的接口

async function view(id: string) {
  try {
    // 先进行管理员登录
    const authData = await pb
      .collection("_superusers")
      .authWithPassword(db_superuser_email, db_superuser_pwd);
    const res = await pb.collection(db_name).getOne(id);
    return res;
  } catch (error) {
    console.error("创建记录时出现错误:", error);
    return false;
  }
}

export default view;

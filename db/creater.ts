import PocketBase from 'pocketbase';
import { db_url, db_superuser_email, db_superuser_pwd, db_name } from '../services/config_reader';

// 创建 PocketBase 实例
const pb = new PocketBase(db_url);
// 定义数据对象的接口
interface type_data_object {
  email: string;
  password: string;
  passwordConfirm: string;
  emailVisibility?: boolean;
  verified?: boolean;
}

// 封装 create 函数
async function create(data: type_data_object) {
  try {
    // 先进行管理员登录
    const authData = await pb.collection("_superusers").authWithPassword(db_superuser_email, db_superuser_pwd);
    // 检查密码和确认密码是否一致
    if (data.password === data.passwordConfirm) {
      // 创建记录
      await pb.collection(db_name).create(data);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('创建记录时出现错误:', error);
    return false;
  }
}

export default create;

import config from "../config.json";

// Define configurations
const db_url: string = config.database_url;
const db_name: string = config.database_name;
const db_superuser_email: string = config.db_superuser_email;
const db_superuser_pwd: string = config.db_superuser_password;
const isdev: boolean = config.isdev;
// export configurations
export { db_url, db_name, db_superuser_email, db_superuser_pwd, isdev };

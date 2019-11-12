const env = process.env.NODE_ENV; // 环境变量

let MYSQL_CONFIG;

// 本地开发环境
if (env === "dev") {
  MYSQL_CONFIG = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "my_boke"
  };
}

// 线上生产环境
if (env === "production") {
  MYSQL_CONFIG = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "my_boke"
  };
}

module.exports = { MYSQL_CONFIG };

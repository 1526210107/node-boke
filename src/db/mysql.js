const { MYSQL_CONFIG } = require('../config/db');
const mysql = require('mysql');

const con = mysql.createConnection( MYSQL_CONFIG );

// 开始连接
con.connect();

// 执行sql语句
function exec(sql){
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if( err ){
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

module.exports = {exec};
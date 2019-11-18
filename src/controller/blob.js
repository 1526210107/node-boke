const {exec} = require('../db/mysql');

// 查询博客列表
const getList = (author, keyword) => {
  let sql = 'select * from blogs where 1=1';
  if( author ){
    sql += ` and author='${author}'`;
  }
  if( keyword ){
    sql += ` and title='${keyword}'`;
  }
  sql += ' order by createtime desc';
  return exec(sql);
}

// 查询博客详情
const getDetail = id => {
  let sql = 'select * from blogs where id=' + id;
  return exec( sql ).then( rows => {
    return rows[0]
  });
}

// 新增博客
const addBoke = params => {
  let { title, content, author } = params;
  let sql = `insert into blogs(title, content, author) values('${title}', '${content}', '${author}')`;
  return exec(sql).then( result => {
    return {
      id: result.insertId
    }
  })
}

// 更新博客
const updateBoke = params => {
  let { id, title, content, author } = params;
  const sql = `update blogs set title='${title}', content='${content}' where id=${id} and author='${author}'`;
  return exec(sql).then( result => {
    if( result.affectedRows > 0 ){
      return true;
    }
    return false;
  });
}

// 删除博客
const delBoke = params => {
  const { id, author } = params;
  const sql = `delete from blogs where id=${id} and author='${author}'`;
  return exec(sql).then( result => {
    if( result.affectedRows > 0 ){
      return true;
    }
    return false;
  });
}



module.exports = {
  getList,
  getDetail,
  addBoke,
  updateBoke,
  delBoke
}

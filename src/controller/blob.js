const {exec} = require('../db/mysql');

// 查询博客列表
const getList = (author, keyword) => {
  let sql = 'select * from blogs where 1=1';
  if( author ){
    sql += `and author='${author}'`;
  }
  if( keyword ){
    sql += `and title='${keyword}'`;
  }
  sql += ' order by createtime desc';
  return exec(sql);
}

// 查询博客详情
const getDetail = id => {
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    author: 'zhangsan',
    createTime: 1573472666414
  }
}

// 新增博客
const addBoke = params => {
  return {
    suc: '新增成功'
  }
}

// 更新博客
const updateBoke = params => {
  return {
    suc: '更新成功'
  }
}

// 删除博客
const delBoke = params => {
  return {
    suc: '删除成功'
  }
}



module.exports = {
  getList,
  getDetail,
  addBoke,
  updateBoke,
  delBoke
}

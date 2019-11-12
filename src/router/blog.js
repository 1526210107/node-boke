const { SuccessModel, ErrorModel } = require('../model/resModel');
const { getList, getDetail, addBoke, updateBoke, delBoke } = require('../controller/blob');

const handlerBlogRouter = (req, res) => {
  const method = req.method;
  const path = req.path;
  
  // 获取博客列表
  if( method === 'GET' && path === '/api/blog/list' ){
    const author = req.query.author || '';
    const keyword = req.query.keyword || ''; 
    return getList(author, keyword).then( listData => {
      return new SuccessModel(listData);
    })
  }

  // 获取博客详情
  if( method === 'GET' && path === '/api/blog/detail'){
    const id = req.query.id || '';
    const data = getDetail(id);
    return new SuccessModel(data);
  }

  // 新增博客
  if( method === 'POST' && path === '/api/blog/new' ){
    const params = req.body;
    const body = addBoke(params);
    return new SuccessModel(body);
  }

  // 更新一篇博客
  if( method === 'POST' && path === '/api/blog/update' ){
    const params = req.body;
    const data = updateBoke( params );
    return new SuccessModel(data);
  }

  // 删除一篇博客 
  if( method === 'POST' && path === '/api/blog/del' ){
    const params = req.body;
    const data = delBoke(params);
    return new SuccessModel(data);
  }
}

module.exports = handlerBlogRouter;
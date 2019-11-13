const { SuccessModel, ErrorModel } = require("../model/resModel");
const {
  getList,
  getDetail,
  addBoke,
  updateBoke,
  delBoke
} = require("../controller/blob");

const handlerBlogRouter = (req, res) => {
  const method = req.method;
  const path = req.path;

  // 获取博客列表
  if (method === "GET" && path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    return getList(author, keyword).then(listData => new SuccessModel(listData) );
  }

  // 获取博客详情
  if (method === "GET" && path === "/api/blog/detail") {
    const id = req.query.id || "";
    return getDetail(id).then(result => new SuccessModel(result));
  }

  // 新增博客
  if (method === "POST" && path === "/api/blog/new") {
    const params = req.body;
    return addBoke(params).then( result => new SuccessModel(result) );
  }

  // 更新一篇博客
  if (method === "POST" && path === "/api/blog/update") {
    const author = '张三';
    const params = req.body;
    params.author = author;
    return updateBoke(params).then( result => new SuccessModel(result) );
  }

  // 删除一篇博客
  if (method === "POST" && path === "/api/blog/del") {
    const params = req.body;
    const data = delBoke(params);
    return new SuccessModel(data);
  }
};

module.exports = handlerBlogRouter;

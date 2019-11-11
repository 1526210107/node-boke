const handlerBlogRouter = require('./src/router/blog');
const handlerUserRouter = require('./src/router/user');
const serverHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  // 处理博客请求
  const blogData = handlerUserRouter(req, res);
  if( blogData ){
    res.end( JSON.stringify(blogData) );
    return ;
  }

  // 处理博客请求
  const userData = handlerBlogRouter(req, res);
  if( userData ){
    res.end( JSON.stringify(userData) );
    return ;
  }

  // 未命中路由，返回404
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("<h1>404 Not Found</h1><br/>");
  res.end();

  // const resData = {
  //   name: '服务服务服务',
  //   site: 'imooc',
  //   env: process.env.NODE_ENV
  // }

  // res.end( JSON.stringify(resData) );
}
module.exports = serverHandler;
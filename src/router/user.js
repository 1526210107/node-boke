const handlerUserRouter = (req, res) => {
  const method = req.method;
  const path = req.path;

  // 登录接口
  if( method === 'GET' && path === '/api/user/login' ){
    return {
      msg: '这是登录的接口'
    }
  }
}

module.exports = handlerUserRouter;
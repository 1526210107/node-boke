const querystring = require('querystring')
const handlerBlogRouter = require('./src/router/blog')
const handlerUserRouter = require('./src/router/user')

// 处理POST请求传递的参数
const formatPostData = req => {
  return new Promise((resolve, reject) => {
    let postData = ''
    req.on('data', chunk => {
      postData += chunk
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return;
      }
      if (req.headers['content-type'] !== 'application/json') {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
}

const serverHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  const url = req.url
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[1])

  formatPostData(req).then(postData => {
    req.body = postData
    // 处理博客请求
    const blogData = handlerUserRouter(req, res)
    if (blogData) {
      res.end(JSON.stringify(blogData))
      return
    }

    // 处理博客请求
    const userData = handlerBlogRouter(req, res)
    if (userData) {
      res.end(JSON.stringify(userData))
      return;
    }

    // 未命中路由，返回404
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>404 Not Found</h1><br/>')
    res.end()
  })
}
module.exports = serverHandler

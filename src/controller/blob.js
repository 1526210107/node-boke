// 查询博客列表
const getList = (author, keyword) => {
  // 先返回假数据，但是格式是正确的
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      author: 'zhangsan',
      createTime: 1573472666414
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      author: 'lisi',
      createTime: 1573472666414
    }
  ]
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

module.exports = {
  getList,
  getDetail
}

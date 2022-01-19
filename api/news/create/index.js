let data = require('@begin/data')
const { uuid } = require('uuidv4')

exports.handler = async function http(request) {
  console.log('Begin API called with request:', request.routeKey)
  const body = JSON.parse(request.body)
  console.log('Body:', body)
  
  await data.set({
    key: uuid(),
    table: 'news',
    title: body.title,
    content: body.content,
  })

  const news = await data.get({
    table: 'news',
  })

  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    type: 'text/html; charset=utf8',
    'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    body: JSON.stringify({ news })
  }
}

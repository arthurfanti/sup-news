let data = require('@begin/data')

exports.handler = async function http(request) {
  console.log('Begin API called with request:', request.routeKey)
  let news = await data.get({
    table: 'news',
  })
  console.log('News:', news)
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

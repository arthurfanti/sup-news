@app
begin-app

@http
/api
	method get
	src /api

/api/news
	method get
	src /api/news

/api/news/create
	method post
	src /api/news/create

@static
folder build
spa true

@tables
data
	scopeID *String
	dataID **String
	ttl TTL
var app = require('express')

app.get('/', function(res, req) {
    res.sendfile('./syracuse_results.txt')
})

app.listen(process.env.PORT)
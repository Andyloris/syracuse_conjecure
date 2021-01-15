var app = require('express')(),
    PythonShell = require('python-shell')

app.get('/', function(res, req) {
    PythonShell.run('syracuse.py', function(err, Results) {
        if (err) throw err;
        res.send(Results)
    })
})

app.listen(process.env.PORT)
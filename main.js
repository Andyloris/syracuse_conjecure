var app = require('express')(),
    PythonShell = require('python-shell')
pyshell = new PythonShell.PythonShell('syracuse.py')
app.get('/', function(res, req) {
    pyshell.on('message', (message) => {
        res.send(message)
    })
})

app.listen(process.env.PORT)
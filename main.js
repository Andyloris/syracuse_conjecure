var app = require('express')(),
    PythonShell = require('python-shell')
pyshell = new PythonShell.PythonShell('syracuse.py')
app.get('/', function(req, res) {
    pyshell.on('message', (message) => {
        res.setHeader('Content-Type', 'text/plain')
        res.send(message)
    })
})

app.listen(process.env.PORT)
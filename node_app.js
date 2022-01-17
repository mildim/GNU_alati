//imports
const express = require('express')
const app = express()
const port = 3000

//Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/console.html', (req, res) => {
    res.sendFile(__dirname + '/views/console.html')
})
app.get('/bash.html', (req, res) => {
    res.sendFile(__dirname + '/views/bash.html')
})
app.get('/gcc.html', (req, res) => {
    res.sendFile(__dirname + '/views/gcc.html')
})
app.get('/make.html', (req, res) => {
    res.sendFile(__dirname + '/views/make.html')
})
app.get('/gdb.html', (req, res) => {
    res.sendFile(__dirname + '/views/gdb.html')
})
app.get('/quiz.html', (req, res) => {
    res.sendFile(__dirname + '/views/quiz.html')
})


//Listen on port 3000
app.listen(port, () => console.info(`Listrning on port ${port}`))
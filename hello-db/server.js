const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const apiRoutes = require('./src/routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.get('/', (req, res) => {res.send('test')})
app.use('/api/v1',apiRoutes)

io.on('connection', (socket) => {
    console.log('user connected')
    socket.on('msg', (data) => {
        console.log('msg', data)
        io.sockets.emit('newMsgRecieve', data)
    })
})

server.listen(3002,()=>{
    console.log('->Ready')
})
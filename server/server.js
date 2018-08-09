const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const {generateMessage} = require('./utils/message')
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
var app = express()
var server = http.createServer(app)
var io = socketIO(server)

console.log(publicPath)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected')

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

    socket.on('createMessage', (message) => {
        console.log('message', message)
        io.emit('newMessage', generateMessage(message.from. message.text))
    })

    socket.on('disconnect', () => {
        console.log("User was disconnected")
    })
})

server.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

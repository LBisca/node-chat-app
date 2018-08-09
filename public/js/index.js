var socket = io()

socket.on('connect', function () {
    console.log('Connect to server')

    socket.emit('createMessage', {
        to: 'Example',
        text: 'Holá'
    })
})

socket.on('disconnect', function () {
    console.log("Disconnected from the server")
})

socket.on('newMessage', function (message) {
    console.log('New Message', message)
})

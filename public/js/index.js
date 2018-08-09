var socket = io()

socket.on('connect', function () {
    console.log('Connect to server')
})

socket.on('disconnect', function () {
    console.log("Disconnected from the server")
})

socket.on('newMessage', function (message) {
    console.log('New Message', message)
})

socket.emit('createMessage', {
    from: 'Tony',
    text: 'Holá'
}, function() {
    console.log('Got it')
})
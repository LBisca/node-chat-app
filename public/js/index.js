var socket = io()

socket.on('connect', function () {
    console.log('Connect to server')

    socket.emit('createMessage', {
        to: 'Example',
        text: 'Holá'
    })

    // socket.emit('createEmail', {
    //     to: 'email@example.com',
    //     text: 'Hey. This is me... MARIO'
    // })
})

socket.on('disconnect', function () {
    console.log("Disconnected from the server")
})

socket.on('newMessage', function (message) {
    console.log('New Message', message)
})

// socket.on('newEmail', function (email) {
//     console.log('New Email', email)
// })

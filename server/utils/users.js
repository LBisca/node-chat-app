[{
    id: '#12assdawkosjdoagf',
    name: 'Lucas',
    room: 'The Office Fans'
}]

class Users {
    constructor () {
        this.users = []
    }

    addUser (id, name, room) {
        var user = {id, name, room}
        this.users.push(user)
        return user
    }

}

module.exports = {Users}
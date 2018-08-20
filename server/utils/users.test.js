const expect = require('expect')

const {Users} = require('./users')

describe('Users', () => {

    it('Should add a new User', () => {
        var users = new Users()
        var user = {
            id: '123',
            name: 'Lucas',
            room: 'Nutella'
        }
        var resUser = users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([user])
    })
})
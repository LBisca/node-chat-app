const expect = require('expect')

const { Users } = require('./users')

describe('Users', () => {
    var users

    beforeEach(() => {
        users = new Users()
        users.users = [{
            id: '1',
            name: 'Robert',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Lucas',
            room: 'Nutella'
        }, {
            id: '3',
            name: 'Carlos',
            room: 'Node Course'
        }]
    })

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

    it('Should remove a user', () => {
        var userId = '1'
        var user = users.removeUser(userId)

        expect(user.id).toBe(userId)
        expect(users.users.length).toBe(2)
    })

    it('Should not remove a user', () => {
        var userId = '99'
        var user = users.removeUser(userId)

        expect(user).toNotExist
        expect(users.users.length).toBe(3)
    })

    it('Should find user', () => {
        var userId = '2'
        var user = users.getUser(userId)

        expect(user.id).toBe(userId)
    })

    it('Should not find user', () => {
        var userId = '99'
        var user = users.getUser(userId)

        expect(user).toNotExist()
    })

    it('Should return names for Node Course', () => {
        var userList = users.getUserList('Node Course')

        expect(userList).toEqual(['Robert', 'Carlos'])
    })

    it('Should return names for Nutella', () => {
        var userList = users.getUserList('Nutella')

        expect(userList).toEqual(['Lucas'])
    })
})
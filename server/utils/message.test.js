var expect = require('expect')

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen'
    var text = 'Some message'
    var message = generateMessage(from, text)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({from, text})
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'dab'
    var latitude = 12
    var longitude = 14
    var url= 'http://www.google.com/maps?q=12,14'
    var message = generateLocationMessage(from, latitude, longitude)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({from, url})
  })
})
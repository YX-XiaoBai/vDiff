const { getSalt } = require('../lib/getSalt')

describe('Test Function', () => {
  it('Every salt value is unique', async() => {
    var salt1 = getSalt()
    var salt2 = getSalt()
    expect(salt1).not.toBe(salt2)
  })
  it('Get the type of salt value is string', async() => {
    expect(getSalt()).resolves.toBe('string')
  })
});
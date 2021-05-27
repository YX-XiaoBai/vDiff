const {
  head,
  last,
} = require('../lib/utils')

describe('Test functions', () => {
  it('get the first element', async () => {
    var array = ['1', '2', '3', '5']
    expect(head(array)).resolves.toBe('1')
  })
  it('get the last element', async () => {
    var array = ['1', '2', '3', '5']
    expect(last(array)).resolves.toBe('5')
  })
});
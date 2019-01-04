var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('output of 5! equals to 120', ()=> {
      assert.equal(Calculate.factorial(5), 120)
    })
    it('returns 1 when you pass in 0.', () => {
       assert.equal(Calculate.factorial(0), 1)
    })
  });
});

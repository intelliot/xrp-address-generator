'use strict'

const {RippleAPI} = require('ripple-lib')

const api = new RippleAPI()

const filterInt = function(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

const count = filterInt(process.argv[2]) || 1

for (let i = 0; i < count; i++) {
  const address = api.generateAddress()
  Object.assign(address, api.deriveKeypair(address.secret))
  console.log(address)
}

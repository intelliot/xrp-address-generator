'use strict'

const {RippleAPI} = require('ripple-lib')

const api = new RippleAPI()

const filterInt = function(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

const count = filterInt(process.argv[2]) || 1

const addresses = []
for (let i = 0; i < count; i++) {
  const address = api.generateAddress()
  Object.assign(address, api.deriveKeypair(address.secret))
  addresses.push(address)
}

console.log(JSON.stringify(addresses, null, 2))

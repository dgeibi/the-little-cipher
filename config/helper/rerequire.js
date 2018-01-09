const { resolve } = require('path')

module.exports = any => {
  if (typeof any === 'string' && any) {
    // eslint-disable-next-line
    return require(resolve(any))
  }
  return any
}

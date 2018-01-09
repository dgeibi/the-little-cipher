module.exports = conf => {
  const type = typeof conf
  if (!conf || !(type === 'object' || type === 'function')) {
    throw Error('baseConfig should be a function or a object')
  }
}

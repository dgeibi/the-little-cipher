const generateScopedName = require('./generateScopedName')

const getLocalIdent = (context, localIdentName, localName) =>
  generateScopedName(localName, context.resourcePath)

module.exports = getLocalIdent

const nameonly = x => x.replace(/\..+$/, '')

const generateScopedName = (localName, resourcePath) => {
  const componentName = resourcePath
    .split('/')
    .slice(-2)
    .map(nameonly)
    .join('-')
  return `${componentName}_${localName}`
}

module.exports = generateScopedName

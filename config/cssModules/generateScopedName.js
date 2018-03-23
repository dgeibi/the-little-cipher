const nameonly = x => x.replace(/\..+$/, '')

const sep = /\/|\\/

const generateScopedName = (localName, resourcePath) => {
  const componentName = resourcePath
    .split(sep)
    .slice(-2)
    .map(nameonly)
    .join('-')
  return `${componentName}_${localName}`
}

module.exports = generateScopedName

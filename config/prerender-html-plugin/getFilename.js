function getFilename(path) {
  if (path === '*') return '404.html'
  let filename = path.replace(/^\/+/, '')
  if (/\.html?$/.test(filename)) {
    return filename
  }
  if (filename === '') return 'index.html'
  filename = filename.replace(/\/*$/, '')
  filename += '/index.html'
  return filename
}
module.exports = getFilename

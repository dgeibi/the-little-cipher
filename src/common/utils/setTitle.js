export default (title) => {
  if (global.document) {
    global.document.title = `${title} - The Little Cipher`
  }
}

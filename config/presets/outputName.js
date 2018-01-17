module.exports = ({ chunkhash } = {}) => {
  if (chunkhash) {
    return {
      output: {
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].js',
      },
    }
  }

  return {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
  }
}

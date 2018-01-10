module.exports = alias =>
  alias && {
    resolve: {
      alias,
    },
  }

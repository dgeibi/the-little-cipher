module.exports = {
  plugin: x => ({
    plugins: [x],
  }),
  rule: rule => ({
    module: {
      rules: [rule],
    },
  }),
  alias: alias =>
    alias && {
      resolve: {
        alias,
      },
    },
}

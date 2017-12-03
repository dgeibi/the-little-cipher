// copy from https://github.com/dvajs/babel-plugin-dva-hmr/blob/master/src/index.js
module.exports = modelPaths =>
  modelPaths
    .map(modelPath => `
if (module.hot) {
  const model = require('${modelPath}').default;
  const namespace = model.namespace;
  module.hot.accept('${modelPath}', () => {
    try {
      app.unmodel(namespace);
      const model = require('${modelPath}').default;
      app.model(model);
    } catch(e) { console.error(e); }
  });
}
`)
    .join('\n')

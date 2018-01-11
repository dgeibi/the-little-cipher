const { Helmet } = require('react-helmet')
const { renderToString } = require('react-dom/server')
const { createElement } = require('react')

const render = App => {
  const bodyContent = renderToString(createElement(App))
  const helmet = Helmet.renderStatic()
  return { bodyContent, helmet }
}

module.exports = render

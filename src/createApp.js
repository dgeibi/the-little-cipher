import dva from 'dva'
import createLoading from 'dva-loading'
import hot from 'dva-hot'
import createHistory from './createHistory'

function createApp({ pathname, staticContext, container } = {}) {
  const app = dva({
    ...createLoading(),
    history: createHistory(pathname),
  })

  const wrapModel = model => {
    if (process.env.SSR) {
      return Object.assign({}, model)
    }
    return model
  }

  app.model(wrapModel(require('./models/caser').default))
  app.model(wrapModel(require('./models/hill').default))
  app.model(wrapModel(require('./models/playfair').default))

  if (process.env.SSR) {
    app.router(require('./ssr/makeRouter').default(pathname, staticContext))
  } else {
    app.router(require('./client/router').default)
  }

  if (process.env.SSR) {
    return app.start()
  }

  if (process.env.NODE_ENV === 'development' && module.hot) {
    hot.patch(app).start(container)
  } else {
    const { hydrate } = require('react-dom')
    const { createElement } = require('react')
    hydrate(createElement(app.start()), document.querySelector(container))
  }

  return null
}

export default createApp

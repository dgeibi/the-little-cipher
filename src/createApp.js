import dva from 'dva'
import createLoading from 'dva-loading'
import hot from 'dva-hot'
import createHistory from './createHistory'

function createApp({ pathname, staticContext } = {}) {
  const app = dva({
    ...createLoading(),
    history: createHistory(pathname),
  })

  hot.patch(app)

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

  return app.start()
}

export default createApp

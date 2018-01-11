import React from 'react'
import ReactDOM from 'react-dom'

const pass = x => x

let app
let hmrRender
let defaultContainer = '#root'

function shouldReload() {
  return app && hmrRender
}

const hot = {
  app(inst, container) {
    if (process.env.NODE_ENV !== 'production' && module.hot) {
      if (!inst) {
        throw Error('symtax: hot.app(app, "#root")')
      }
      app = inst
      defaultContainer = container
      console.log('[HMR] inited with dva-hot')
      app.use({
        onHmr(render) {
          hmrRender = render
        },
      })
    }
    return inst
  },

  model(sourceModule) {
    if (process.env.NODE_ENV !== 'production' && sourceModule.hot) {
      return model => {
        let { namespace } = model
        sourceModule.hot.accept()
        if (shouldReload()) {
          try {
            app.model(model)
          } catch (e) {
            console.error('error', e)
          }
        }
        sourceModule.hot.dispose(() => {
          if (namespace !== undefined) {
            app.unmodel(namespace)
            namespace = undefined
          }
        })
        return model
      }
    }
    return pass
  },

  router(sourceModule) {
    if (process.env.NODE_ENV !== 'production' && sourceModule.hot) {
      return (router, container) => {
        sourceModule.hot.accept()
        if (shouldReload()) {
          const renderException = error => {
            const RedBox = require('redbox-react')
            const selector = container || defaultContainer || 'body'
            ReactDOM.render(
              React.createElement(RedBox, { error }),
              document.querySelector(selector)
            )
          }
          const newRender = x => {
            try {
              hmrRender(x)
            } catch (error) {
              console.error('error', error)
              renderException(error)
            }
          }
          newRender(router)
        }
        return router
      }
    }
    return pass
  },
}

export default hot

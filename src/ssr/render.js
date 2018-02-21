import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import React from 'react'
import createApp from '../createApp'

const render = pathname => {
  const App = createApp({ pathname })
  const bodyContent = renderToString(<App />)
  const helmet = Helmet.renderStatic()

  return { bodyContent, helmet }
}

export default render

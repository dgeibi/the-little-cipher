import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import React from 'react'

const render = App => {
  const bodyContent = renderToString(<App />)
  const helmet = Helmet.renderStatic()
  return { bodyContent, helmet }
}

export default render

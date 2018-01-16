import { hydrate, render } from 'react-dom'
import { createElement } from 'react'
import hot from 'dva-hot'
import './polyfill'
import './index.css'
import createApp from '../createApp'

const renderMethod =
  process.env.NODE_ENV === 'development' && module.hot ? render : hydrate

renderMethod(createElement(createApp()), hot.setContainer('#root'))

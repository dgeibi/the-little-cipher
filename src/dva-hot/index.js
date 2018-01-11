let hot // eslint-disable-line

if (process.env.NODE_ENV !== 'production' && module.hot) {
  hot = require('./dva-hot-dev').default
} else {
  hot = require('./dva-hot-prod').default
}

export default hot

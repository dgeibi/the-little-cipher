import createServer from './createServer'
import createHotMiddleware from './createHotMiddleware'
import config from '../../config/webpack.client.dev'

process.env.HOST = '0.0.0.0'
createHotMiddleware(config).then(createServer)

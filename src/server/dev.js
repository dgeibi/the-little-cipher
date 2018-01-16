import createServer from './createServer'
import createHotMiddleware from './createHotMiddleware'
import config from '../../config/webpack.client.dev'

createHotMiddleware(config).then(createServer)

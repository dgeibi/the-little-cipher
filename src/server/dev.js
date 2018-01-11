import createServer from './createServer'
import createHotMiddleware from './createHotMiddleware'

createHotMiddleware().then(createServer)

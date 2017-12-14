import createServer from './createServer'
import createHotMiddleware from '../webpack/createHotMiddleware'

createHotMiddleware().then(createServer)

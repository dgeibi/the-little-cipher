import express from 'express'
import compression from 'compression'
import multer from 'multer'
import { resolve } from 'path'
import playfair from './playfair'

const upload = multer({ dest: 'uploads/' })

const app = express()
const DEV = process.env.NODE_ENV === 'development'
const STATIC_DIR = '../static'

app.use(compression())

if (DEV) {
  app.use(require('../webpack/hotMiddleware').default)
} else {
  app.use('/static', express.static(resolve(__dirname, STATIC_DIR)))
  app.get('*', require('./ssr').default)
}

app.post('/playfair', upload.single('plaintext'), playfair)

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Serving on http://localhost:${server.address().port}`)
})

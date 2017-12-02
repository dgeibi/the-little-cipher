import express from 'express'
import compression from 'compression'
import multer from 'multer'
import { resolve } from 'path'
import playfair from './playfair'
import notFound from './notFound'

const upload = multer({ dest: 'uploads/' })

const DEV = process.env.NODE_ENV === 'development'
const STATIC_DIR = '../static'

const main = async () => {
  const app = express()
  app.use(compression())
  if (DEV) {
    const hotMiddleware = await require('../webpack/createHotMiddleware').default()
    app.use(hotMiddleware)
  } else {
    app.use(express.static(resolve(__dirname, STATIC_DIR)))
  }
  // playfair api
  app.post('/playfair', upload.single('plaintext'), playfair)

  // handle Not Found
  app.use(notFound)

  const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Serving on http://localhost:${server.address().port}`)
  })
}

main()

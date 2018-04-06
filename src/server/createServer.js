import express from 'express'
import compression from 'compression'
import multer from 'multer'
import os from 'os'
import path from 'path'
import playfair from './playfair'
import notFound from './notFound'

export default function createServer(staticMiddleware) {
  const upload = multer({ dest: path.join(os.tmpdir(), 'uploads') })
  const app = express()
  app.use(compression())

  app.use(staticMiddleware)

  // playfair api
  app.post('/playfair', upload.array(), playfair)

  // handle Not Found
  app.use(notFound)

  const server = app.listen(
    process.env.PORT || 3000,
    process.env.HOST || 'localhost',
    () => {
      const { port, address } = server.address()
      console.log(`Serving on http://${address}:${port}`)
    }
  )

  return server
}

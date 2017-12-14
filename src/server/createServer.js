import express from 'express'
import compression from 'compression'
import multer from 'multer'
import playfair from './playfair'
import notFound from './notFound'

export default function createServer(staticMiddleware) {
  const upload = multer({ dest: 'uploads/' })
  const app = express()
  app.use(compression())

  app.use(staticMiddleware)

  // playfair api
  app.post('/playfair', upload.single('plaintext'), playfair)

  // handle Not Found
  app.use(notFound)

  const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Serving on http://localhost:${server.address().port}`)
  })

  return server
}

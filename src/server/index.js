import express from 'express'
import compression from 'compression'
import multer from 'multer'
import { readFile } from 'fs'
import { resolve } from 'path'
import { isPlainFile, plainPath } from '../util'
import playfair from './playfair'

const upload = multer({ dest: 'uploads/' })

const app = express()
const DEV = process.env.NODE_ENV === 'development'
const STATIC_DIR = '../static'

app.use(compression())
if (DEV) {
  app.use(require('../webpack/hotMiddleware').default)
} else {
  const render = require('../render').default
  app.use('/static', express.static(resolve(__dirname, STATIC_DIR)))
  app.get('*', (req, res, next) => {
    if (req.accepts('html')) {
      const context = {}
      const path = plainPath(req.url)
      const content = render(path, context)
      if (context.status === 404) {
        res.status(404)
      }
      res.type('html')
      res.send(content)
    } else {
      next()
    }
  })
}

app.post('/playfair', upload.single('plaintext'), (req, res) => {
  if (req.file && isPlainFile(req.file)) {
    readFile(req.file.path, (err, buffer) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return
      }
      res.status(200).json(playfair(req.body.secret, buffer.toString()))
    })
  } else if (req.body.plaintext) {
    res.status(200).json(playfair(req.body.secret, req.body.plaintext))
  } else {
    res.sendStatus(400)
  }
})

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Serving on http://localhost:${server.address().port}`)
})

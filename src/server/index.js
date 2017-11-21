import express from 'express'
import multer from 'multer'
import { readFile } from 'fs'
import { isPlainFile } from '../util'
import playfair from './playfair'

const upload = multer({ dest: 'uploads/' })

const app = express()
const DEV = process.env.NODE_ENV === 'development'

if (DEV) {
  const webpack = require('webpack')
  const webpackConfig = require('../../webpack.config')()
  const compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }))

  app.use(require('webpack-hot-middleware')(compiler))
} else {
  app.use(express.static('public'))
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

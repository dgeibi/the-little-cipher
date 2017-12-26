import express from 'express'
import { join } from 'path'
import createServer from './createServer'

createServer(
  express.static(join(__dirname, '../static'), {
    maxAge: '365d',
    setHeaders: setCustomCacheControl,
  })
)

function setCustomCacheControl(res, path) {
  if (express.static.mime.lookup(path) === 'text/html') {
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

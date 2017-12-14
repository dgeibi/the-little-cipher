import express from 'express'
import { join } from 'path'
import createServer from './createServer'

createServer(express.static(join(__dirname, '../static')))

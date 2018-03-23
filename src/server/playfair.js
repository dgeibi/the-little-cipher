import { readFile } from 'fs'
import { playfair, cipherString, originalString } from '../core/cipher/playfair'

const uniqDiff = diff => {
  const origins = new Set()
  return diff.filter(({ origin }) => {
    if (origins.has(origin)) return false
    origins.add(origin)
    return true
  })
}

const getResults = (secret, plaintext, decodeMode) => {
  const { diff, square } = playfair(secret, plaintext, decodeMode === 'true')
  return {
    square,
    diff: uniqDiff(diff),
    cipherText: cipherString(diff),
    plainText: originalString(diff),
  }
}

const playfairMiddleware = (req, res) => {
  if (req.file) {
    readFile(req.file.path, (err, buffer) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return
      }
      res
        .status(200)
        .json(getResults(req.body.secret, buffer.toString(), req.body.decodeMode))
    })
  } else if (req.body.plaintext) {
    res
      .status(200)
      .json(getResults(req.body.secret, req.body.plaintext, req.body.decodeMode))
  } else {
    res.sendStatus(400)
  }
}

export default playfairMiddleware

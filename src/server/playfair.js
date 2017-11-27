import { readFile } from 'fs'
import { playfair, cipherString, originalString } from '../cipher/playfair'
import { isPlainFile } from '../util'

const getResults = (secret, plaintext) => {
  const { diff, square } = playfair(secret, plaintext)

  const cipherText = cipherString(diff)
  const plainText = originalString(diff)

  return {
    diff,
    square,
    cipherText,
    plainText,
  }
}

const playfairMiddleware = (req, res) => {
  if (req.file && isPlainFile(req.file)) {
    readFile(req.file.path, (err, buffer) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return
      }
      res.status(200).json(getResults(req.body.secret, buffer.toString()))
    })
  } else if (req.body.plaintext) {
    res.status(200).json(getResults(req.body.secret, req.body.plaintext))
  } else {
    res.sendStatus(400)
  }
}

export default playfairMiddleware

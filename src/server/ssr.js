import { plainPath } from '../util'
import render from '../render'

export default function ssr(req, res, next) {
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
}

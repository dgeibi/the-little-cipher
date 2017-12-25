export default function notFound(req, res) {
  if (
    (req.method === 'GET' || req.method === 'HEAD') &&
    req.get('accept').indexOf('html') > -1
  ) {
    res.redirect('/')
    console.log(req.method, req.url, 'redirect to /')
  } else {
    res.sendStatus(404)
    console.log(req.method, req.url, '404')
  }
}

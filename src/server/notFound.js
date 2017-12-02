export default function notFound(req, res) {
  if (req.method === 'GET' || req.method === 'HEAD') {
    res.redirect('/')
    console.log(req.method, req.url, 'redirect to /')
  } else {
    res.sendStatus(400)
    console.log(req.method, req.url, '400')
  }
}

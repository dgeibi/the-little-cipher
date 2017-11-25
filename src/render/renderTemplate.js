import { renderToString } from 'react-dom/server'
import pkg from '../../package.json'

export default (renderMe, { title } = {}) => `<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <title>${title ? `${title} - ` : ''}${pkg.product_name || pkg.name}</title>
  <link href="/static/antd.css" rel="stylesheet">
  <link href="/static/main.css" rel="stylesheet">
</head>
<body>
  <div id="root">${renderToString(renderMe)}</div>
  <script src="/static/app.js"></script>
</body>
</html>`

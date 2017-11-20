import 'babel-polyfill'
import dva from 'dva'
import './index.css'

import exModal from './models/example'
import router from './router'

// 1. Initialize
const app = dva()

// 2. Plugins
// app.use({});

// 3. Model

app.model(exModal)

// 4. Router
app.router(router)

// 5. Start
app.start('#root')

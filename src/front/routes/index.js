import IndexPage from './IndexPage'
import CaserView from './CaserView'
import PlayfairView from './PlayfairView'
import HillView from './HillView'

export default [IndexPage, CaserView, PlayfairView, HillView].reduce((rs, View) => {
  rs[View.address] = View // eslint-disable-line no-param-reassign
  return rs
}, {})

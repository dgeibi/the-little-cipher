import { matchPath } from 'dva/router'
import Root from './Root'
import IndexPage from './IndexPage'
import CaserView from './CaserView'
import PlayfairView from './PlayfairView'
import HillView from './HillView'
import NotFound from './NotFound'

export const innerRoutes = [
  {
    path: '/',
    exact: true,
    component: IndexPage,
  },
  {
    path: '/caser/',
    component: CaserView,
  },
  {
    path: '/playfair/',
    component: PlayfairView,
  },
  {
    path: '/hill/',
    component: HillView,
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default [
  {
    component: Root,
    routes: innerRoutes,
  },
]

export const renderPaths = ['/', '/caser/', '/playfair/', '/hill/']

export const getMatchKey = (path) => {
  for (let i = 0; i < innerRoutes.length; i += 1) {
    if (matchPath(path, innerRoutes[i])) {
      return innerRoutes[i].path
    }
  }
  return null
}

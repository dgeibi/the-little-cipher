import { createMemoryHistory } from 'history'
import { renderRoute, titleMap } from './renderRoute'

export default function render(path, context) {
  return renderRoute({
    dvaOpts: {
      history: createMemoryHistory(),
    },
    routerProps: { location: path, context },
    routeProps: { currentPath: path },
    templateOpts: { title: titleMap[path] },
  })
}

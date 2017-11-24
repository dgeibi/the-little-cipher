import { plainPath } from 'Util'
import setTitle from '../utils/setTitle'
import { titleMap } from '../routes'

export default {
  namespace: 'app',
  state: null,
  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname }) => {
        const title = titleMap[plainPath(pathname)]
        if (title) {
          setTitle(title)
        }
      })
    },
  },
}

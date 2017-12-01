import setTitle from '../utils/setTitle'
import { getMatchKey, titleMap } from '../routes'

export default {
  namespace: 'app',
  state: null,
  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname }) => {
        const title = titleMap[getMatchKey(pathname)]
        if (title) {
          setTitle(title)
        }
      })
    },
  },
}

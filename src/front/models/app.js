import setTitle from '../utils/setTitle'
import routes from '../routes'

export default {
  namespace: 'app',
  state: null,
  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname }) => {
        const View = routes[pathname]
        if (View) {
          setTitle(View.title)
        }
      })
    },
  },
}

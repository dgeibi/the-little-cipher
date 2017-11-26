import readAsText from '../utils/readAsText'

export default {
  namespace: 'caser',

  state: {
    input: '',
  },

  effects: {
    * loadFile({ payload: { file } }, { call, put }) {
      const input = yield call(readAsText, file)
      yield put({ type: 'save', payload: { input } })
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },
  },
}

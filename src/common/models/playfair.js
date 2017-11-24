import { postData, readPlainText } from '../services/playfair'
import delay from '../utils/delay'

const getInit = () => ({
  secretInput: '',
  plainInput: '',
  plainText: '',
  cipherText: '',
  diff: [],
  square: null,
})
const takeLatest = { type: 'takeLatest' }
export default {
  namespace: 'playfair',

  state: getInit(),

  effects: {
    fetch: [
      function* fetch({ payload }, { call, put }) {
        const { secretInput, file } = payload
        let { plainInput } = payload
        if (file) {
          plainInput = yield call(readPlainText, file)
        }
        yield put({ type: 'save', payload: { secretInput, plainInput } })

        if (plainInput !== '') {
          yield call(delay, 100)
          const data = yield call(postData, payload)
          yield put({ type: 'save', payload: data })
        } else {
          yield put({
            type: 'reset',
            payload: {
              secretInput,
            },
          })
        }
      },
      takeLatest,
    ],
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },

    reset(state, action) {
      return { ...getInit(), ...action.payload }
    },
  },
}

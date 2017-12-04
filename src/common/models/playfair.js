import { postData, readPlainText } from '../services/playfair'
import save from '../utils/dva-reducer-save'

import delay from '../utils/delay'

const getInit = () => ({
  secretInput: '',
  plainInput: '',
  plainText: '',
  cipherText: '',
  decodeMode: false,
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
        const { secretInput, file, decodeMode } = payload
        let { plainInput } = payload
        if (file) {
          plainInput = yield call(readPlainText, file)
        }
        yield put({ type: 'save', payload: { secretInput, plainInput, decodeMode } })

        if (plainInput !== '') {
          yield call(delay, 100)
          const data = yield call(postData, payload)
          yield put({ type: 'save', payload: data })
        } else {
          yield put({
            type: 'reset',
            payload: {
              decodeMode,
              secretInput,
            },
          })
        }
      },
      takeLatest,
    ],
  },

  reducers: {
    save,

    reset(state, action) {
      return { ...getInit(), ...action.payload }
    },
  },
}

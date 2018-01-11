import { postData, readPlainText } from '../services/playfair'
import save from '../utils/dva-reducer-save'
import delay from '../utils/delay'
import hot from '../dva-hot'

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

export default hot.model(module)({
  namespace: 'playfair',

  state: getInit(),

  effects: {
    fetch: [
      function* fetch({ payload }, { call, put }) {
        const { secretInput, file, decodeMode } = payload
        const plainInput = file ? yield call(readPlainText, file) : payload.plainInput

        const load = { secretInput, plainInput, decodeMode }
        yield put({ type: 'save', payload: load })

        if (plainInput !== '') {
          yield call(delay, 100)
          const data = yield call(postData, load)
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
})

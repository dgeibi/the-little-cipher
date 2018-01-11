import hot from 'dva-hot'
import save from '../utils/dva-reducer-save'
import file2Text from '../utils/dva-effect-file2Text'

export default hot.model(module)({
  namespace: 'caser',

  state: {
    input: '',
    decodeMode: false,
  },

  effects: {
    loadFile: file2Text({ target: 'input', actionType: 'save' }),
  },

  reducers: {
    save,
  },
})

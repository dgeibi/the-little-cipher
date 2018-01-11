import MatrixInput from '../components/MatrixInput'
import file2Text from '../utils/dva-effect-file2Text'
import save from '../utils/dva-reducer-save'
import hot from '../../dva-hot'

export default hot.model(module)({
  namespace: 'hill',

  state: {
    str: '',
    matrix: MatrixInput.getNoob(3, 3),
    plaintext: '',
  },

  effects: {
    loadFile: file2Text({ target: 'plaintext', actionType: 'save' }),
  },

  reducers: {
    save,
  },
})

import { message } from 'antd'
import { isPlainFile } from '../../util'
import readAsText from './readAsText'

export default ({ target = 'text', actionType = 'save' } = {}) =>
  function* file2Text({ file }, { call, put }) {
    if (!file) return
    if (isPlainFile(file)) {
      const plaintext = yield call(readAsText, file)
      yield put({ type: actionType, payload: { [target]: plaintext } })
    } else if (file.type) {
      message.error(`不支持 ${file.type}`)
    } else {
      message.error('文件格式未知')
    }
  }

import readAsText from './readAsText'

export default ({ target = 'text', actionType = 'save' } = {}) =>
  function* file2Text({ file }, { call, put }) {
    if (!file) return
    const plaintext = yield call(readAsText, file)
    yield put({ type: actionType, payload: { [target]: plaintext } })
  }

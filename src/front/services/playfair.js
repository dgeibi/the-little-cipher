import fetch from 'unfetch'
import { message } from 'antd'

import readAsText from '../utils/readAsText'

export const postData = ({ secretInput, plainInput, file }) => {
  const formData = new FormData()
  formData.append('plaintext', file || plainInput)
  formData.append('secret', secretInput)
  return fetch('/playfair', {
    method: 'POST',
    body: formData,
  })
    .then(res => res.json(), () => message.error('发送失败'))
    .catch(() => message.error('接收失败'))
}

export const readPlainText = readAsText

import fetch from 'unfetch'
import { message } from 'antd'

import readAsText from '../utils/readAsText'

export const postData = ({ secretInput, plainInput, decodeMode }) => {
  const formData = new FormData()
  formData.append('plaintext', plainInput)
  formData.append('decodeMode', JSON.stringify(decodeMode))
  formData.append('secret', secretInput)
  return fetch('/playfair', {
    method: 'POST',
    body: formData,
  })
    .then(
      res => res.json(),
      err => {
        console.error(err)
        message.error('发送失败')
      }
    )
    .catch(err => {
      console.error(err)
      message.error('接收失败')
    })
}

export const readPlainText = readAsText

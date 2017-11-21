import { message } from 'antd'

export default file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = (error) => {
      message.error('读取失败')
      reject(error)
    }
    reader.readAsText(file)
  })

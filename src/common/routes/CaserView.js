import React from 'react'
import { Input, message } from 'antd'
import caser from 'Cipher/caser'
import { isPlainFile } from 'Util'

import Output from '../components/Output'
import Section from '../components/Section'
import './CaserView.css'

const { TextArea } = Input

class CaserView extends React.Component {
  static title = '凯撒密码'

  state = {
    msg: '',
  }

  readfiles(files) {
    const file = files && files[0]
    if (file) {
      if (isPlainFile(file)) {
        const reader = new FileReader()
        reader.onload = () => {
          this.setState({
            msg: reader.result,
          })
        }
        reader.readAsText(file)
      } else if (file.type) {
        message.error(`不支持 ${file.type}`)
      } else {
        message.error('文件格式未知')
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      msg: e.target.value,
    })
  }

  handleDrop = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (e.dataTransfer.files.length > 0) {
      this.readfiles(e.dataTransfer.files)
    } else {
      this.setState({
        msg: e.dataTransfer.getData('text'),
      })
    }
  }

  render() {
    const { msg } = this.state

    return (
      <div>
        <Section desc="输入明文 (支持拖拽文字和文本文件)">
          <TextArea
            styleName="text"
            placeholder="在此输入，拖拽至此"
            onDrop={this.handleDrop}
            value={msg}
            onChange={this.handleInput}
          />
        </Section>
        <Section desc="密文">
          <Output styleName="output">
            {caser(msg)}
          </Output>
        </Section>
      </div>
    )
  }
}

export default CaserView

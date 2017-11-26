import React from 'react'
import { Input, message } from 'antd'
import { connect } from 'dva'

import caser from 'Cipher/caser'
import { isPlainFile } from 'Util'

import Output from '../components/Output'
import Section from '../components/Section'
import './CaserView.css'

const { TextArea } = Input

@connect(({ caser: caserState }) => ({ ...caserState }))
class CaserView extends React.Component {
  static title = '凯撒密码'

  readfiles(files) {
    const file = files && files[0]
    if (file) {
      if (isPlainFile(file)) {
        this.props.dispatch({
          type: 'caser/loadFile',
          payload: {
            file,
          },
        })
      } else if (file.type) {
        message.error(`不支持 ${file.type}`)
      } else {
        message.error('文件格式未知')
      }
    }
  }

  saveInput(input) {
    this.props.dispatch({
      type: 'caser/save',
      payload: {
        input,
      },
    })
  }

  handleInput = (e) => {
    this.saveInput(e.target.value)
  }

  handleDrop = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (e.dataTransfer.files.length > 0) {
      this.readfiles(e.dataTransfer.files)
    } else {
      this.saveInput(e.dataTransfer.getData('text'))
    }
  }

  render() {
    const { input } = this.props

    return (
      <div>
        <Section desc="输入明文 (支持拖拽文字和文本文件)">
          <TextArea
            styleName="text"
            placeholder="在此输入，拖拽至此"
            onDrop={this.handleDrop}
            value={input}
            onChange={this.handleInput}
          />
        </Section>
        <Section desc="密文">
          <Output styleName="output">
            {caser(input)}
          </Output>
        </Section>
      </div>
    )
  }
}

export default CaserView

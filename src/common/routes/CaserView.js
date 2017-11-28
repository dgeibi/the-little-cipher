import React from 'react'
import { Input } from 'antd'
import { connect } from 'dva'
import { createSelector } from 'reselect'

import caser from 'Cipher/caser'

import Output from '../components/Output'
import Section from '../components/Section'
import FileInput from '../components/FileInput'
import './CaserView.css'

const { TextArea } = Input

const inputSelector = state => state.caser.input
const outputSelector = createSelector(inputSelector, caser)

@connect(state => ({ input: inputSelector(state), output: outputSelector(state) }))
class CaserView extends React.Component {
  static title = '凯撒密码'

  readfiles(files) {
    const file = files && files[0]
    if (file) {
      this.props.dispatch({
        type: 'caser/loadFile',
        file,
      })
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

  handleFileInputChange = (e) => {
    this.readfiles(e.target.files)
    e.target.value = ''
  }

  render() {
    const { input, output } = this.props

    return (
      <div>
        <Section desc="输入明文">
          <FileInput onChange={this.handleFileInputChange} />
          <TextArea
            styleName="text"
            rows={8}
            placeholder="在此输入，拖拽至此"
            onDrop={this.handleDrop}
            value={input}
            onChange={this.handleInput}
          />
        </Section>
        <Section desc="密文">
          <Output styleName="output">
            {output}
          </Output>
        </Section>
      </div>
    )
  }
}

export default CaserView

import React, { Fragment, Component } from 'react'
import { Input, Switch } from 'antd'
import { connect } from 'dva'
import { createSelector } from 'reselect'
import caser, { decode } from '../../cipher/caser'
import DocumentTitle from '../components/DocumentTitle'
import Output from '../components/Output'
import Section from '../components/Section'
import FileInput from '../components/FileInput'
import './CaserView.css'

const { TextArea } = Input

const decodeModeSelector = state => state.caser.decodeMode
const inputSelector = state => state.caser.input
const getOutput = (decodeMode, input) => (decodeMode ? decode(input) : caser(input))
const outputSelector = createSelector(decodeModeSelector, inputSelector, getOutput)

@connect(state => ({
  decodeMode: decodeModeSelector(state),
  input: inputSelector(state),
  output: outputSelector(state),
}))
class CaserView extends Component {
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

  handleSwitch = decodeMode => {
    this.props.dispatch({
      type: 'caser/save',
      payload: {
        decodeMode,
      },
    })
  }

  handleInput = e => {
    this.saveInput(e.target.value)
  }

  handleDrop = e => {
    e.stopPropagation()
    e.preventDefault()
    if (e.dataTransfer.files.length > 0) {
      this.readfiles(e.dataTransfer.files)
    } else {
      this.saveInput(e.dataTransfer.getData('text'))
    }
  }

  handleFileInputChange = e => {
    this.readfiles(e.target.files)
    e.target.value = ''
  }

  render() {
    const { input, output, decodeMode } = this.props

    return (
      <Fragment>
        <DocumentTitle>{this.constructor.title}</DocumentTitle>
        <Section>
          <Switch
            checked={decodeMode}
            onChange={this.handleSwitch}
            checkedChildren="解密"
            unCheckedChildren="加密"
          />
        </Section>
        <Section desc={decodeMode ? '输入密文' : '输入明文'}>
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
        <Section desc={decodeMode ? '解密结果' : '加密结果'}>
          <Output styleName="output">{output}</Output>
        </Section>
      </Fragment>
    )
  }
}

export default CaserView

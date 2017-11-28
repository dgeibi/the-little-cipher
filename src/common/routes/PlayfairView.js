import React, { Component } from 'react'
import { connect } from 'dva'
import { Input, message } from 'antd'
import Table from 'rc-table'
import { findType } from 'Cipher/playfair'
import { isPlainFile } from 'Util'

import Section from '../components/Section'
import MatrixOutput from '../components/MatrixOutput'
import Output from '../components/Output'
import FileInput from '../components/FileInput'

const { TextArea } = Input
const columns = [
  {
    title: '明文',
    dataIndex: 'origin',
    key: 'origin',
    width: 100,
  },
  {
    title: '密文',
    dataIndex: 'result',
    key: 'result',
    width: 100,
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    width: 100,
    render: findType,
  },
]

@connect(({ playfair }) => ({ ...playfair }))
class PlayfairView extends Component {
  static title = 'Playfair密码'

  handleInputChange = (e) => {
    const { name, value } = e.target
    if (name) {
      this.fetch({
        [name]: value,
      })
    }
  }

  fetch(payload) {
    const { secretInput, plainInput, dispatch } = this.props
    dispatch({
      type: 'playfair/fetch',
      payload: {
        secretInput,
        plainInput,
        ...payload,
      },
    })
  }

  readfiles(files) {
    const file = files && files[0]
    if (file) {
      if (isPlainFile(file)) {
        this.fetch({
          file,
        })
      } else if (file.type) {
        message.error(`不支持 ${file.type}`)
      } else {
        message.error('文件格式未知')
      }
    }
  }

  handleDrop = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (e.dataTransfer.files.length > 0) {
      this.readfiles(e.dataTransfer.files)
    } else {
      this.fetch({
        plainInput: e.dataTransfer.getData('text'),
      })
    }
  }

  handleFileInputChange = (e) => {
    this.readfiles(e.target.files)
    e.target.value = ''
  }

  render() {
    const {
      plainInput, secretInput, diff, square, plainText, cipherText,
    } = this.props

    return (
      <div>
        <p>
          默认填充字母：<code>K</code>，备用填充字母：<code>Z</code>
        </p>
        <Section desc="密码输入">
          <Input value={secretInput} name="secretInput" onChange={this.handleInputChange} />
        </Section>

        <Section desc="明文输入">
          <FileInput onChange={this.handleFileInputChange} />
          <TextArea
            value={plainInput}
            name="plainInput"
            placeholder="在此输入，拖拽至此"
            rows={3}
            onDrop={this.handleDrop}
            onChange={this.handleInputChange}
          />
        </Section>

        <Section desc="加密矩阵">
          <MatrixOutput value={square} />
        </Section>

        <Section desc="明文">
          <Output value={plainText} />
        </Section>

        <Section desc="密文">
          <Output value={cipherText} />
        </Section>

        <Section desc="细节">
          <Table columns={columns} data={diff} emptyText="无数据" />
        </Section>
      </div>
    )
  }
}

export default PlayfairView

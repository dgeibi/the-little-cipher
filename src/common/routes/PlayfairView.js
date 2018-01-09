import React, { Component, Fragment } from 'react'
import { connect } from 'dva'
import { Input, message, Switch } from 'antd'
import Table from 'rc-table'
import { findType } from '@/cipher/playfair'
import { isPlainFile } from '@/util'
import Section from '@/common/components/Section'
import MatrixOutput from '@/common/components/MatrixOutput'
import Output from '@/common/components/Output'
import FileInput from '@/common/components/FileInput'
import DocumentTitle from '@/common/components/DocumentTitle'

import './PlayfairView.css'

const { TextArea } = Input
const columns = [
  {
    title: '输入',
    dataIndex: 'origin',
    key: 'origin',
    width: 100,
  },
  {
    title: '输出',
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

  handleInputChange = e => {
    const { name, value } = e.target
    if (name) {
      this.fetch({
        [name]: value,
      })
    }
  }

  fetch(payload) {
    const { secretInput, plainInput, dispatch, decodeMode } = this.props
    dispatch({
      type: 'playfair/fetch',
      payload: {
        decodeMode,
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

  handleDrop = e => {
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

  handleSwitch = decodeMode => {
    this.fetch({
      decodeMode,
    })
  }

  handleFileInputChange = e => {
    this.readfiles(e.target.files)
    e.target.value = ''
  }

  render() {
    const {
      plainInput,
      secretInput,
      diff,
      square,
      plainText,
      cipherText,
      decodeMode,
    } = this.props

    return (
      <Fragment>
        <DocumentTitle>{this.constructor.title}</DocumentTitle>
        <p>
          默认填充字母：<code>K</code>，备用填充字母：<code>Z</code>
        </p>
        <Section>
          <Switch
            checked={decodeMode}
            onChange={this.handleSwitch}
            checkedChildren="解密"
            unCheckedChildren="加密"
          />
        </Section>
        <Section desc="密码输入">
          <Input
            value={secretInput}
            name="secretInput"
            onChange={this.handleInputChange}
          />
        </Section>

        <Section desc={decodeMode ? '密文输入' : '明文输入'}>
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

        <Section desc="矩阵">
          <MatrixOutput value={square} />
        </Section>

        <Section desc={decodeMode ? '密文' : '明文'}>
          <Output value={plainText} />
        </Section>

        <Section desc={decodeMode ? '解密结果' : '加密结果'}>
          <Output value={cipherText} />
        </Section>

        <Section desc="细节">
          <Table styleName="table" columns={columns} data={diff} emptyText="无数据" />
        </Section>
      </Fragment>
    )
  }
}

export default PlayfairView

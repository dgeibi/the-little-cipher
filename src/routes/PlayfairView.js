import React, { Component } from 'react'
import { Input } from 'antd'
import Table from 'rc-table'

import { playfair, cipherString, originalString, findType } from '../cipher/playfair'
import Section from '../components/Section'
import MatrixOutput from '../components/MatrixOutput'
import Output from '../components/Output'

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

class PlayfairView extends Component {
  state = {
    secretInput: '',
    plainInput: '',
    plainText: '',
    cipherText: '',
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    if (name) {
      this.setState({
        [name]: value,
      })
    }
  }

  render() {
    const { plainInput, secretInput } = this.state
    const { diff, square } = playfair(secretInput, plainInput)

    return (
      <div>
        <p>
          默认填充字母：<code>K</code>，备用填充字母：<code>Z</code>
        </p>
        <Section desc="密码输入">
          <Input value={secretInput} name="secretInput" onChange={this.handleInputChange} />
        </Section>

        <Section desc="明文输入">
          <TextArea value={plainInput} name="plainInput" onChange={this.handleInputChange} />
        </Section>

        <Section desc="加密矩阵">
          <MatrixOutput value={square} />
        </Section>

        <Section desc="明文">
          <Output value={originalString(diff)} />
        </Section>

        <Section desc="密文">
          <Output value={cipherString(diff)} />
        </Section>

        <Section desc="细节">
          <Table columns={columns} data={diff} emptyText="无数据" />
        </Section>
      </div>
    )
  }
}
export default PlayfairView

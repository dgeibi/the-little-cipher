import React from 'react'
import { Input, Button, message } from 'antd'
import hill, { inverse } from 'Cipher/hill'

import MatrixInput from '../components/MatrixInput'
import MatrixOutput from '../components/MatrixOutput'
import Section from '../components/Section'

import Output from '../components/Output'

const { TextArea } = Input

class HillView extends React.Component {
  state = {
    key: MatrixInput.getNoob(3, 3),
    plaintext: '',
    cipherText: '',
    iKey: null,
  }

  static title = 'Hill密码'

  handleKeyChange = (key) => {
    this.setState({
      key,
      iKey: inverse(key),
    })
  }

  handlePlainTextChange = (e) => {
    this.setState({
      plaintext: e.target.value,
      cipherText: hill(this.state.key, e.target.value),
    })
  }

  handleSwitch = () => {
    const { iKey: key, cipherText: plaintext } = this.state
    if (key) {
      const iKey = inverse(key)
      const cipherText = hill(key, plaintext)
      this.setState({
        key,
        keystr: key.map(r => r.join(' ')).join('\n'),
        cipherText,
        iKey,
        plaintext,
      })
    } else {
      message.error('当前逆矩阵为空')
    }
  }

  handleKeyStrChange = (e) => {
    this.setState({
      keystr: e.target.value,
    })
  }

  render() {
    const {
      key, plaintext, iKey, cipherText, keystr,
    } = this.state
    return (
      <div>
        <Section desc="输入3*3密钥矩阵">
          <MatrixInput
            m={3}
            n={3}
            rows={3}
            onMatrixChange={this.handleKeyChange}
            onChange={this.handleKeyStrChange}
            value={keystr}
          />
        </Section>

        <Section desc="输入明文">
          <TextArea value={plaintext} onChange={this.handlePlainTextChange} />
        </Section>

        <Section desc="密钥矩阵">
          <MatrixOutput value={key} />
        </Section>

        <Section desc="逆矩阵">
          <MatrixOutput value={iKey} />
        </Section>

        <Section desc="密文">
          <Output value={cipherText} />
        </Section>

        <Section>
          <Button onClick={this.handleSwitch}>切换输入和输出</Button>
        </Section>
      </div>
    )
  }
}

export default HillView

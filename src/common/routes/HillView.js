import React from 'react'
import { Input, Button, message } from 'antd'
import { connect } from 'dva'
import hill, { inverse } from 'Cipher/hill'

import MatrixInput from '../components/MatrixInput'
import MatrixOutput from '../components/MatrixOutput'
import Section from '../components/Section'
import FileInput from '../components/FileInput'

import Output from '../components/Output'

const { TextArea } = Input

@connect(
  (state) => {
    const { matrix, plaintext } = state.hill
    const inverseMatrix = inverse(matrix)
    const cipherText = hill(matrix, plaintext)
    console.log('calced')
    return {
      ...state.hill,
      inverseMatrix,
      cipherText,
    }
  },
  null,
  null,
  {
    areStatesEqual(prev, next) {
      return prev.hill.str === next.hill.str && prev.hill.plaintext === next.hill.plaintext
    },
  }
)
class HillView extends React.Component {
  static title = 'Hill密码'

  saveState(state) {
    this.props.dispatch({
      type: 'hill/save',
      payload: state,
    })
  }

  handlePlainTextChange = (e) => {
    this.saveState({
      plaintext: e.target.value,
    })
  }

  readfiles(files) {
    const file = files && files[0]
    if (file) {
      this.props.dispatch({
        type: 'hill/loadFile',
        file,
      })
    }
  }

  handleFileInputChange = (e) => {
    this.readfiles(e.target.files)
    e.target.value = ''
  }

  handleSwitch = () => {
    const { inverseMatrix: matrix, cipherText: plaintext } = this.props
    if (matrix) {
      this.saveState({
        matrix,
        str: matrix.map(r => r.join(' ')).join('\n'),
        plaintext,
      })
    } else {
      message.error('当前逆矩阵为空，无法切换')
    }
  }

  handleMatrixInputChange = ({ str, matrix }) => {
    this.saveState({
      str,
      matrix,
    })
  }

  handleDrop = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (e.dataTransfer.files.length > 0) {
      this.readfiles(e.dataTransfer.files)
    } else {
      this.saveState({
        plaintext: e.dataTransfer.getData('text'),
      })
    }
  }

  render() {
    const {
      matrix, plaintext, inverseMatrix, cipherText, str,
    } = this.props
    return (
      <div>
        <Section desc="输入3*3密钥矩阵">
          <MatrixInput
            m={3}
            n={3}
            rows={4}
            placeholder={'格式：\n1 7 3\n2 5 3\n1 2 1'}
            onChange={this.handleMatrixInputChange}
            value={str}
          />
        </Section>

        <Section desc="输入明文">
          <FileInput onChange={this.handleFileInputChange} />
          <TextArea
            value={plaintext}
            placeholder="在此输入，拖拽至此"
            onChange={this.handlePlainTextChange}
            onDrop={this.handleDrop}
            rows={5}
          />
        </Section>

        <Section desc="密钥矩阵">
          <MatrixOutput value={matrix} />
        </Section>

        <Section desc="逆矩阵">
          <MatrixOutput value={inverseMatrix} />
        </Section>

        <Section desc="密文">
          <Output
            value={cipherText}
            style={{
              wordBreak: 'break-all',
            }}
          />
        </Section>

        <Section>
          <Button onClick={this.handleSwitch}>切换输入和输出</Button>
        </Section>
      </div>
    )
  }
}

export default HillView

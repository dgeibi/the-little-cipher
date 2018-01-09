import React, { Fragment, Component } from 'react'
import { createSelector } from 'reselect'
import { Input, Button, message } from 'antd'
import { connect } from 'dva'
import hill, { inverse } from '@/cipher/hill'
import MatrixInput from '@/common/components/MatrixInput'
import MatrixOutput from '@/common/components/MatrixOutput'
import Section from '@/common/components/Section'
import FileInput from '@/common/components/FileInput'
import DocumentTitle from '@/common/components/DocumentTitle'
import Output from '@/common/components/Output'

const { TextArea } = Input

const matrixSelector = state => state.hill.matrix
const plaintextSelector = state => state.hill.plaintext

const inverseMatrixSelector = createSelector(matrixSelector, inverse)
const cipherTextSelector = createSelector(matrixSelector, plaintextSelector, hill)

@connect(state => {
  const inverseMatrix = inverseMatrixSelector(state)
  const cipherText = inverseMatrix && cipherTextSelector(state)
  return {
    ...state.hill,
    inverseMatrix,
    cipherText,
  }
})
class HillView extends Component {
  static title = 'Hill密码'

  saveState(state) {
    this.props.dispatch({
      type: 'hill/save',
      payload: state,
    })
  }

  handlePlainTextChange = e => {
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

  handleFileInputChange = e => {
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

  handleDrop = e => {
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
    const { matrix, plaintext, inverseMatrix, cipherText, str } = this.props
    return (
      <Fragment>
        <DocumentTitle>{this.constructor.title}</DocumentTitle>
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
            wrap
            value={cipherText}
            style={{
              height: '10em',
            }}
          />
        </Section>

        <Section>
          <Button onClick={this.handleSwitch}>切换输入和输出</Button>
        </Section>
      </Fragment>
    )
  }
}

export default HillView

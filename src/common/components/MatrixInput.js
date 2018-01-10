import React, { Component } from 'react'
import { Input } from 'antd'
import { repeat } from '../../util'

const { TextArea } = Input

const splitC = /\s*,\s*|\s+/
class MatrixInput extends Component {
  static getNoob(m, n) {
    return Array(m)
      .fill(null)
      .map(() => this.getRowNoob(n))
  }

  static getRowNoob(n) {
    return Array(n).fill(0)
  }

  getNoob() {
    const { m, n } = this.props
    return MatrixInput.getNoob(m, n)
  }

  getRowNoob() {
    return MatrixInput.getRowNoob(this.props.n)
  }

  handleChange = e => {
    const { value: str } = e.target
    const { m, n } = this.props
    let matrix
    if (str) {
      matrix = String(str)
        .split('\n')
        .slice(0, m)
        .map(r =>
          r
            .split(splitC)
            .slice(0, n)
            .map(v => Number(v) || 0)
        )
      matrix.forEach(r => {
        if (r.length < n) {
          repeat(n - r.length, () => r.push(0))
        }
      })
      if (matrix.length < m) {
        repeat(m - matrix.length, () => matrix.push(this.getRowNoob()))
      }
    } else {
      matrix = this.getNoob()
    }
    if (this.props.onChange) {
      this.props.onChange({
        matrix,
        str,
      })
    }
  }

  render() {
    const { m, n, ...props } = this.props
    return <TextArea {...props} onChange={this.handleChange} />
  }
}

export default MatrixInput

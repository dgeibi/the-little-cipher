import React, { Component } from 'react'

import { Input } from 'antd'

import { repeat } from '../../util'

const { TextArea } = Input

const splitC = /\s*,\s*|\s+/
class MatrixInput extends Component {
  state = {
    inputValue: '',
    value: this.getNoob(),
  }

  static getNoob(m, n) {
    return Array(m).fill(null).map(() => this.getRowNoob(n))
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

  handleChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e)
    }
    const { value: inputValue } = e.target
    const { m, n } = this.props
    let value
    if (inputValue !== '') {
      value = String(inputValue)
        .split('\n')
        .slice(0, m)
        .map(r => r.split(splitC).slice(0, n).map(v => Number(v) || 0))
      value.forEach((r) => {
        if (r.length < n) {
          repeat(n - r.length, () => r.push(0))
        }
      })
      if (value.length < m) {
        repeat(m - value.length, () => value.push(this.getRowNoob()))
      }
    } else {
      value = this.getNoob()
    }
    this.setState(
      {
        inputValue,
        value,
      },
      () => {
        if (this.props.onMatrixChange) {
          this.props.onMatrixChange(value)
        }
      }
    )
  }

  render() {
    const {
      m, n, onMatrixChange, ...props
    } = this.props
    return <TextArea {...props} onChange={this.handleChange} />
  }
}

export default MatrixInput

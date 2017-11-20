import React from 'react'
import { Input } from 'antd'

import Output from '../components/Output'
import caser from '../cipher/caser'

import './CaserView.css'

const { TextArea } = Input

class CaserView extends React.Component {
  state = {
    msg: '',
  }

  handleInput = (e) => {
    this.setState({
      msg: e.target.value,
    })
  }

  render() {
    const { msg } = this.state

    return (
      <div>
        <TextArea styleName="text" value={msg} onChange={this.handleInput} placeholder="输入明文" />
        <Output styleName="output">
          {caser(msg)}
        </Output>
      </div>
    )
  }
}

export default CaserView

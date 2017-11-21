import React from 'react'
import './Output.css'

function Output({
  children, value, className, ...props
}) {
  return (
    <div
      {...props}
      className={className}
      styleName="output"
      children={children || value || '无数据'}
    />
  )
}

export default Output

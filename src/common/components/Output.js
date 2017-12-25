import React from 'react'
import './Output.css'

function Output({ wrap = false, style, children, value, className, ...props }) {
  return (
    <div
      {...props}
      className={className}
      styleName="output"
      style={Object.assign(
        wrap
          ? {
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap',
            }
          : {
              whiteSpace: 'pre',
            },
        style
      )}
      children={children || value || '无数据'}
    />
  )
}

export default Output

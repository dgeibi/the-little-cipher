import React from 'react'
import { Button } from 'antd'
import './FileInput.css'

export default function FileInput({
  className, btnProps, children, ...fileProps
}) {
  let fileInput = null
  return (
    <span className={className} styleName="span">
      <input
        {...fileProps}
        style={Object.assign({ display: 'none' }, fileProps.style)}
        type="file"
        ref={saveInput}
      />
      <Button children={children} {...btnProps} onClick={handleClick} />
    </span>
  )
  function handleClick(e) {
    if (btnProps && typeof btnProps.onClick === 'function') btnProps.onClick(e)
    fileInput.click()
  }
  function saveInput(input) {
    if (fileProps.ref && typeof fileProps.ref === 'function') {
      fileProps.ref(input)
    }
    fileInput = input
  }
}

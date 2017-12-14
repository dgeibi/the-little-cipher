import React from 'react'
import './MatrixOutput.css'

function MatrixOutput({ value }) {
  if (!value) return <div>无数据</div>
  return (
    <table styleName="matrix">
      <tbody>
        {value.map((r, i) =>
          <tr key={i}>
            {r.map((c, j) =>
              <td key={j}>
                {c}
              </td>)}
          </tr>)}
      </tbody>
    </table>
  )
}

export default MatrixOutput

import React from 'react'

function MatrixOutput({ value }) {
  if (!value) return <div>无数据</div>
  return (
    <table>
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

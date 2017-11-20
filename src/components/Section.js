import React from 'react'
import './Section.css'

function Section({
  desc, className, children, ...props
}) {
  return (
    <section {...props} className={className} styleName="section">
      {desc &&
        <div styleName="header">
          {desc}:
        </div>}
      {children}
    </section>
  )
}

export default Section

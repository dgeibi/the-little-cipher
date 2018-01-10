import React from 'react'
import Helmet from 'react-helmet'
import getTitle from '../../common/utils/getTitle'

function DocumentTitle({ title, children }) {
  return (
    <Helmet>
      <title>{getTitle(children || title)}</title>
    </Helmet>
  )
}

export default DocumentTitle

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import CatalogPage from './src/containers/CatalogPage'

const render = () => {
  return ReactDOMServer.renderToString(<CatalogPage />)
}

export default render

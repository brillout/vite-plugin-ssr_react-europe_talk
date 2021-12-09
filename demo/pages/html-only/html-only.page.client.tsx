import ReactDOM from 'react-dom'
import React from 'react'
import { getPage } from 'vite-plugin-ssr/client'

hydrate()

async function hydrate() {
  const { Page } = await getPage()
  ReactDOM.render(<Page />, document.getElementById('page-view'))
}

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'

export async function render({ Page }) {
  const pageHtml = ReactDOMServer.renderToString(<Page />)

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

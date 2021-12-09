import { escapeInject } from 'vite-plugin-ssr'

export async function render() {
  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <body>
        <div id="page-view"></div>
      </body>
    </html>`
}

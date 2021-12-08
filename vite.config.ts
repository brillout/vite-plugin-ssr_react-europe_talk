import react from '@vitejs/plugin-react'
import mdx from 'vite-plugin-mdx'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import { mdxExportHeadings } from './vite.config/vite-plugin-mdx-export-headings'
import low from 'lowlight'
import { hljsDefineVue } from './vite.config/highlight.js/vue'
// @ts-ignore
import hljsDefineJavascript from './vite.config/highlight.js/javascript.js'

low.registerLanguage('vue', hljsDefineVue)
low.registerLanguage('js', hljsDefineJavascript)

const remarkPlugins = [require('remark-highlight.js')]

const config: UserConfig = {
  root: `${__dirname}/../../docs`,
  plugins: [react(), mdxExportHeadings(), mdx({ remarkPlugins }), ssr()],
  optimizeDeps: { include: ['@mdx-js/react'] },
  clearScreen: false,
}

export default config

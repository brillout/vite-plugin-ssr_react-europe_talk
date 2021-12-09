import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout pageContext={pageContext}>{children}</Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  const { style } = pageContext.pageExports
  return (
    <div id="slide-wrapper">
      <div id="slide-content" style={style}>
        {children}
      </div>
    </div>
  )
}

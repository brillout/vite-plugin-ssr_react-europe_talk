import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>{children}</Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return <div id="slide-wrapper"><div id="slide-content">{children}</div></div>;
}

import { portfolioGetSiteStoreNavigation } from '@/lib/site/getSite';
import { ReactQueryProvider } from '@/src/providers/ReactQueryContext';
import { SessionAuthProvider } from '@/src/providers/SessionContext';
import { UIProvider } from '@/src/providers/UIContext';
import '@/styles/globals.css';
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

import { Header } from '@/ui/Header';
import React, { use } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = use(portfolioGetSiteStoreNavigation(process.env.NEXT_PUBLIC_SITE_URL as string))
  return (
    <html>
      <head>
        <title>Portfolio</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" ></link>
      </head>
      <body >
      <SessionAuthProvider>
        <UIProvider>


          <ReactQueryProvider >
            <Header site={site}/>
            {children}
          </ReactQueryProvider>
        </UIProvider>
        </SessionAuthProvider>
      </body>
    </html>
  );
}

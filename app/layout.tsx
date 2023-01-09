import { portfolioGetSiteStoreNavigation } from '@/lib/site/getSite';
import { ReactQueryProvider } from '@/src/providers/ReactQueryContext';
import { SessionAuthProvider } from '@/src/providers/SessionContext';
import { UIProvider } from '@/src/providers/UIContext';
import '@/styles/globals.css';
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

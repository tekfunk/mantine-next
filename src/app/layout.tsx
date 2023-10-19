import React from 'react'
import { MantineProvider, ColorSchemeScript, AppShell, AppShellMain, Space } from '@mantine/core';
import '@mantine/core/styles.css';
import Header from '@/src/components/Header';
import theme from './theme'
import { mononoki, dinpro } from './fonts'

export const metadata = {
  title: 'mr midi',
  description: 'He talks to your synths',
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={`${mononoki.variable} ${dinpro.variable} `}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell>
            <Header />
            <AppShellMain>
              <Space h={36} />
              {children}
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}

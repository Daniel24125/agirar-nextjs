import '@/styles/global.sass'
import type { AppProps } from 'next/app'

import { ThemeProvider } from "@/components/Template/ThemeProvider"
import Layout from '@/components/Template/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

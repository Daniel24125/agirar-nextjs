import '@/styles/global.sass'
import type { AppProps } from 'next/app'
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/Template/ThemeProvider"
import Layout from '@/components/Template/Layout'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </LocalizationProvider>
  )
}

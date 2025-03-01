import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globals'
import { Header } from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

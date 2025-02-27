import type { AppProps } from 'next/app'
import { globalCss } from '../styles/globals'

globalCss()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

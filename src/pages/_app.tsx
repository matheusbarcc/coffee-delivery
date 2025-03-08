import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globals'
import { Header } from '../components/Header'
import { CartContextProvider } from '../contexts/CartContextProvider'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Header />
      <Component {...pageProps} />
    </CartContextProvider>
  )
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

const jetBrainsMono = localFont({src: '../../public/fonts/JetBrainsMono-Regular.woff2'})
export default function App({ Component, pageProps }: AppProps) {
    return <main className={jetBrainsMono.className}>
    <Component {...pageProps} />
  </main>
}

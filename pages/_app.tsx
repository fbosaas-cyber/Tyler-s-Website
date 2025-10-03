import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Set the default theme
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-custom">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

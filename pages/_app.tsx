import '@/styles/globals.css'
import RootLayout from '../components/root-layout'
import { siteConfig } from '../config/site'
import { Icons } from '../components/icons'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
}
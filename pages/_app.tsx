import '@/styles/globals.css'
import RootLayout from '../components/root-layout'
import { MainNav } from '@/components/main-nav'
import { DocsPageHeader } from '@/components/page-header'
import { SiteFooter } from '@/components/site-footer'
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { marketingConfig } from "@/config/marketing"
import { siteConfig } from '../config/site'
import { docsConfig } from '../config/docs'
import { Icons } from '../components/icons'
import Link from 'next/link'

export default function App({ Component, pageProps, children }) {
    return (
        <>
            <RootLayout>
                <Component {...pageProps} />
                <SiteFooter className="border-t" />
            </RootLayout>
        </>
    )
}

// export default function App({ Component, pageProps, children }) {
//     return (
//         <>
//             <RootLayout>
//                 <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
//                     <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
//                         <DocsSidebarNav items={docsConfig.sidebarNav} />
//                     </aside>
//                     {children}
//                     <Component {...pageProps} />
//                 </div>
//                 <SiteFooter className="border-t" />
//             </RootLayout>
//         </>
//     )
// }
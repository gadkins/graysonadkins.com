import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { marketingConfig } from "@/config/marketing"
import { docsConfig } from "@/config/docs"
import { MainNav } from "@/components/main-nav"
import { notebooksConfig } from "@/config/notebooks"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { absoluteUrl, cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import Head from "next/head"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
    src: "../assets/fonts/CalSans-SemiBold.woff2",
    variable: "--font-heading",
})

interface RootLayoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Artificial Intelligence",
        "Machine Learning",
        "Large Language Models",
        "NLP",
        "Computer Vision",
        "Chatbots",
    ],
    authors: [
        {
            name: "Grayson Adkins ",
            url: "https://graysonadkins.com",
        },
    ],
    creator: "Grayson Adkins",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: "@GraysonAdkins",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <Head >
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable} ${fontHeading.variable}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                    <Analytics />
                    <Toaster />
                    <TailwindIndicator />
                </ThemeProvider>
            </div>
        </>
    )
}


            // export default function RootLayout({ children }: RootLayoutProps) {
            //     return (
            //         <>
            //             <Head >
            //                 <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            //             </Head>
            //             <div className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable} ${fontHeading.variable}`}>
            //                 <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            //                     {/* <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-0">
            //                         <aside className="fixed top-16 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
            //                             <DocsSidebarNav items={notebooksConfig.sidebarNav} />
            //                         </aside>
            //                         {children}
            //                     </div> */}
            //                     {/* {children} */}
            //                     <Analytics />
            //                     <Toaster />
            //                     <TailwindIndicator />
            //                 </ThemeProvider>
            //             </div>
            //         </>
            //     )
            // }
"use client"

import '@/styles/globals.css';

// import Link from "next/link"
import { useRouter } from "next/router";
import Link from "next/link"
import ErrorPage from "next/error";

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

import { marketingConfig } from "@/config/marketing"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

import { getNotebookBySlug, getAllNotebooks } from "@/lib/notebooks"
import NotebookViewer from "@/components/notebook-viewer"
import type { Notebook } from "types"

type Props = {
    notebook: Notebook
    moreNotebooks: Notebook[]
}

interface NotebooksLayoutProps {
    children?: React.ReactNode
}

export default function NotebooksPage({
    children,
}: NotebooksLayoutProps) {
    const router = useRouter()
    const slug = router.query.slug;
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <MainNav items={marketingConfig.mainNav} />
                    <nav className="flex items-center space-x-2">
                        <Link
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "ghost",
                                }),
                                "w-9 px-0"
                            )}
                        >
                            <Icons.twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "ghost",
                                }),
                                "w-9 px-0"
                            )}
                        >
                            <Icons.linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "ghost",
                                }),
                                "w-9 px-0"
                            )}
                        >
                            <Icons.gitHub className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </nav>
                </div>
            </header>
            <div className="w-full gap-6 py-8 md:py-0 lg:py-0">
                {/* <NotebookViewer url="/notebooks/ft_retrieval_augmented_generation_qdrant.html" /> */}
                <NotebookViewer url={`/notebooks/${slug}.html`} />
            </div>
            <SiteFooter className="border-t" />
        </div>
    )
}

// type Params = {
//     params: {
//         slug: string;
//     };
// };

// export async function getStaticProps({ params }: Params) {
//     const notebook = getNotebookBySlug(params.slug, [
//         "title",
//         "date",
//         "slug",
//         "fullPath",
//     ]);


//     return {
//         props: {
//             notebook: {
//                 ...notebook,
//             },
//         },
//     };
// }

// export async function getStaticPaths() {
//     const notebooks = getAllNotebooks(["slug"]);

//     return {
//         paths: notebooks.map((notebook) => {
//             return {
//                 params: {
//                     slug: notebook.slug,
//                 },
//             };
//         }),
//         fallback: false,
//     };
// }
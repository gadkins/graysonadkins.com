"use client"

import '@/styles/globals.css';

// import Link from "next/link"
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from "next/router";
import Link from "next/link"
import ErrorPage from "next/error";

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

import { marketingConfig } from "@/config/marketing"
import { MainNav } from "@/components/main-nav"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { notebooksConfig } from "@/config/notebooks"
import { SiteFooter } from "@/components/site-footer"

// import { getNotebookBySlug, getAllNotebooks } from "@/lib/notebooks"
import { getNotebookSlugs, getNotebookBySlug } from "@/lib/notebooks"
import NotebookViewer from "@/components/notebook-viewer"
import type { Notebook } from "types"

interface IParams extends ParsedUrlQuery {
    slug: string[];
}

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
    const path = Array.isArray(slug) ? slug.join('/') : slug;
    // if (!router.isFallback && (fs.existsSync(path))) {
    //     return <ErrorPage statusCode={404} />;
    // }
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
            {router.isFallback ? (
                <p>Loading…</p>
            ) : (
                <>
                    <div className="container flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:gap-0">
                        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
                            <DocsSidebarNav items={notebooksConfig.sidebarNav} />
                        </aside>
                        {children}
                        {/* <div className="w-full gap-6 py-8 md:py-0 lg:py-0"> */}
                        <NotebookViewer url={`/html/notebooks/${path}.html`} />
                        {/* </div> */}
                    </div>
                </>
            )}
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getNotebookSlugs().map((slug) => ({
        params: { slug: slug.split('/') },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as IParams;
    const notebook = getNotebookBySlug(slug.join('/'), ['slug', 'content']);

    // If no notebook is found, return a 404 page
    if (!notebook) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            notebook,
        },
    };
};
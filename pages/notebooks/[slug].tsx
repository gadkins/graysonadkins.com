"use client"

import '@/styles/globals.css';

// import Link from "next/link"
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

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
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <MainNav items={marketingConfig.mainNav} />
                </div>
            </header>
            <div className="w-full">
                <NotebookViewer url="/notebooks/ft_retrieval_augmented_generation_qdrant.html" />
                {/* <NBViewer notebook=''/> */}
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
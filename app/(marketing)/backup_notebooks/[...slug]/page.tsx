import Link from "next/link"
import { notFound } from "next/navigation"
import { allNotebooks } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { Icons } from "@/components/icons"
import NotebookViewer from "@/components/notebook-viewer"
import { Mdx } from "@/components/mdx-components"
import { DocsPageHeader } from "@/components/page-header"
import { DashboardTableOfContents } from "@/components/toc"

import "@/styles/mdx.css"
import { Metadata } from "next"

import { env } from "@/env.mjs"
import { absoluteUrl, cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface NotebookPageProps {
  params: {
    slug: string[]
  }
}

async function getNotebookFromParams(params) {
  const slug = params?.slug?.join("/")
  const notebook = allNotebooks.find((notebook) => notebook.slugAsParams === slug)

  if (!notebook) {
    null
  }

  return notebook
}

export async function generateMetadata({
  params,
}: NotebookPageProps): Promise<Metadata> {
  const notebook = await getNotebookFromParams(params)

  if (!notebook) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", notebook.title)
  ogUrl.searchParams.set("type", "Notebook")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: notebook.title,
    description: notebook.description,
    openGraph: {
      title: notebook.title,
      description: notebook.description,
      type: "article",
      url: absoluteUrl(notebook.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: notebook.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: notebook.title,
      description: notebook.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  NotebookPageProps["params"][]
> {
  return allNotebooks.map((notebook) => ({
    slug: notebook.slugAsParams.split("/"),
  }))
}

export default async function NotebookPage({ params }: NotebookPageProps) {
  const notebook = await getNotebookFromParams(params)

  if (!notebook) {
    notFound()
  }

  const toc = await getTableOfContents(notebook.body.raw)

  return (
    <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
      <div>
        <DocsPageHeader heading={notebook.title} text={notebook.description} />
        <Mdx code={notebook.body.code} />
        <hr className="my-4" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/notebooks"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            See all notebooks
          </Link>
        </div>
      </div>
      <div className="hidden text-sm lg:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}



// import Link from "next/link"
// import { notFound } from "next/navigation"
// import { Suspense } from 'react'
// import { allNotebooks } from "contentlayer/generated"

// import { getTableOfContents } from "@/lib/toc"
// import { Icons } from "@/components/icons"
// import NBViewer from '@/components/nb-viewer'
// import { Mdx } from "@/components/mdx-components"
// import { DocsPageHeader } from "@/components/page-header"
// import { DashboardTableOfContents } from "@/components/toc"

// import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'


// // import "@/styles/mdx.css"
// import "@/styles/ipynb.css"
// import { Metadata } from "next"

// import { env } from "@/env.mjs"
// import { absoluteUrl, cn } from "@/lib/utils"
// import { buttonVariants } from "@/components/ui/button"

// interface NotebookPageProps {
//   params: {
//     slug: string[]
//   },
//   source: MDXRemoteSerializeResult<unknown, unknown> | null
// }

// async function getNotebookFromParams(params) {
//   const slug = params?.slug?.join("/")
//   const notebook = allNotebooks.find((notebook) => notebook.slugAsParams === slug)

//   if (!notebook) {
//     null
//   }

//   return notebook
// }

// export async function generateMetadata({
//   params,
// }: NotebookPageProps): Promise<Metadata> {
//   const notebook = await getNotebookFromParams(params)

//   if (!notebook) {
//     return {}
//   }

//   const url = env.NEXT_PUBLIC_APP_URL

//   const ogUrl = new URL(`${url}/api/og`)
//   ogUrl.searchParams.set("heading", notebook.title)
//   ogUrl.searchParams.set("type", "Notebook")
//   ogUrl.searchParams.set("mode", "dark")

//   return {
//     title: notebook.title,
//     description: notebook.description,
//     openGraph: {
//       title: notebook.title,
//       description: notebook.description,
//       type: "article",
//       url: absoluteUrl(notebook.slug),
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: notebook.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: notebook.title,
//       description: notebook.description,
//       images: [ogUrl.toString()],
//     },
//   }
// }

// export async function generateStaticParams(): Promise<
//   NotebookPageProps["params"][]
// > {
//   return allNotebooks.map((notebook) => ({
//     slug: notebook.slugAsParams.split("/"),
//   }))
// }

// export default async function NotebookPage({ params, source }: NotebookPageProps) {
//   const notebook = await getNotebookFromParams(params)

//   if (!notebook) {
//     notFound()
//   }

//   const toc = await getTableOfContents(notebook.body.raw)

//   return (
//     <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
//       <div>
//         <DocsPageHeader heading={notebook.title} text={notebook.description} />
//         < fallback={<>Loading...</>}></>
//         {source ? <MDXRemote {...source} /> : null}
//         {/* <NBViewer url={notebook.url} /> */}
//         {/* <Mdx code={notebook.body.code} /> */}
//         <hr className="my-4" />
//         <div className="flex justify-center py-6 lg:py-10">
//           <Link
//             href="/notebooks"
//             className={cn(buttonVariants({ variant: "ghost" }))}
//           >
//             <Icons.chevronLeft className="mr-2 h-4 w-4" />
//             See all notebooks
//           </Link>
//         </div>
//       </div>
//       <div className="hidden text-sm lg:block">
//         <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
//           <DashboardTableOfContents toc={toc} />
//         </div>
//       </div>
//     </main>
//   )
// }
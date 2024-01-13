import { notFound } from "next/navigation"
import { allAuthors, allNotebooks } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

import "@/styles/mdx.css"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { env } from "@/env.mjs"
import { absoluteUrl, cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

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
    authors: notebook.authors.map((author) => ({
      name: author,
    })),
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

  const authors = notebook.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  )

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all notebooks
      </Link>
      <div>
        {notebook.date && (
          <time
            dateTime={notebook.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(notebook.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {notebook.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      {notebook.image && (
        <Image
          src={notebook.image}
          alt={notebook.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={notebook.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all notebooks
        </Link>
      </div>
    </article>
  )
}

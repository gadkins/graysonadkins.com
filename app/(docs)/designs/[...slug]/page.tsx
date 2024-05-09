import Link from "next/link"
import { notFound } from "next/navigation"
import { allDesigns } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { Icons } from "@/components/icons"
import { Mdx } from "@/components/mdx-components"
import { DocsPageHeader } from "@/components/page-header"
import { DashboardTableOfContents } from "@/components/toc"

import "@/styles/mdx.css"
import { Metadata } from "next"

import { env } from "@/env.mjs"
import { absoluteUrl, cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { Jupyter, Viewer, Notebook, CellSidebar } from '@datalayer/jupyter-react';

interface DesignPageProps {
  params: {
    slug: string[]
  }
}

async function getDesignFromParams(params) {
  const slug = params?.slug?.join("/")
  const design = allDesigns.find((design) => design.slugAsParams === slug)

  if (!design) {
    null
  }

  return design
}

export async function generateMetadata({
  params,
}: DesignPageProps): Promise<Metadata> {
  const design = await getDesignFromParams(params)

  if (!design) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", design.title)
  ogUrl.searchParams.set("type", "Design")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: design.title,
    description: design.description,
    openGraph: {
      title: design.title,
      description: design.description,
      type: "article",
      url: absoluteUrl(design.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: design.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: design.title,
      description: design.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  DesignPageProps["params"][]
> {
  return allDesigns.map((design) => ({
    slug: design.slugAsParams.split("/"),
  }))
}

export default async function DesignPage({ params }: DesignPageProps) {
  const design = await getDesignFromParams(params)

  if (!design) {
    notFound()
  }

  const toc = await getTableOfContents(design.body.raw)

  return (
    <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
      <div>
        <DocsPageHeader heading={design.title} text={design.description} />
        <Mdx code={design.body.code} />
        <hr className="my-4" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/designs"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            See all designs
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

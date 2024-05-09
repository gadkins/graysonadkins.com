import Link from "next/link"
import { allDesigns } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"
import { DocsPageHeader } from "@/components/page-header"

export const metadata = {
  title: "Designs",
  description:
    "This section includes UI/UX, product, and marketing designs I've done for various projects.",
}

export default function DesignsPage() {
  const designs = allDesigns
    .filter((design) => design.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="py-6 lg:py-10">
      <DocsPageHeader
        heading="Designs"
        text="This section includes UI/UX, product, and marketing designs I've done for various projects."
      />
      {designs?.length ? (
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {designs.map((design) => (
            <article
              key={design._id}
              className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              {design.featured && (
                <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
                  Featured
                </span>
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-medium tracking-tight">
                    {design.title}
                  </h2>
                  {design.description && (
                    <p className="text-muted-foreground">{design.description}</p>
                  )}
                </div>
                {design.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(design.date)}
                  </p>
                )}
              </div>
              <Link href={design.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No designs published.</p>
      )}
    </div>
  )
}

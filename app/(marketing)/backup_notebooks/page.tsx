import Link from "next/link"
import { allNotebooks } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"
import { DocsPageHeader } from "@/components/page-header"

export const metadata = {
  title: "Notebooks",
  description:
    "Jupyter Notebooks covering a varieety of machine learning topics.",
}

export default function NotebooksPage() {
  const notebooks = allNotebooks
    .filter((notebook) => notebook.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="py-6 lg:py-10">
      <DocsPageHeader
        heading="Notebooks"
        text="Jupyter Notebooks covering a varieety of machine learning topics."
      />
      {notebooks?.length ? (
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {notebooks.map((notebook) => (
            <article
              key={notebook._id}
              className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              {notebook.featured && (
                <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
                  Featured
                </span>
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-medium tracking-tight">
                    {notebook.title}
                  </h2>
                  {notebook.description && (
                    <p className="text-muted-foreground">{notebook.description}</p>
                  )}
                </div>
                {notebook.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(notebook.date)}
                  </p>
                )}
              </div>
              <Link href={notebook.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No notebooks published.</p>
      )}
    </div>
  )
}

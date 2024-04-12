import Link from "next/link"
import Image from "next/image"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import utilStyles from './utils.module.scss'
import { buttonVariants } from "@/components/ui/button"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/gadkins/graysonadkins.com",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            priority
            src='/images/grayson.png'
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=''
          />
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            👋🏻 Follow me on X.
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Grayson Adkins
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I work at the intersection of AI, cloud, and product design.
          </p>
          <div className="space-x-4">
            <Link href="/#projects" className={cn(buttonVariants({ size: "lg" }))}>
              Explore my work
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Send me a message
            </Link>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="container space-y-6 bg-neutral-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 id="projects" className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Projects
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Since 2017, I&#39ve been the Co-Founder &#38 Head of Product at Uffizzi, a DevOps tooling company
            specializing in ephemeral cloud environments. Before Uffizzi, I was a machine learning researcher. I
            continue to explore various ML topics through my personal projects.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Link
            href="https://uffizzi.com"
            target="_blank"
            rel="noreferrer"
            className="relative overflow-hidden rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 500 500" className="h-11 w-11 fill-current">
                <path d="M184.91,127.62v214.9c0,20.28,2.39,35.55,7.16,45.79,8.46,18.1,25.06,27.15,49.8,27.15,31.68,0,53.38-12.86,65.1-38.6,6.07-13.95,9.11-32.38,9.11-55.28V127.62h94.53V484.15h-90.61v-50.37c-.87,1.1-3.05,4.37-6.52,9.81-3.48,5.45-7.61,10.25-12.39,14.39-14.57,13.08-28.65,22.03-42.24,26.82-13.59,4.8-29.52,7.2-47.79,7.2-52.62,0-88.07-18.97-106.33-56.91-10.22-20.93-15.33-51.79-15.33-92.57V127.62h95.51Z" /><rect fill="#fed626" x="106.1" y="8" width="284.7" height="58.62" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Uffizzi</h3>
                <p className="text-sm text-muted-foreground">
                  Platform Engineering, Virtual Clusters, Remote Dev Environments.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/notebooks/fine-tuning/function-calling"
            rel="noreferrer"
            className="relative overflow-hidden rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                {/* <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" /><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" /> */}
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Advanced Fine-Tuning</h3>
                <p className="text-sm">
                  The latest techniques for fine-tuning LLMs for function calling and more.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/notebooks/data-extraction"
            rel="noreferrer"
            className="relative overflow-hidden rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 6H3" /><path d="M10 12H3" /><path d="M10 18H3" /><circle cx="17" cy="15" r="3" /><path d="m21 19-1.9-1.9" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Data Extraction</h3>
                <p className="text-sm text-muted-foreground">
                  Using LLMs to extract data from large documents into structured formats.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/notebooks/rag/advanced"
            rel="noreferrer"
            className="relative overflow-hidden rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="8" height="8" x="2" y="2" rx="2" /><path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" /><path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" /><path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" /><polyline points="7 21 10 18 7 15" /><rect width="8" height="8" x="14" y="14" rx="2" />              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Advanced RAG</h3>
                <p className="text-sm text-muted-foreground">
                  Beyond naive retrieval-augmented generation (RAG).
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/notebooks/bechmarking"
            rel="noreferrer"
            className="relative overflow-hidden rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 3v18h18" /><rect width="12" height="4" x="7" y="5" rx="1" /><rect width="7" height="4" x="7" y="13" rx="1" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Benchmarking</h3>
                <p className="text-sm text-muted-foreground">
                  A practical and customizable guide to benchmarking language models.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/notebooks/inference/model-serving"
            rel="noreferrer"
            className="relative overflow-hidden rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Model Serving</h3>
                <p className="text-sm text-muted-foreground">
                  Serving custom models and measuring inference performance.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          </p>
        </div>
      </section>
      {/* <section id="resume" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Resume
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Lorem ipsum dolor sunt amet, consectetur adipiscing elit. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
          {stars && (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </div>
      </section> */}
    </>
  )
}

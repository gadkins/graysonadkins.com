import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/handbook",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/handbook",
        },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        {
          title: "Tokenization",
          href: "/handbook/tokenization",
        },
        {
          title: "Embeddings",
          href: "/handbook/embeddings",
        },
        {
          title: "Low-Rank Adaptation (LoRA)",
          href: "/handbook/lora",
        },
        {
          title: "Quantization",
          href: "/handbook/quantization",
        },
        {
          title: "Code Blocks",
          href: "/handbook/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/handbook/style-guide",
        },
        {
          title: "Search",
          href: "/handbook/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Build your own",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Writing Posts",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Dashboard",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Layouts",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Server Components",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Authentication",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Database with Prisma",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "API Routes",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Marketing Site",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "File Structure",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Tailwind CSS",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Typography",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}

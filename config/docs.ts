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
          title: "RAG",
          href: "/handbook/rag",
        },
      ],
    },
  ],
}

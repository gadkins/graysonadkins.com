import { NotebooksConfig } from "types"

export const notebooksConfig: NotebooksConfig = {
  mainNav: [
    {
      title: "Notebooks",
      href: "/notebooks",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Introduction",
      items: [
        {
          title: "About",
          href: "/notebooks/about",
        },
      ],
    },
    {
      title: "Data Processing",
      items: [
        {
          title: "Call Summarization",
          href: "/notebooks/data-processing/call-summarization",
        },
        {
          title: "Data Extraction",
          href: "/notebooks/data-processing/data-extraction",
        },
        {
          title: "Utility Functions",
          href: "/notebooks/data-processing/utility-functions",
        }
      ],
    },
    {
      title: "Fine-Tuning",
      items: [
        {
          title: "Quantized LoRA (QLoRA)",
          href: "/notebooks/fine-tuning/qlora",
        },
        {
          title: "Function Calling",
          href: "/notebooks/fine-tuning/function-calling",

        },
        // {
        //   title: "DPO (Coming Soon)",
        //   href: "/notebooks/fine-tuning/dpo",
        //   disabled: true,
        // },
      ],
    },
    {
      title: "Advanced RAG",
      items: [
        {
          title: "Overview",
          href: "/notebooks/rag/overview",
        },
        {
          title: "Embedding Comparison",
          href: "/notebooks/rag/embedding-comparison",
        },
        {
          title: "Sentence Window Retrieval",
          href: "/notebooks/rag/sentence-window-retrieval",
        },
        {
          title: "Auto-Merging Retrieval",
          href: "/notebooks/rag/auto-merging-retrieval",
        },
        {
          title: "Query Expansion (Coming Soon)",
          href: "/notebooks/rag/query-expansion",
          disabled: true,
        },
      ],
    },
    // {
    //   title: "Vision & Multimodal",
    //   items: [
    //     {
    //       title: "Vision Transformer",
    //       href: "/notebooks/vision/vit",
    //     },
    //     {
    //       title: "Mixtral 8x7b",
    //       href: "/notebooks/mixture-models/mixtral-8x7b",
    //     },
    //     {
    //       title: "Deepseek Coder",
    //       href: "/notebooks/mixture-models/mixtral-8x7b",
    //     }
    //   ],
    // },
    {
      title: "Inference & Evaluation",
      items: [
        {
          title: "Model Serving",
          href: "/notebooks/inference/model-serving",
        },
        {
          title: "Benchmarking LLMs",
          href: "/notebooks/inference/practical-benchmarking-for-llms",
        },
        {
          title: "Automated Evals",
          href: "/notebooks/evals/prompt-engineering-automated-evals",
        },
        // {
        //   title: "Speculative Decoding (Coming Soon)",
        //   href: "/notebooks/inference/speculative-decoding",
        //   disabled: true,
        // },
      ],
    },
    {
      title: "Saftey & Security",
      items: [
        {
          title: "Content Moderation",
          href: "/notebooks/safety/content-moderation",
        },
        {
          title: "PII Detection",
          href: "/notebooks/safety/pii-detection",

        },
      ],
    },
  ],
}

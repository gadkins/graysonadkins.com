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
          title: "Overview",
          href: "/notebooks/overview",
        },
      ],
    },
    {
      title: "Data Processing",
      items: [
        {
          title: "Utility Functions",
          href: "/notebooks/data-processing/utility-functions",
        },
        {
          title: "Data Extraction",
          href: "/notebooks/data-processing/data-extraction",
        },
        {
          title: "Synthetic Data",
          href: "/notebooks/data-preparation/synthetic-data",
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
        {
          title: "Chat Fine-Tuning",
          href: "/notebooks/fine-tuning/chat",
        },
        {
          title: "RAG Fine-Tuning",
          href: "/notebooks/fine-tuning/chat",
        },
        {
          title: "Long Context",
          href: "/notebooks/fine-tuning/long-context",
        },
        {
          title: "DPO (Coming Soon)",
          href: "/notebooks/fine-tuning/dpo",
          disabled: true,
        },
      ],
    },
    {
      title: "Embeddings & RAG",
      items: [
        {
          title: "Embedding Comparison",
          href: "/notebooks/rag/embedding-comparison",
        },
        {
          title: "Naive RAG",
          href: "/notebooks/rag/basic",
        },
        {
          title: "Advanced RAG",
          href: "/notebooks/rag/advanced",
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
      title: "Inference & MLOps",
      items: [
        {
          title: "Model Serving",
          href: "/notebooks/mlops/model-serving",
        },
        {
          title: "Function Calling API",
          href: "/notebooks/mlops/function-calling-api",
        },
        {
          title: "Speculative Decoding",
          href: "/notebooks/mlops/speculative-decoding",
        },
        {
          title: "Running LLMs Locally",
          href: "/notebooks/mlops/model-serving",
          disabled: true,
        },
        {
          title: "Serverless Inference",
          href: "/notebooks/mlops/serverless",
          disabled: true,
        },
      ],
    },
  ],
}

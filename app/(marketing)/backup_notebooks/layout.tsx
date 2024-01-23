interface NotebooksLayoutProps {
  children: React.ReactNode
}

export default function NotebooksLayout({ children }: NotebooksLayoutProps) {
  return <div className="mx-auto max-w-5xl">{children}</div>
}

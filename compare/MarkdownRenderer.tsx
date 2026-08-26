// rev-f2a18c-20260826 MarkdownRenderer.tsx
interface Props {
  text: string
}

export function MarkdownRenderer({ text }: Props) {
  const parts = text.split(/(```[\s\S]*?```)/g)
  return (
    <div className="md">
      {parts.map((part, i) => {
        if (part.startsWith('```')) {
          const inner = part.replace(/^```\w*\n?/, '').replace(/```$/, '')
          return <pre key={i}><code>{inner}</code></pre>
        }
        return <span key={i}>{part}</span>
      })}
    </div>
  )
}
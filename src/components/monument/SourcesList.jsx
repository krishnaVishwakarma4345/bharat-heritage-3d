function SourcesList({ sources = [] }) {
  return (
    <section className="border-t border-bronze/10 pt-8">
      <h2 className="font-display text-3xl font-bold text-bronze">Sources</h2>
      <ol className="mt-4 space-y-3">
        {sources.map((source) => (
          <li key={source.id} className="text-sm leading-6 text-ink-700">
            <span className="mr-2 font-bold text-bronze">[{source.id}]</span>
            <a href={source.url} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">{source.title}</a>
            <span className="ml-2 text-ink-500">({source.type})</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default SourcesList

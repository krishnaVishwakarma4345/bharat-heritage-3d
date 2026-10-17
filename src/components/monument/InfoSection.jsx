function InfoSection({ title, children }) {
  if (!children) return null
  return (
    <section className="border-t border-bronze/10 pt-8">
      <h2 className="font-display text-3xl font-bold text-bronze">{title}</h2>
      <div className="mt-4 leading-8 text-ink-700">{children}</div>
    </section>
  )
}

export default InfoSection

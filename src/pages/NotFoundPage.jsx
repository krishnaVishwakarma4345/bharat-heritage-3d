import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-sandstone">404</p>
      <h1 className="mt-3 font-display text-5xl font-bold text-bronze">Page not found</h1>
      <Link to="/" className="mt-8 inline-block font-semibold text-bronze underline underline-offset-4">
        Return home
      </Link>
    </section>
  )
}

export default NotFoundPage

import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import MonumentCard from '../components/explore/MonumentCard'
import { getFeaturedMonuments } from '../data/monumentService'

function HomePage() {
  return (
    <>
      <section className="bg-sandstone-glow">
        <div className="page-container grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-sandstone">A visual heritage catalogue</p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-bronze sm:text-6xl lg:text-7xl">
              Discover the stories held in India&apos;s historic architecture.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700">
              Explore verified histories, real photographs, and interactive 3D models while keeping a clear line between evidence and interpretation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/explore">Explore Heritage</Button>
              <Button to="/explore" variant="secondary">View the catalogue</Button>
            </div>
          </div>
          <div className="heritage-card relative overflow-hidden bg-bronze p-8 text-ivory sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[24px] border-sandstone/40" aria-hidden="true" />
            <p className="relative text-sm font-bold uppercase tracking-[0.2em] text-sandstone-200">Our promise</p>
            <p className="relative mt-8 font-display text-3xl leading-tight">
              Every visual tells you what it is, where it came from, and how certain it is.
            </p>
          </div>
        </div>
      </section>

      <section className="page-container py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sandstone">Featured sites</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-bronze">Begin with a landmark.</h2>
          </div>
          <Link to="/explore" className="font-semibold text-bronze underline underline-offset-4">See all monuments</Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {getFeaturedMonuments().map((monument) => <MonumentCard key={monument.id} monument={monument} />)}
        </div>
      </section>

      <section className="page-container py-20">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sandstone">How it works</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-bronze">Learn through evidence and perspective.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['01', 'Choose a site', 'Browse a focused collection of monuments and find the history that interests you.'],
            ['02', 'Explore in 3D', 'Rotate and inspect legitimately sourced models where one is available.'],
            ['03', 'See the record', 'Compare present-day and historical photographs with clear attribution.'],
          ].map(([number, title, description]) => (
            <article key={number} className="heritage-card p-6">
              <span className="font-display text-3xl font-bold text-sandstone">{number}</span>
              <h3 className="mt-8 text-xl font-bold text-bronze">{title}</h3>
              <p className="mt-3 leading-7 text-ink-700">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-bronze-100">
        <div className="page-container flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sandstone-700">Why preserve heritage?</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-bronze-900">
              The past becomes easier to protect when it is easier to understand.
            </h2>
          </div>
          <Link to="/explore" className="shrink-0 font-semibold text-bronze underline underline-offset-4">Start exploring</Link>
        </div>
      </section>
    </>
  )
}

export default HomePage

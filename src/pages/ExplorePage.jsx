import { useMemo, useState } from 'react'
import MonumentCard from '../components/explore/MonumentCard'
import RegionFilter from '../components/explore/RegionFilter'
import SearchBar from '../components/explore/SearchBar'
import { filterMonuments, getAllMonuments } from '../data/monumentService'

function ExplorePage() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('All regions')
  const monuments = useMemo(() => filterMonuments({ query, region }), [query, region])

  return (
    <section className="page-container py-16 sm:py-20">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-sandstone">Explore</p>
      <h1 className="mt-3 font-display text-5xl font-bold text-bronze">Heritage catalogue</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-700">
        Browse {getAllMonuments().length} curated records. Search by monument, city, or state, then open a record to learn more.
      </p>
      <div className="mt-10 grid gap-4 rounded-2xl border border-bronze/10 bg-bronze-100/60 p-4 sm:grid-cols-[1fr_220px]">
        <SearchBar value={query} onChange={setQuery} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>
      <p className="mt-8 text-sm font-semibold text-bronze-700" aria-live="polite">
        Showing {monuments.length} {monuments.length === 1 ? 'monument' : 'monuments'}
      </p>
      {monuments.length > 0 ? (
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {monuments.map((monument) => <MonumentCard key={monument.id} monument={monument} />)}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-bronze/25 p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-bronze">No monuments found</h2>
          <p className="mt-2 text-ink-700">Try a different search term or reset the region filter.</p>
          <button type="button" onClick={() => { setQuery(''); setRegion('All regions') }} className="mt-5 font-semibold text-bronze underline underline-offset-4">
            Clear filters
          </button>
        </div>
      )}
    </section>
  )
}

export default ExplorePage

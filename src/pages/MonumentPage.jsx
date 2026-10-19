import { lazy, Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'
import InfoSection from '../components/monument/InfoSection'
import MonumentHeader from '../components/monument/MonumentHeader'
import NoModelNotice from '../components/monument/NoModelNotice'
import PhotoGallery from '../components/monument/PhotoGallery'
import SourcesList from '../components/monument/SourcesList'
import { getMonumentBySlug } from '../data/monumentService'

const ModelViewer = lazy(() => import('../components/viewer/ModelViewer'))

function MonumentPage() {
  const { slug } = useParams()
  const monument = getMonumentBySlug(slug)

  if (!monument) {
    return (
      <section className="page-container py-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sandstone">404</p>
        <h1 className="mt-3 font-display text-5xl font-bold text-bronze">Monument not found</h1>
        <p className="mt-4 text-lg text-ink-700">This record does not exist in the current catalogue.</p>
        <Link to="/explore" className="mt-8 inline-block font-semibold text-bronze underline underline-offset-4">Back to Explore</Link>
      </section>
    )
  }

  return (
    <section className="page-container py-12 sm:py-16">
      <Link to="/explore" className="text-sm font-semibold text-bronze underline underline-offset-4">← Back to Explore</Link>
      <div className="mt-8"><MonumentHeader monument={monument} /></div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-8">
          <InfoSection title="Overview"><p>{monument.description}</p></InfoSection>
          <InfoSection title="Historical background"><ul className="list-disc space-y-3 pl-5">{monument.historicalBackground.map((item) => <li key={item}>{item}</li>)}</ul></InfoSection>
          <InfoSection title="Cultural significance"><ul className="list-disc space-y-3 pl-5">{monument.culturalSignificance.map((item) => <li key={item}>{item}</li>)}</ul></InfoSection>
          <InfoSection title="Present condition"><p><strong className="text-bronze">Status:</strong> {monument.currentCondition.status}. {monument.currentCondition.note}</p></InfoSection>
          <PhotoGallery photographs={monument.photographs} historicalPhotographs={monument.historicalPhotographs} reconstructions={monument.reconstructions} />
          <SourcesList sources={monument.sources} />
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          {monument.modelAvailability === 'available' ? (
            <Suspense fallback={<div className="rounded-2xl bg-bronze-900 p-6 text-sm text-ivory">Preparing 3D viewer…</div>}>
              <ModelViewer path={monument.modelPath} modelType={monument.modelType} attribution={monument.modelAttribution} />
            </Suspense>
          ) : <NoModelNotice />}
        </aside>
      </div>
    </section>
  )
}

export default MonumentPage

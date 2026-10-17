import Badge from '../ui/Badge'

function PhotoItem({ photo }) {
  return (
    <figure className="heritage-card overflow-hidden">
      <img
        src={photo.url}
        alt={photo.alt}
        className="aspect-[4/3] w-full object-cover"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.onerror = null
          event.currentTarget.src = '/images/fallback.svg'
        }}
      />
      <figcaption className="p-4">
        <p className="font-semibold text-bronze">{photo.caption}</p>
        <p className="mt-2 text-xs leading-5 text-ink-500">
          Photo: {photo.credit} · {photo.license}
          {photo.sourceUrl && <> · <a className="underline" href={photo.sourceUrl} target="_blank" rel="noreferrer">Source</a></>}
        </p>
      </figcaption>
    </figure>
  )
}

function PhotoGallery({ photographs = [], historicalPhotographs = [], reconstructions = [] }) {
  return (
    <section className="border-t border-bronze/10 pt-8">
      <h2 className="font-display text-3xl font-bold text-bronze">Photographic record</h2>
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-bronze">Present-day photographs</h3>
          <Badge>Present</Badge>
        </div>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">{photographs.map((photo, index) => <PhotoItem key={`${photo.caption}-${index}`} photo={photo} />)}</div>
      </div>
      {historicalPhotographs.length > 0 && (
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-bronze">Historical photographs</h3>
            <Badge variant="historical">Historical</Badge>
          </div>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">{historicalPhotographs.map((photo, index) => <PhotoItem key={`${photo.caption}-${index}`} photo={photo} />)}</div>
        </div>
      )}
      {reconstructions.length > 0 && (
        <div className="mt-10 rounded-2xl border border-amber-300 bg-amber-50 p-5">
          <Badge variant="warning">Reconstruction</Badge>
          <p className="mt-3 text-sm leading-6 text-amber-950">Hypothetical visualization. Not a photograph and not a verified depiction of the original appearance.</p>
        </div>
      )}
    </section>
  )
}

export default PhotoGallery

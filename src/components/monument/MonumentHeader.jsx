import Badge from '../ui/Badge'

function MonumentHeader({ monument }) {
  return (
    <header className="border-b border-bronze/10 pb-8">
      <div className="flex flex-wrap gap-2">
        <Badge>{monument.region} India</Badge>
        <Badge variant={monument.modelAvailability === 'available' ? 'model' : 'photo'}>
          {monument.modelAvailability === 'available' ? '3D available' : 'Photos only'}
        </Badge>
      </div>
      <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight text-bronze sm:text-6xl">{monument.name}</h1>
      <p className="mt-4 text-lg text-ink-700">{monument.location}, {monument.state}</p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <span className="rounded-lg bg-bronze-100 px-3 py-2 font-semibold text-bronze-800">Period: {monument.constructionPeriod}</span>
        <span className="rounded-lg bg-bronze-100 px-3 py-2 font-semibold text-bronze-800">Style: {monument.architecturalStyle}</span>
      </div>
    </header>
  )
}

export default MonumentHeader

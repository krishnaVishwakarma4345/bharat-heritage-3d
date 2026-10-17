import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'

function MonumentCard({ monument }) {
  const { name, slug, location, state, shortDescription, thumbnail, modelAvailability } = monument

  return (
    <article className="heritage-card flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-bronze-100">
        <img
          src={thumbnail}
          alt={`${name} placeholder image`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = '/images/fallback.svg'
          }}
        />
        <div className="absolute left-4 top-4">
          <Badge variant={modelAvailability === 'available' ? 'model' : 'photo'}>
            {modelAvailability === 'available' ? '3D available' : 'Photos only'}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold text-sandstone-700">{location}, {state}</p>
        <h2 className="mt-2 font-display text-2xl font-bold text-bronze">{name}</h2>
        <p className="mt-3 flex-1 leading-7 text-ink-700">{shortDescription}</p>
        <Link to={`/monument/${slug}`} className="mt-5 font-semibold text-bronze underline underline-offset-4">
          Explore monument
        </Link>
      </div>
    </article>
  )
}

export default MonumentCard

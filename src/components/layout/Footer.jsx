import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-bronze/15 bg-bronze-900 text-ivory/80">
      <div className="page-container grid gap-8 py-10 sm:grid-cols-2 sm:items-end">
        <div>
          <Link to="/" className="font-display text-xl font-bold text-ivory">
            Bharat Heritage 3D
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6">
            A student-built visual catalogue for learning about India&apos;s architectural heritage.
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-sm">All photographs and models will include source and licence attribution.</p>
          <p className="mt-2 text-xs text-ivory/55">Built as a static, accessible web experience.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

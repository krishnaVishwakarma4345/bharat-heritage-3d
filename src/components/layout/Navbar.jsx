import { NavLink, Link } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-bronze/15 bg-ivory/95 backdrop-blur">
      <nav className="page-container flex min-h-20 items-center justify-between gap-6" aria-label="Main navigation">
        <Link to="/" className="font-display text-xl font-bold text-bronze sm:text-2xl">
          Bharat Heritage 3D
        </Link>
        <div className="flex items-center gap-1 rounded-full border border-bronze/10 bg-white/50 p-1">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold ${
                  isActive ? 'bg-bronze text-ivory' : 'text-bronze hover:bg-bronze/10'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar

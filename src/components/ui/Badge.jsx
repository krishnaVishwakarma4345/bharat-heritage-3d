const variants = {
  model: 'bg-sandstone-100 text-sandstone-800',
  photo: 'bg-bronze-100 text-bronze-700',
  historical: 'bg-emerald-100 text-emerald-800',
  warning: 'bg-amber-100 text-amber-900',
}

function Badge({ children, variant = 'photo' }) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${variants[variant]}`}>{children}</span>
}

export default Badge

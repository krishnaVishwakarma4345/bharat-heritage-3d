import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-bronze text-ivory hover:bg-bronze-600',
  secondary: 'border border-bronze/25 text-bronze hover:bg-bronze/10',
}

function Button({ children, to, variant = 'primary', className = '', ...props }) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${styles[variant]} ${className}`

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }

  return <button type="button" className={classes} {...props}>{children}</button>
}

export default Button

function ErrorMessage({ title = 'Something went wrong', children }) {
  return (
    <div role="alert" className="rounded-2xl border border-red-900/15 bg-red-50 p-5 text-red-950">
      <h2 className="font-semibold">{title}</h2>
      {children && <p className="mt-1 text-sm">{children}</p>}
    </div>
  )
}

export default ErrorMessage

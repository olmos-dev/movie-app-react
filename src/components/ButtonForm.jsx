export default function ButtonForm({children, type = "button", loading = false , className=""}) {
  return (
    <button type={type} disabled={loading} className={className}>
      {children}
    </button>
  )
}

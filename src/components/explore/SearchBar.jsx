function SearchBar({ value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-bronze">Search monuments</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name, city, or state"
        className="w-full rounded-xl border border-bronze/20 bg-white px-4 py-3 text-ink outline-none placeholder:text-ink-500 focus:border-sandstone focus:ring-2 focus:ring-sandstone/20"
      />
    </label>
  )
}

export default SearchBar

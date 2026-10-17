const regions = ['All regions', 'North', 'South', 'East', 'West', 'Central']

function RegionFilter({ value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-bronze">Region</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-bronze/20 bg-white px-4 py-3 text-ink outline-none focus:border-sandstone focus:ring-2 focus:ring-sandstone/20"
      >
        {regions.map((region) => <option key={region}>{region}</option>)}
      </select>
    </label>
  )
}

export default RegionFilter

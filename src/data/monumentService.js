import monuments from './monuments.json'

export function getAllMonuments() {
  return monuments
}

export function getMonumentBySlug(slug) {
  return monuments.find((monument) => monument.slug === slug)
}

export function searchMonuments(query) {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) return monuments
  return monuments.filter((monument) =>
    [monument.name, monument.location, monument.state].some((value) => value.toLowerCase().includes(normalizedQuery)),
  )
}

export function filterMonuments({ query = '', region = 'All regions' } = {}) {
  return searchMonuments(query).filter((monument) => region === 'All regions' || monument.region === region)
}

export function getFeaturedMonuments() {
  return monuments.filter((monument) => monument.featured)
}

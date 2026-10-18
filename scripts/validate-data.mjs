import { readFile } from 'node:fs/promises'

const data = JSON.parse(await readFile(new URL('../src/data/monuments.json', import.meta.url), 'utf8'))
const requiredFields = [
  'id',
  'slug',
  'name',
  'location',
  'state',
  'shortDescription',
  'description',
  'constructionPeriod',
  'architecturalStyle',
  'modelAvailability',
  'thumbnail',
  'photographs',
  'sources',
]
const ids = new Set()
const slugs = new Set()
const errors = []

if (!Array.isArray(data) || data.length < 6) {
  errors.push('The catalogue must contain at least six monument records.')
}

for (const monument of data) {
  for (const field of requiredFields) {
    if (!(field in monument)) errors.push(`${monument.id ?? 'Unknown record'} is missing "${field}".`)
  }

  if (ids.has(monument.id)) errors.push(`Duplicate monument id: ${monument.id}.`)
  if (slugs.has(monument.slug)) errors.push(`Duplicate monument slug: ${monument.slug}.`)
  ids.add(monument.id)
  slugs.add(monument.slug)

  if (!['available', 'unavailable'].includes(monument.modelAvailability)) {
    errors.push(`${monument.slug} has an invalid modelAvailability value.`)
  }
  if (monument.modelAvailability === 'available' && !monument.modelAttribution) {
    errors.push(`${monument.slug} needs modelAttribution when a model is available.`)
  }
  if (monument.modelAvailability === 'available' && !['glb', 'illustrative', 'sketchfab', 'tripo'].includes(monument.modelType)) {
    errors.push(`${monument.slug} needs modelType set to glb, illustrative, sketchfab, or tripo.`)
  }
  if (monument.modelType === 'glb' && !monument.modelPath) {
    errors.push(`${monument.slug} needs modelPath when modelType is glb.`)
  }
  if (monument.modelType === 'glb' && monument.modelPath) {
    try {
      new URL(monument.modelPath, 'http://localhost')
    } catch {
      errors.push(`${monument.slug} has an invalid GLB modelPath.`)
    }
  }
  if (monument.modelType === 'illustrative' && monument.modelPath) {
    errors.push(`${monument.slug} must not define modelPath for an illustrative model.`)
  }
  if (monument.modelType === 'sketchfab' && (!monument.modelPath || !monument.modelPath.includes('sketchfab.com/models/'))) {
    errors.push(`${monument.slug} needs a valid Sketchfab embed URL.`)
  }
  if (monument.modelType === 'tripo' && (!monument.modelPath || !monument.modelPath.startsWith('https://studio.tripo3d.ai/3d-model/'))) {
    errors.push(`${monument.slug} needs a valid Tripo model URL.`)
  }
  if (!Array.isArray(monument.photographs) || !Array.isArray(monument.sources)) {
    errors.push(`${monument.slug} must define photographs and sources as arrays.`)
  }
  for (const source of monument.sources ?? []) {
    try {
      new URL(source.url)
    } catch {
      errors.push(`${monument.slug} has an invalid source URL.`)
    }
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'))
  process.exitCode = 1
} else {
  console.log(`Validated ${data.length} monument records.`)
}

# Bharat Heritage 3D

An educational, static React site for exploring Indian historical architecture through verified information, attributed photographs, and legitimately reusable 3D models.

## Development

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it with `npm run preview`.
Validate the local monument data with `npm run validate:data`.

## Project layout

- `public/models/` - local `.glb` files and their browser paths
- `public/images/` - thumbnails, gallery images, and the `fallback.svg` image fallback
- `src/data/` - local monument data and lookup helpers
- `src/pages/` - route-level page components
- `src/components/` - reusable layout and feature components
- `src/hooks/` - browser and React hooks
- `src/utils/` - shared constants and presentation helpers

Every image and model must include attribution and licence information before being used. A model can use a local path such as `/models/site.glb` or a direct remote `.glb` URL with CORS enabled. A model page URL, Sketchfab tag page, or search result is not a valid `modelPath`; use the direct asset URL and keep the source page in `modelAttribution.sourceUrl`.

For a remote model, use this shape:

```json
{
  "modelAvailability": "available",
  "modelType": "glb",
  "modelPath": "https://cdn.example.org/monument.glb",
  "modelAttribution": {
    "author": "Creator",
    "license": "CC BY 4.0",
    "sourceUrl": "https://source-page.example.org/model",
    "accuracy": "Creator-described reconstruction; verify against reference imagery."
  }
}
```

Remote models must allow browser CORS requests and should be tested in the deployed site. If no model meets the accuracy and licence requirements, keep `modelAvailability` as `unavailable` instead of presenting an unrelated model.

## Release checklist

Before deploying:

1. Run `npm install`.
2. Run `npm run validate:data`.
3. Run `npm run build`.
4. Run `npm run preview` and test `/`, `/explore`, and at least one `/monument/<slug>` route.
5. Confirm every model and image has a verified licence, source URL, and attribution in `src/data/monuments.json`.

The `public/_redirects` file keeps React Router routes working on Netlify-style
static hosting. The project intentionally uses `BrowserRouter`; configure the
host with an equivalent fallback to `index.html` when deploying elsewhere.

## Styling configuration

Tailwind CSS is configured in `tailwind.config.js` with the Bharat Heritage visual
tokens, responsive container, semantic color scales, focus states, and reusable
`.page-container` and `.heritage-card` component classes. PostCSS runs Tailwind
and Autoprefixer through `postcss.config.js`.

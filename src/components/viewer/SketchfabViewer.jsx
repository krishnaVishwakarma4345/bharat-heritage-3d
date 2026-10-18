function SketchfabViewer({ embedUrl, attribution }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-bronze/15 bg-bronze-900">
      <div className="aspect-[4/3] min-h-[22rem] sm:min-h-[30rem]">
        <iframe
          title={attribution?.title ?? 'Embedded 3D monument model'}
          src={embedUrl}
          className="h-full w-full border-0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
        />
      </div>
      <div className="border-t border-ivory/10 p-4 text-xs leading-5 text-ivory/70">
        <p>Rotate and zoom using the controls inside the Sketchfab viewer.</p>
        {attribution && (
          <p className="mt-2">
            Model: {attribution.author} · {attribution.license}
            {attribution.sourceUrl && <> · <a className="underline" href={attribution.sourceUrl} target="_blank" rel="noreferrer">Source</a></>}
          </p>
        )}
        <p className="mt-2 text-ivory/55">This is an external model embed. Verify its licence and accuracy before public deployment.</p>
      </div>
    </div>
  )
}

export default SketchfabViewer

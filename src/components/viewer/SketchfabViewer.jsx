function SketchfabViewer({ embedUrl, attribution }) {
  const src = embedUrl.includes('?')
    ? `${embedUrl}&ui_infos=0&ui_watermark=0&autostart=1`
    : `${embedUrl}?ui_infos=0&ui_watermark=0&autostart=1`

  return (
    <div className="overflow-hidden rounded-3xl border border-bronze/15 bg-bronze-900 shadow-[0_18px_50px_rgba(63,39,25,0.18)]">
      <div className="flex items-center justify-between border-b border-ivory/10 px-4 py-3">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-sandstone">Interactive model</p>
          <p className="mt-1 text-sm font-semibold text-ivory">{attribution?.title ?? 'Monument model'}</p>
        </div>
        <span className="rounded-full border border-ivory/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ivory/60">Sketchfab</span>
      </div>
      <div className="aspect-square min-h-[22rem] w-full sm:min-h-[30rem]">
        <iframe
          title={attribution?.title ?? 'Embedded 3D monument model'}
          src={src}
          className="h-full w-full border-0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default SketchfabViewer

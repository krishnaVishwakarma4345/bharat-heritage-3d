function ExternalModelViewer({ modelUrl, attribution, provider }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-bronze/15 bg-bronze-900 shadow-[0_18px_50px_rgba(63,39,25,0.18)]">
      <div className="flex items-center justify-between border-b border-ivory/10 px-4 py-3">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-sandstone">Interactive model</p>
          <p className="mt-1 text-sm font-semibold text-ivory">{attribution?.title ?? 'Monument model'}</p>
        </div>
        <span className="rounded-full border border-ivory/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ivory/60">{provider}</span>
      </div>
      <div className="aspect-square min-h-[22rem] w-full sm:min-h-[30rem]">
        <iframe
          title={attribution?.title ?? 'External 3D monument model'}
          src={modelUrl}
          className="h-full w-full border-0"
          allow="autoplay; fullscreen; xr-spatial-tracking; camera; microphone"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default ExternalModelViewer

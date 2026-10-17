import { Html, useProgress } from '@react-three/drei'

function ViewerLoader() {
  const { progress } = useProgress()
  const percentage = Math.round(progress)

  return (
    <Html center>
      <div className="w-64 rounded-2xl bg-bronze-900/95 p-6 text-center text-ivory shadow-heritage">
        <p className="font-display text-2xl font-bold">Loading 3D model</p>
        <p className="mt-2 text-sm text-ivory/70">Please wait while the model is prepared.</p>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-ivory/20">
          <div className="h-full bg-sandstone transition-all" style={{ width: `${percentage}%` }} />
        </div>
        <p className="mt-2 text-sm font-semibold">{percentage}%</p>
      </div>
    </Html>
  )
}

export default ViewerLoader

import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, Center, OrbitControls } from '@react-three/drei'
import Model from './Model'
import IllustrativeModel from './IllustrativeModel'
import SketchfabViewer from './SketchfabViewer'
import ExternalModelViewer from './ExternalModelViewer'
import ViewerErrorBoundary from './ViewerErrorBoundary'
import ViewerLoader from './ViewerLoader'
import useWebGLSupport from '../../hooks/useWebGLSupport'
import Button from '../ui/Button'

function Scene({ path, modelType, controlsRef }) {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 8, 5]} intensity={2} />
      <Bounds fit clip observe margin={1.2}>
        <Center>
          {modelType === 'illustrative' ? <IllustrativeModel /> : <Model path={path} />}
        </Center>
      </Bounds>
      <OrbitControls ref={controlsRef} enablePan={false} minDistance={1.5} maxDistance={12} />
    </>
  )
}

function ModelViewer({ path, modelType = 'glb', attribution }) {
  const controlsRef = useRef(null)
  const webGLSupported = useWebGLSupport()

  if (modelType === 'sketchfab') {
    return <SketchfabViewer embedUrl={path} attribution={attribution} />
  }

  if (modelType === 'tripo') {
    return <ExternalModelViewer modelUrl={path} attribution={attribution} provider="Tripo" />
  }

  if (webGLSupported === null) {
    return <div className="flex min-h-80 items-center justify-center rounded-2xl bg-bronze-900 text-sm text-ivory/75">Checking 3D support…</div>
  }

  if (!webGLSupported) {
    return (
      <div role="alert" className="rounded-2xl border border-sandstone/25 bg-sandstone-100 p-6">
        <h2 className="font-display text-2xl font-bold text-bronze-900">Your browser does not support 3D</h2>
        <p className="mt-2 leading-7 text-bronze-800">You can still explore the written record and photographs below.</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-bronze/15 bg-bronze-900">
      <div className="relative h-[22rem] sm:h-[30rem]">
        <ViewerErrorBoundary>
          <Canvas camera={{ position: [4, 3, 5], fov: 45 }} dpr={[1, 2]}>
            <Suspense fallback={<ViewerLoader />}>
              <Scene path={path} modelType={modelType} controlsRef={controlsRef} />
            </Suspense>
          </Canvas>
        </ViewerErrorBoundary>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ivory/10 p-4">
        <p className="text-xs text-ivory/65">Drag to rotate · Scroll or pinch to zoom</p>
        <Button
          variant="secondary"
          className="border-ivory/30 text-ivory hover:bg-ivory/10"
          onClick={() => controlsRef.current?.reset()}
        >
          Reset view
        </Button>
      </div>
      {attribution && (
        <p className="border-t border-ivory/10 px-4 py-3 text-xs leading-5 text-ivory/65">
          Model: {attribution.author} · {attribution.license}
          {attribution.sourceUrl && <> · <a className="underline" href={attribution.sourceUrl} target="_blank" rel="noreferrer">Source</a></>}
          <br />{modelType === 'illustrative' ? 'Illustrative study model. Not a verified reconstruction.' : `${attribution.accuracy ?? 'Model may be simplified or approximate.'}`}
        </p>
      )}
    </div>
  )
}

export default ModelViewer

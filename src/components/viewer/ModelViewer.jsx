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
    <div className="overflow-hidden rounded-3xl border border-bronze/15 bg-bronze-900 shadow-[0_18px_50px_rgba(63,39,25,0.18)]">
      <div className="relative h-[24rem] sm:h-[32rem]">
        <ViewerErrorBoundary>
          <Canvas camera={{ position: [4, 3, 5], fov: 45 }} dpr={[1, 2]}>
            <Suspense fallback={<ViewerLoader />}>
              <Scene path={path} modelType={modelType} controlsRef={controlsRef} />
            </Suspense>
          </Canvas>
        </ViewerErrorBoundary>
      </div>
      <div className="flex justify-end border-t border-ivory/10 p-3">
        <Button
          variant="secondary"
          className="border-ivory/30 text-ivory hover:bg-ivory/10"
          onClick={() => controlsRef.current?.reset()}
        >
          Reset view
        </Button>
      </div>
    </div>
  )
}

export default ModelViewer

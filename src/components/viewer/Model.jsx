import { useGLTF } from '@react-three/drei'

function Model({ path }) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} dispose={null} />
}

export default Model

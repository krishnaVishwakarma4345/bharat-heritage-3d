import { useMemo } from 'react'

function Pillar({ position, color }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[0.28, 1.8, 0.28]} />
      <meshStandardMaterial color={color} roughness={0.8} />
    </mesh>
  )
}

function Wheel({ position, rotation = [Math.PI / 2, 0, 0], color }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh castShadow receiveShadow>
        <torusGeometry args={[0.95, 0.1, 16, 32]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 0.18, 16]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      {Array.from({ length: 12 }, (_, index) => {
        const angle = (index / 12) * Math.PI * 2
        return (
          <mesh key={angle} rotation={[0, 0, angle]} position={[0, 0, 0.02]}>
            <boxGeometry args={[1.6, 0.06, 0.05]} />
            <meshStandardMaterial color={color} roughness={0.7} />
          </mesh>
        )
      })}
    </group>
  )
}

function IllustrativeModel() {
  const colors = useMemo(() => ({
    stone: '#b96f3d',
    darkStone: '#704027',
    ground: '#d7a66f',
  }), [])

  return (
    <group>
      <mesh position={[0, -1.2, 0]} receiveShadow>
        <boxGeometry args={[4.8, 0.35, 3.2]} />
        <meshStandardMaterial color={colors.ground} roughness={0.9} />
      </mesh>
      <mesh position={[0, -0.65, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.8, 0.8, 2.4]} />
        <meshStandardMaterial color={colors.stone} roughness={0.85} />
      </mesh>
      {[-1.35, -0.45, 0.45, 1.35].map((x) => <Pillar key={x} position={[x, 0.35, 0.85]} color={colors.darkStone} />)}
      {[-1.35, -0.45, 0.45, 1.35].map((x) => <Pillar key={x} position={[x, 0.35, -0.85]} color={colors.darkStone} />)}
      <mesh position={[0, 1.35, 0]} castShadow>
        <boxGeometry args={[3.5, 0.25, 2.2]} />
        <meshStandardMaterial color={colors.stone} roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.05, 0]} castShadow>
        <coneGeometry args={[1.2, 1.25, 4]} />
        <meshStandardMaterial color={colors.stone} roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.85, 0]} castShadow>
        <sphereGeometry args={[0.25, 20, 12]} />
        <meshStandardMaterial color={colors.darkStone} roughness={0.7} />
      </mesh>
      <Wheel position={[-2.1, -0.3, 1.25]} color={colors.darkStone} />
      <Wheel position={[2.1, -0.3, 1.25]} color={colors.darkStone} />
    </group>
  )
}

export default IllustrativeModel

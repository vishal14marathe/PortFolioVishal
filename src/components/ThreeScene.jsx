import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function FloatingIcons() {
  const iconsRef = useRef([])

  useFrame(() => {
    iconsRef.current.forEach(icon => {
      icon.rotation.x += 0.005
      icon.rotation.y += 0.01
    })
  })

  return (
    <>
      <mesh position={[-2, 0, 0]} ref={el => iconsRef.current[0] = el}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'#3b82f6'} />
      </mesh>
      <mesh position={[2, 0, 0]} ref={el => iconsRef.current[1] = el}>
        <torusGeometry args={[0.8, 0.2, 16, 32]} />
        <meshStandardMaterial color={'#10b981'} />
      </mesh>
    </>
  )
}

export default function ThreeScene() {
  return (
    <Canvas className="w-full h-64">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingIcons />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      <Stars radius={100} depth={50} count={2000} factor={4} fade speed={1} />
    </Canvas>
  )
}
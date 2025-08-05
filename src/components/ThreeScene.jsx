import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Stars } from '@react-three/drei'
import { useRef } from 'react'

function FloatingReactText() {
  const textRef = useRef()
  const cubeRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    // Animate the text
    textRef.current.position.y = Math.sin(time * 0.5) * 0.2
    textRef.current.rotation.y = time * 0.25

    // Animate the cube
    cubeRef.current.rotation.x = time * 0.5
    cubeRef.current.rotation.y = time * 0.75
  })

  return (
    <>
      <Text
        ref={textRef}
        position={[0, 0, 0]}
        fontSize={1.2}
        color="#61dafb"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        REACT
        <meshStandardMaterial
          attach="material"
          color="#61dafb"
          emissive="#61dafb"
          emissiveIntensity={0.5}
        />
      </Text>

      <mesh ref={cubeRef} position={[0, 0, -2]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#61dafb"
          transparent
          opacity={0.8}
          wireframe
        />
      </mesh>
    </>
  )
}

export default function ThreeScene() {
  return (
    <Canvas className="w-full h-64 md:h-96">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <FloatingReactText />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
        enablePan={false}
      />

      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        fade
        speed={1}
      />
    </Canvas>
  )
}
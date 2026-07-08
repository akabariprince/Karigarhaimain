import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Orbital() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = Math.sin(performance.now() * 0.0002) * 0.18;
  });

  return (
    <group ref={group}>
      <mesh rotation={[0.2, 0.3, 0.1]}>
        <torusKnotGeometry args={[0.78, 0.24, 96, 14]} />
        <meshStandardMaterial color="#2d8f99" roughness={0.25} metalness={0.38} />
      </mesh>
      <mesh position={[2, -1, -0.6]}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial color="#d77c47" roughness={0.22} metalness={0.26} />
      </mesh>
      <mesh position={[-1.9, 1.1, -0.8]}>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color="#dfeff0" roughness={0.45} metalness={0.1} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 4, 5]} intensity={1.6} />
      <pointLight position={[-3, -1, -2]} intensity={1.4} color="#d77c47" />
      <Orbital />
      <mesh position={[0, -1.35, -1.6]} scale={[1.1, 0.8, 0.55]}>
        <sphereGeometry args={[2.5, 28, 28]} />
        <meshStandardMaterial color="#eaf4f5" transparent opacity={0.22} roughness={0.95} metalness={0.02} />
      </mesh>
    </Canvas>
  );
}

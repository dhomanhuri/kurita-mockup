
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, Sphere, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const WaterPlanet = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.01;
      ring1Ref.current.rotation.x += 0.005;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= 0.008;
      ring2Ref.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      {/* Inti Bumi - Tema Air Kristal */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color="#1e40af"
          speed={3}
          distort={0.2}
          radius={1}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Lapisan Atmosfer Glow */}
      <mesh>
        <sphereGeometry args={[2.1, 64, 64]} />
        <meshStandardMaterial
          color="#60a5fa"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          emissive="#60a5fa"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Cincin Orbit 1 (Aliran Solusi) */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={5} transparent opacity={0.6} />
      </mesh>

      {/* Cincin Orbit 2 (Keberlanjutan) */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[3.2, 0.01, 16, 100]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={3} transparent opacity={0.4} />
      </mesh>

      {/* Titik-titik Data Global (Particles) */}
      <points>
        <sphereGeometry args={[2.05, 32, 32]} />
        <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.8} />
      </points>
    </group>
  );
};

const Earth3D: React.FC = () => {
  return (
    <div className="w-full h-[500px] lg:h-[600px] relative">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <WaterPlanet />
        </Float>

        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      
      {/* Overlay Text inside 3D space */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
        <div className="w-64 h-64 border border-blue-400/20 rounded-full animate-spin-slow opacity-20"></div>
      </div>
    </div>
  );
};

export default Earth3D;


import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const FlowParticles = ({ count = 40 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate initial particle data
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 100;
      const xFactor = -1 + Math.random() * 2;
      const yFactor = -1 + Math.random() * 2;
      const zFactor = -1 + Math.random() * 2;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

      // Update time
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Vertical flow logic
      // Reset position when it goes past the top of the tank
      if (particle.my > 1.9) particle.my = -1.9;
      particle.my += speed * 1.5;

      // Add a bit of swaying motion
      const x = xFactor * 1.2 + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 100;
      const z = zFactor * 1.2 + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 100;

      // Apply to dummy object
      dummy.position.set(x * 0.4, particle.my, z * 0.4);
      dummy.scale.set(s * 0.05 + 0.05, s * 0.05 + 0.05, s * 0.05 + 0.05);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshStandardMaterial color="#ffffff" transparent opacity={0.4} metalness={0.8} roughness={0} />
    </instancedMesh>
  );
};

const WaterSystemModel = () => {
  const group = useRef<THREE.Group>(null);

  // Slow rotation for idle state
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={group}>
      {/* Main Tank Body (Glass/Metal casing) */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 4, 32]} />
        <meshStandardMaterial 
          color="#f8fafc" 
          metalness={0.9} 
          roughness={0.1} 
          transparent 
          opacity={0.3}
        />
      </mesh>

      {/* Internal Water Volume */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.45, 1.45, 3.9, 32]} />
        <MeshDistortMaterial
          color="#60a5fa"
          speed={2}
          distort={0.15}
          radius={1}
          metalness={0.2}
          roughness={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Bubbles/Flowing Particles Effect */}
      <FlowParticles count={60} />

      {/* Internal Core/Filter Rod */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 3.8, 16]} />
        <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.1} />
      </mesh>

      {/* Top Cap */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[1.6, 1.6, 0.4, 32]} />
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Bottom Cap */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[1.6, 1.6, 0.4, 32]} />
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Industrial Pipes */}
      <mesh position={[1.8, 1.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color="#64748b" metalness={1} />
      </mesh>
      
      <mesh position={[-1.8, -1.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color="#64748b" metalness={1} />
      </mesh>
    </group>
  );
};

const Solution3D: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-b from-blue-50 to-white rounded-3xl cursor-grab active:cursor-grabbing overflow-hidden border border-blue-100 shadow-inner relative">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 1, 7]} fov={45} />
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.5} />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <WaterSystemModel />
        </Float>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={10} blur={2.5} far={4.5} />
        <Environment preset="city" />
        <OrbitControls enableZoom={true} enablePan={false} minDistance={4} maxDistance={10} />
      </Canvas>
      <div className="absolute bottom-6 right-6 flex items-center space-x-2 text-blue-500 font-medium pointer-events-none bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm text-sm border border-blue-50">
        <i className="fas fa-arrows-spin animate-spin-slow"></i>
        <span>Interactive Visualization · Real-time Flow</span>
      </div>
    </div>
  );
};

export default Solution3D;

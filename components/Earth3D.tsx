import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Sphere, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const ParticleRing = ({ count = 100, radius = 2.5, color = "#0096FF" }) => {
  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      temp.push(x, 0, z);
    }
    return new Float32Array(temp);
  }, [count, radius]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={color} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const WaterGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      {/* Core Water Sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <MeshDistortMaterial
          color="#0047AB"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.1}
          roughness={0.2}
          distort={0.4}
          speed={2}
          radius={1}
        />
      </mesh>

      {/* Outer Glass Shell (Atmosphere) */}
      <mesh>
        <sphereGeometry args={[2.0, 64, 64]} />
        <meshPhysicalMaterial
          color="#80C4E9"
          transmission={0.6}
          thickness={2}
          roughness={0}
          envMapIntensity={2}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Floating Particles/Sparkles simulating Data/Molecules */}
      <Sparkles count={200} scale={5} size={2} speed={0.4} opacity={0.5} color="#0096FF" />

      {/* Orbiting Rings */}
      <group rotation={[Math.PI / 3, 0, 0]}>
        <ParticleRing radius={3} count={80} color="#0096FF" />
      </group>
      <group rotation={[-Math.PI / 4, 0, 0]}>
        <ParticleRing radius={3.5} count={60} color="#60A5FA" />
      </group>
    </group>
  );
};

const Earth3D: React.FC = () => {
  return (
    <div className="w-full h-[500px] lg:h-[600px] relative">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
        <fog attach="fog" args={['#F8FAFC', 8, 20]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#0047AB" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#0096FF" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <WaterGlobe />
        </Float>

        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
      
      {/* Decorative Overlay UI */}
      <div className="absolute top-0 right-0 p-4 pointer-events-none">
        <div className="flex items-center space-x-2 text-[#0047AB]/50 text-xs font-mono">
          <span className="w-2 h-2 bg-[#0047AB] rounded-full animate-pulse"></span>
          <span>LIVE MONITORING</span>
        </div>
      </div>
    </div>
  );
};

export default Earth3D;

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Crystal = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(time) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color="#a855f7"
          speed={4}
          distort={0.45}
          radius={1}
          metalness={0.9}
          roughness={0.1}
          emissive="#6b21a8"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh ref={meshRef} scale={1.02}>
        <icosahedronGeometry args={[1, 15]} />
        <meshBasicMaterial color="#d8b4fe" wireframe opacity={0.1} transparent />
      </mesh>
    </Float>
  );
};

const Background = () => {
  return (
    <mesh scale={10}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        side={THREE.BackSide}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          void main() {
            vec3 color1 = vec3(0.05, 0.05, 0.2); // Deep blue
            vec3 color2 = vec3(0.4, 0.1, 0.7); // Bright purple
            gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
          }
        `}
      />
    </mesh>
  );
};

const CrystalScene = () => {
  return (
    <div className="w-full h-screen bg-slate-950">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#f3e8ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#c084fc" />
        <pointLight position={[0, 5, 0]} intensity={1} color="#ffffff" />
        
        <Crystal />
        <Background />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default CrystalScene;

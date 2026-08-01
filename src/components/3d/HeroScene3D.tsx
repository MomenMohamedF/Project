import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const GOLD = "#d4af37";
const GOLD_DARK = "#6b5420";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

function LuxuryBackdrop({ isRtl }: { isRtl: boolean }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const glowCenter = isRtl ? 0.35 : 0.65;

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.uGlowCenter.value = glowCenter;
    }
  });

  return (
    <mesh scale={18}>
      <sphereGeometry args={[1, 48, 48]} />
      <shaderMaterial
        ref={materialRef}
        side={THREE.BackSide}
        uniforms={{ uTime: { value: 0 }, uGlowCenter: { value: glowCenter } }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform float uGlowCenter;
          varying vec2 vUv;
          void main() {
            vec3 deep = vec3(0.03, 0.03, 0.06);
            vec3 mid = vec3(0.1, 0.08, 0.05);
            vec3 gold = vec3(0.83, 0.69, 0.22);
            float grad = smoothstep(0.0, 1.0, vUv.y);
            vec3 base = mix(deep, mid, grad * 0.7);
            float glow = pow(1.0 - abs(vUv.x - uGlowCenter) * 2.0, 2.0) * 0.18;
            base += gold * glow;
            float pulse = sin(uTime * 0.55) * 0.02 + 0.02;
            base += gold * pulse;
            gl_FragColor = vec4(base, 1.0);
          }
        `}
      />
    </mesh>
  );
}

type GemProps = {
  position: [number, number, number];
  size: number;
  spin?: number;
  variant?: "diamond" | "gold" | "ruby";
};

function AnimatedGem({ position, size, spin = 1, variant = "diamond" }: GemProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x += delta * spin * 0.9;
    meshRef.current.rotation.y += delta * spin * 1.4;
    meshRef.current.rotation.z += delta * spin * 0.35;
    meshRef.current.position.y = position[1] + Math.sin(t * spin * 1.1 + position[0]) * 0.12;
  });

  const material =
    variant === "gold" ? (
      <meshStandardMaterial
        color={GOLD}
        metalness={1}
        roughness={0.06}
        emissive={GOLD}
        emissiveIntensity={0.35}
      />
    ) : variant === "ruby" ? (
      <meshPhysicalMaterial
        color="#ff4d6d"
        metalness={0.1}
        roughness={0.05}
        transmission={0.85}
        thickness={1}
        ior={1.9}
        emissive="#5c0a1a"
        emissiveIntensity={0.15}
        clearcoat={1}
      />
    ) : (
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0}
        roughness={0}
        transmission={0.95}
        thickness={1.5}
        ior={2.4}
        clearcoat={1}
        emissive="#aaccff"
        emissiveIntensity={0.08}
      />
    );

  return (
    <Float speed={spin * 1.8} rotationIntensity={1.4} floatIntensity={1.1}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[size, 0]} />
        {material}
      </mesh>
    </Float>
  );
}

function JewelCluster({ isMobile, isRtl }: { isMobile: boolean; isRtl: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Group>(null);
  const mainGemRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();
  const side = isRtl ? -1 : 1;

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      const parallaxX = side * pointer.x * (isMobile ? 0.15 : 0.28);
      const parallaxY = pointer.y * (isMobile ? 0.12 : 0.22);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        parallaxX + t * 0.22 * side,
        0.06,
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        parallaxY + Math.sin(t * 0.5) * 0.08,
        0.06,
      );
      groupRef.current.position.y = Math.sin(t * 0.85) * 0.18;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.65;
      ringRef.current.rotation.x = Math.sin(t * 0.7) * 0.12;
    }

    if (mainGemRef.current) {
      mainGemRef.current.rotation.y += delta * 0.8;
      mainGemRef.current.rotation.x += delta * 0.45;
    }
  });

  const scale = isMobile ? 0.88 : 1.35;
  const offsetX = side * (isMobile ? 0.35 : 2.4);

  return (
    <group ref={groupRef} position={[offsetX, 0, 0]} scale={scale}>
      <group ref={ringRef} rotation={[Math.PI / 2.65, 0.5, 0]}>
        <mesh>
          <torusGeometry args={[1.55, 0.09, 28, isMobile ? 72 : 160]} />
          <meshStandardMaterial
            color={GOLD}
            metalness={1}
            roughness={0.08}
            emissive={GOLD_DARK}
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[1.68, 0.018, 12, 80]} />
          <meshBasicMaterial color="#fff8e7" transparent opacity={0.55} />
        </mesh>
      </group>

      <Float speed={2.4} rotationIntensity={1.2} floatIntensity={0.9}>
        <mesh ref={mainGemRef} position={[0, 0.2, 0.35]}>
          <octahedronGeometry args={[0.72, 0]} />
          <meshPhysicalMaterial
            color="#f8ffff"
            metalness={0.02}
            roughness={0}
            transmission={0.97}
            thickness={2}
            ior={2.45}
            clearcoat={1}
            emissive="#cce0ff"
            emissiveIntensity={0.12}
          />
        </mesh>
      </Float>

      <AnimatedGem position={[-1.85, 0.45, 0.5]} size={0.38} spin={1.3} variant="gold" />
      <AnimatedGem position={[1.75, -0.15, 0.45]} size={0.32} spin={1.6} variant="diamond" />
      <AnimatedGem position={[1.35, 0.85, -0.2]} size={0.26} spin={2} variant="ruby" />
      <AnimatedGem position={[-1.25, -0.55, 0.15]} size={0.24} spin={1.8} variant="diamond" />
      <AnimatedGem position={[0.95, -0.95, 0.55]} size={0.2} spin={2.2} variant="gold" />

      <Float speed={3} rotationIntensity={2} floatIntensity={1.2}>
        <mesh position={[-0.55, 1.05, 0.25]}>
          <dodecahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color={GOLD}
            metalness={1}
            roughness={0.1}
            emissive={GOLD}
            emissiveIntensity={0.25}
          />
        </mesh>
      </Float>

      <pointLight position={[0, 0.8, 1.5]} intensity={2.8} color="#fff8eb" distance={6} decay={2} />
      <pointLight position={[-1.5, -0.5, 1]} intensity={1.5} color={GOLD} distance={5} decay={2} />
      <pointLight position={[1.5, 0.5, 0.5]} intensity={1.2} color="#ffb4c4" distance={4} decay={2} />
    </group>
  );
}

function Scene({ isMobile, isRtl }: { isMobile: boolean; isRtl: boolean }) {
  const side = isRtl ? -1 : 1;

  return (
    <>
      <LuxuryBackdrop isRtl={isRtl} />
      <fog attach="fog" args={["#08080c", 10, isMobile ? 28 : 32]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[5 * side, 8, 4]} intensity={1.45} color="#fff8eb" />
      <spotLight
        position={[-2 * side, 5, 3]}
        angle={0.45}
        penumbra={0.9}
        intensity={2.4}
        color={GOLD}
      />
      <spotLight
        position={[4 * side, 2, 2]}
        angle={0.5}
        penumbra={1}
        intensity={1.6}
        color="#ffffff"
      />

      <Stars
        radius={55}
        depth={30}
        count={isMobile ? 500 : 1400}
        factor={3}
        saturation={0.2}
        fade
        speed={0.65}
      />

      <JewelCluster isMobile={isMobile} isRtl={isRtl} />
    </>
  );
}

type HeroScene3DProps = {
  onReady?: () => void;
  isRtl?: boolean;
};

const HeroScene3D = ({ onReady, isRtl = false }: HeroScene3DProps) => {
  const isMobile = useIsMobile();
  const side = isRtl ? -1 : 1;

  return (
    <Canvas
      className="!h-full !w-full touch-none"
      camera={{
        position: isMobile
          ? [0.15 * side, 0.15, 6.2]
          : [0.35 * side, 0.1, 5.4],
        fov: isMobile ? 50 : 38,
      }}
      dpr={isMobile ? [1, 1.35] : [1, 2]}
      gl={{
        antialias: !isMobile,
        powerPreference: "high-performance",
        alpha: false,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#08080c");
        onReady?.();
      }}
    >
      <Scene isMobile={isMobile} isRtl={isRtl} />
    </Canvas>
  );
};

export default HeroScene3D;

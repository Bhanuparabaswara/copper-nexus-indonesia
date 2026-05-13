"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const points = [
  [-1, -1, -1],
  [1, -1, -1],
  [-1, 1, -1],
  [1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [-1, 1, 1],
  [1, 1, 1],
  [0, 0, 0]
] as const;

export function CopperCrystalScene() {
  const reduced = useReducedMotion();

  return (
    <div className="h-72 overflow-hidden rounded-lg border border-copper/20 bg-black/20">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 4, 4]} intensity={2.4} color="#FFD700" />
        <group rotation={[0.6, 0.4, 0]}>
          {points.map(([x, y, z], index) => (
            <Sphere key={`${x}-${y}-${z}-${index}`} args={[index === 8 ? 0.18 : 0.13, 24, 24]} position={[x, y, z]}>
              <meshStandardMaterial color={index === 8 ? "#FFD700" : "#B87333"} metalness={0.9} roughness={0.22} />
            </Sphere>
          ))}
        </group>
        {!reduced ? <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} /> : null}
      </Canvas>
    </div>
  );
}

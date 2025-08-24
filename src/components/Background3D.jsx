import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function Particles({ count = 699 }) { // reduced density
  const mesh = useRef(null);
  const { viewport, camera } = useThree();

  const particles = useRef();
  const colors = useRef();

  useEffect(() => {
    const posArray = new Float32Array(count * 3);
    const colArray = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      posArray[i3] = (Math.random() - 0.5) * 10;
      posArray[i3 + 1] = (Math.random() - 0.5) * 10;
      posArray[i3 + 2] = (Math.random() - 0.5) * 10;

      colArray[i3] = 1;
      colArray[i3 + 1] = 1;
      colArray[i3 + 2] = 1;
    }

    particles.current = posArray;
    colors.current = colArray;
  }, [count]);

  useFrame((state, delta) => {
    if (!mesh.current || !particles.current) return;

    mesh.current.rotation.x += delta * 0.01;
    mesh.current.rotation.y += delta * 0.02;

    const positions = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positions[i3] += Math.sin(state.clock.elapsedTime * 0.1 + i) * 0.002;
      positions[i3 + 1] += Math.cos(state.clock.elapsedTime * 0.1 + i) * 0.002;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        {particles.current && (
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.current}
            itemSize={3}
          />
        )}
        {colors.current && (
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors.current}
            itemSize={3}
          />
        )}
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function MovingPlanes() {
  const group = useRef(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;

    group.current.children.forEach((mesh, i) => {
      mesh.rotation.z = Math.sin(state.clock.elapsedTime * 0.1 + i) * 0.5;
      mesh.rotation.x = Math.cos(state.clock.elapsedTime * 0.1 + i) * 0.2;
      mesh.position.y = Math.sin(state.clock.elapsedTime * 0.1 + i) * 0.5;
    });
  });

  return (
    <group ref={group}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[i * 2 - 4, 0, -5 - i]}>
          <planeGeometry args={[2, 2, 1, 1]} />
          <meshBasicMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.02}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const { scrollYProgress } = useScroll();
  const group = useRef(null);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = scrollYProgress.get() * Math.PI;
  });

  return (
    <group ref={group}>
      <Particles />
      <MovingPlanes />
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#000000"]} />
        <Scene />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} intensity={0.425} /> 
        </EffectComposer>
      </Canvas>
    </div>
  );
}

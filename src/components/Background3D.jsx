import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

/* ===================== PARTICLES ===================== */
function Particles({ count = 800 }) {
  const mesh = useRef();
  const mouse = useRef([0, 0]);

  const positions = useRef(new Float32Array(count * 3));

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positions.current[i3] = (Math.random() - 0.5) * 20;
      positions.current[i3 + 1] = (Math.random() - 0.5) * 20;
      positions.current[i3 + 2] = (Math.random() - 0.5) * 20;
    }

    const handleMouseMove = (e) => {
      mouse.current = [
        (e.clientX / window.innerWidth - 0.5) * 2,
        (e.clientY / window.innerHeight - 0.5) * 2,
      ];
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [count]);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    const pos = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // smooth floating motion
      pos[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.0005;

      // subtle mouse interaction
      pos[i3] += mouse.current[0] * 0.0005;
      pos[i3 + 1] += mouse.current[1] * 0.0005;
    }

    mesh.current.rotation.y += delta * 0.02;
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.25}
        sizeAttenuation
      />
    </points>
  );
}

/* ===================== MOVING PLANES ===================== */
function MovingPlanes() {
  const group = useRef();

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
          <planeGeometry args={[2, 2]} />
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

/* ===================== SCENE ===================== */
function Scene() {
  const { scrollYProgress } = useScroll();
  const group = useRef();

  useFrame(({ camera, mouse }) => {
    if (!group.current) return;

    // scroll rotation
    group.current.rotation.y = scrollYProgress.get() * Math.PI;

    // smooth camera movement (premium feel)
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
  });

  return (
    <group ref={group}>
      {/* depth layers */}
      <Particles count={700} />
      <Particles count={300} />
      <MovingPlanes />
    </group>
  );
}

/* ===================== MAIN ===================== */
export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#000000"]} />

        <Scene />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            intensity={0.6}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

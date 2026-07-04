'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useMousePosition } from '@/hooks/usePrefersReducedMotion';

const GLOBE_COLOR = '#00FFFF';
const SHAPE_COLORS = ['#8B5CF6', '#EC4899', '#00FFFF', '#8B5CF6', '#EC4899'];

interface OrbitingShapeProps {
  geometry: THREE.BufferGeometry;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  orbitOffset: number;
  scale: number;
  rotationSpeed: [number, number, number];
}

function Globe({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<THREE.LineSegments>(null);
  const geometry = useMemo(() => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.8, 3)), []);
  useFrame(({ clock }) => {
    if (!ref.current || reducedMotion) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.08;
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.15;
  });
  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color={GLOBE_COLOR} transparent opacity={0.25} />
    </lineSegments>
  );
}

function GlobeInner({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<THREE.LineSegments>(null);
  const geometry = useMemo(() => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.0, 2)), []);
  useFrame(({ clock }) => {
    if (!ref.current || reducedMotion) return;
    ref.current.rotation.y = -clock.getElapsedTime() * 0.05;
    ref.current.rotation.z = clock.getElapsedTime() * 0.03;
  });
  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#8B5CF6" transparent opacity={0.15} />
    </lineSegments>
  );
}

function OrbitingShape({ geometry, color, orbitRadius, orbitSpeed, orbitOffset, scale, rotationSpeed }: OrbitingShapeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.LineSegments>(null);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);
  useFrame(({ clock }) => {
    if (!groupRef.current || !meshRef.current) return;
    const t = clock.getElapsedTime() * orbitSpeed + orbitOffset;
    groupRef.current.position.x = Math.cos(t) * orbitRadius;
    groupRef.current.position.y = Math.sin(t * 0.7) * (orbitRadius * 0.4);
    groupRef.current.position.z = Math.sin(t) * orbitRadius;
    meshRef.current.rotation.x += rotationSpeed[0];
    meshRef.current.rotation.y += rotationSpeed[1];
    meshRef.current.rotation.z += rotationSpeed[2];
  });
  return (
    <group ref={groupRef}>
      <lineSegments ref={meshRef} geometry={edges} scale={scale}>
        <lineBasicMaterial color={color} transparent opacity={0.6} />
      </lineSegments>
    </group>
  );
}

function FloatingParticles({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const neonColors = [new THREE.Color('#00FFFF'), new THREE.Color('#8B5CF6'), new THREE.Color('#EC4899')];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 4 + Math.random() * 8;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      const c = neonColors[Math.floor(Math.random() * neonColors.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);
  useFrame(({ clock }) => {
    if (!ref.current || reducedMotion) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    ref.current.rotation.x = clock.getElapsedTime() * 0.01;
  });
  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function CameraRig({ reducedMotion }: { reducedMotion: boolean }) {
  const { camera } = useThree();
  const { normalizedPosition } = useMousePosition();
  const targetX = useRef(0);
  const targetY = useRef(0);
  useFrame(() => {
    if (reducedMotion) return;
    targetX.current += (normalizedPosition.x * 1.5 - targetX.current) * 0.05;
    targetY.current += (normalizedPosition.y * 1.0 - targetY.current) * 0.05;
    camera.position.x = targetX.current;
    camera.position.y = targetY.current;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  const reducedMotion = usePrefersReducedMotion();
  const orbitingShapes = useMemo(() => [
    { geometry: new THREE.IcosahedronGeometry(0.3, 0), color: SHAPE_COLORS[0], orbitRadius: 4.2, orbitSpeed: 0.4, orbitOffset: 0, scale: 1, rotationSpeed: [0.01, 0.015, 0.005] as [number, number, number] },
    { geometry: new THREE.TorusGeometry(0.25, 0.08, 6, 12), color: SHAPE_COLORS[1], orbitRadius: 5.0, orbitSpeed: 0.3, orbitOffset: Math.PI * 0.4, scale: 1, rotationSpeed: [0.02, 0.01, 0.015] as [number, number, number] },
    { geometry: new THREE.OctahedronGeometry(0.28, 0), color: SHAPE_COLORS[2], orbitRadius: 4.6, orbitSpeed: 0.5, orbitOffset: Math.PI * 0.8, scale: 1, rotationSpeed: [0.008, 0.02, 0.012] as [number, number, number] },
    { geometry: new THREE.DodecahedronGeometry(0.22, 0), color: SHAPE_COLORS[3], orbitRadius: 5.4, orbitSpeed: 0.25, orbitOffset: Math.PI * 1.2, scale: 1, rotationSpeed: [0.015, 0.008, 0.02] as [number, number, number] },
    { geometry: new THREE.TetrahedronGeometry(0.32, 0), color: SHAPE_COLORS[4], orbitRadius: 4.8, orbitSpeed: 0.35, orbitOffset: Math.PI * 1.6, scale: 1, rotationSpeed: [0.012, 0.018, 0.006] as [number, number, number] }
  ], []);

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00FFFF" />
      <Globe reducedMotion={reducedMotion} />
      <GlobeInner reducedMotion={reducedMotion} />
      <FloatingParticles reducedMotion={reducedMotion} />
      {orbitingShapes.map((shape, i) => <OrbitingShape key={i} {...shape} />)}
      <CameraRig reducedMotion={reducedMotion} />
    </>
  );
}

export function GlobeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useTheme } from '@/components/theme/ThemeProvider';

const LIGHT_ACCENTS = ['#4339CA', '#0EA5B7', '#7C3AED'];
const DARK_ACCENTS = ['#8B5CF6', '#00FFFF', '#EC4899'];

interface ShapeConfig {
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
  scale: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

function useShapeConfigs(reducedMotion: boolean, isDark: boolean): ShapeConfig[] {
  return useMemo(() => {
    const geometries = [
      new THREE.IcosahedronGeometry(1.3, 0),
      new THREE.TorusGeometry(1, 0.32, 8, 24),
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.IcosahedronGeometry(0.9, 0)
    ];
    const positions: [number, number, number][] = [
      [-4.2, 1.6, -4],
      [4.5, -1.2, -6],
      [3.2, 2.4, -3],
      [-3.6, -2.2, -5],
      [0.2, -3.2, -7]
    ];
    const accents = isDark ? DARK_ACCENTS : LIGHT_ACCENTS;

    return geometries.map((geometry, i) => ({
      geometry,
      position: positions[i],
      scale: 0.9 + Math.random() * 0.8,
      speedX: reducedMotion ? 0 : (Math.random() - 0.5) * 0.004,
      speedY: reducedMotion ? 0 : (Math.random() - 0.5) * 0.004 + 0.002,
      color: accents[i % accents.length],
      opacity: isDark ? 0.45 : 0.22
    }));
  }, [reducedMotion, isDark]);
}

function WireShape({ config }: { config: ShapeConfig }) {
  const ref = useRef<THREE.LineSegments>(null);
  const edges = useMemo(() => new THREE.EdgesGeometry(config.geometry), [config.geometry]);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += config.speedX;
    ref.current.rotation.y += config.speedY;
  });

  return (
    <lineSegments ref={ref} geometry={edges} position={config.position} scale={config.scale}>
      <lineBasicMaterial color={config.color} transparent opacity={config.opacity} />
    </lineSegments>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame(() => {
    target.current.x += (pointer.x - target.current.x) * 0.03;
    target.current.y += (pointer.y - target.current.y) * 0.03;
    camera.position.x = target.current.x * 1.2;
    camera.position.y = target.current.y * 1.2;
    camera.lookAt(0, 0, -3);
  });

  return null;
}

function Scene() {
  const reducedMotion = usePrefersReducedMotion();
  const { theme } = useTheme();
  const shapes = useShapeConfigs(reducedMotion, theme === 'dark');

  return (
    <>
      {shapes.map((config, i) => (
        <WireShape key={i} config={config} />
      ))}
      {!reducedMotion && <CameraRig />}
    </>
  );
}

export function WireframeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 9], fov: 55 }} gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
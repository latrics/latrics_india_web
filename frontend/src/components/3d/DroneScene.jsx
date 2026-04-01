import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, Stars, Grid } from '@react-three/drei';
import ProceduralDrone from './ProceduralDrone';
import { Suspense } from 'react';

function AtmosphericBackground() {
  return (
    <>
      {/* Subtle star field far in the distance */}
      <Stars radius={60} depth={30} count={800} factor={2} saturation={0} fade speed={0.4} />

      {/* Floating grid acting as a distant ground / horizon plane */}
      <Grid
        position={[0, -2.8, 0]}
        args={[30, 30]}
        cellSize={1.2}
        cellThickness={0.3}
        cellColor="#3a3a3a"
        sectionSize={6}
        sectionThickness={0.6}
        sectionColor="#DA291C"
        fadeDistance={18}
        fadeStrength={2}
        infiniteGrid
      />
    </>
  );
}

export default function DroneScene() {
  return (
    <div
      className="w-full cursor-grab active:cursor-grabbing relative overflow-hidden rounded-2xl"
      style={{
        height: '70vh',
        minHeight: '520px',
        background: 'radial-gradient(ellipse at 50% 40%, #1a1a2e 0%, #0d0d14 55%, #0a0a0a 100%)',
      }}
    >
      {/* Subtle atmospheric glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(218,41,28,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Floating hint label */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/30 select-none">
        Drag to rotate · Scroll to zoom
      </p>

      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 55 }}
        style={{ background: 'transparent' }}
        className="relative z-10"
      >
        {/* Atmospheric Fog for depth */}
        <fog attach="fog" args={['#0d0d14', 10, 40]} />

        {/* Cinematic Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[8, 10, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
        {/* Red accent fill light (from below / side) */}
        <pointLight position={[0, -3, 2]} intensity={0.8} color="#DA291C" distance={10} />
        {/* Cool rim light from behind */}
        <pointLight position={[0, 4, -6]} intensity={0.6} color="#4488ff" distance={12} />

        <Suspense fallback={null}>
          {/* Environment for realistic reflections */}
          <Environment preset="city" />

          {/* Atmospheric background elements */}
          <AtmosphericBackground />

          {/* Drone floating with gentle bob */}
          <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.5}>
            <ProceduralDrone position={[0, 0.3, 0]} scale={1.4} />
          </Float>

          {/* Subtle contact shadow beneath the drone */}
          <ContactShadows
            position={[0, -2.2, 0]}
            opacity={0.45}
            scale={12}
            blur={3}
            far={5}
            color="#000000"
          />
        </Suspense>

        {/* 360° Orbit Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={9}
          autoRotate
          autoRotateSpeed={0.7}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}

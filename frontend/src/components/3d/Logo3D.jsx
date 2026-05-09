import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Stage, useGLTF, Center } from '@react-three/drei';
import { Suspense } from 'react';

/**
 * LogoModel Component
 * Loads the 3D model. Note: Browsers cannot load .step files directly.
 * The user must convert Logo_Normal.step to Logo_Normal.glb (using Blender or online tools).
 */
function LogoModel() {
  /** 
   * MANUALLY ADJUST SIZE HERE 
   * 1.0 is standard, increase for larger, decrease for smaller.
   */
  const manualScale = 40.0; // Reset to 1.0 since we'll use camera distance for sizing

  const { scene } = useGLTF('/Logo_Normal.glb');

  // Apply Latrics Red Metallic Texture
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.8;
      child.material.roughness = 0.2;
      child.material.color.set('#DA291C'); // Latrics Red theme colour
    }
  });

  return (
    <Center>
      <primitive object={scene} scale={manualScale} />
    </Center>
  );
}

export default function Logo3D() {
  return (
    <div className="h-[300px] lg:h-[400px] w-full min-h-[300px] relative flex items-center justify-center"> {/** h is height and w is width of the container where the 3d logo is rendered. Adjust according to the logo image */}
      {/* Glow Effect behind the Canvas */}
      <div className="absolute inset-0 bg-radial from-[#DA291C]/10 to-transparent blur-3xl" />

      <Canvas
        shadows
        camera={{ position: [0, 0, 6], fov: 30 }} // fov is the field of view, which determines how much of the scene is visible
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Center top={false} center={true}>
            <LogoModel />
          </Center>

          {/* Manual Lighting for better control than Stage */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <Environment preset="city" />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={4}
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>

      {/* Interactive Tip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 whitespace-nowrap">
      </div>
    </div>
  );
}

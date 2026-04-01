import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function ProceduralDrone(props) {
  const rotorsRef = useRef([]);

  // Load Latrics logo texture
  const logoTexture = useTexture('/latrics_logo.svg');

  // Spin rotors every frame
  useFrame((state, delta) => {
    rotorsRef.current.forEach((rotor) => {
      if (rotor) rotor.rotation.y += delta * 15;
    });
  });

  // Materials
  const blackMat = new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.3, metalness: 0.7 });
  const darkGrayMat = new THREE.MeshStandardMaterial({ color: '#2a2a2a', roughness: 0.4, metalness: 0.5 });
  const redMat = new THREE.MeshStandardMaterial({ color: '#DA291C', roughness: 0.2, metalness: 0.1 });
  const silverMat = new THREE.MeshStandardMaterial({ color: '#aaaaaa', roughness: 0.2, metalness: 0.9 });

  // Logo decal material — transparent, displayed on top of the red box face
  const logoMat = new THREE.MeshBasicMaterial({
    map: logoTexture,
    transparent: true,
    depthWrite: false,
    side: THREE.FrontSide,
  });

  const armLength = 2.5;
  const arms = [
    { position: [armLength, 0, armLength], rotation: [0, -Math.PI / 4, 0] },
    { position: [-armLength, 0, armLength], rotation: [0, Math.PI / 4, 0] },
    { position: [armLength, 0, -armLength], rotation: [0, Math.PI / 4, 0] },
    { position: [-armLength, 0, -armLength], rotation: [0, -Math.PI / 4, 0] },
  ];

  return (
    <group {...props} scale={[0.5, 0.5, 0.5]}>
      {/* Central Body Core */}
      <Box args={[1.8, 1.2, 1.8]} material={blackMat} position={[0, 0, 0]} castShadow />
      
      {/* Top Cap */}
      <Box args={[1.5, 0.2, 1.5]} material={darkGrayMat} position={[0, 0.7, 0]} castShadow />

      {/* Red LED lines on body */}
      <Box args={[1.9, 0.1, 0.1]} material={redMat} position={[0, 0.3, 0.9]} castShadow />
      <Box args={[1.9, 0.1, 0.1]} material={redMat} position={[0, 0.3, -0.9]} castShadow />
      
      {/* 4 Arms and Motors */}
      {arms.map((arm, i) => (
        <group key={i}>
          <Cylinder args={[0.15, 0.15, armLength * 2.8]} position={[arm.position[0]/2, 0, arm.position[2]/2]} rotation={[Math.PI / 2, 0, arm.rotation[1]]} material={darkGrayMat} castShadow />
          <Cylinder args={[0.4, 0.4, 0.6]} position={arm.position} material={blackMat} castShadow />
          <group ref={(el) => (rotorsRef.current[i] = el)} position={[arm.position[0], 0.3, arm.position[2]]}>
            <Cylinder args={[0.05, 0.05, 0.2]} material={silverMat} />
            <Box args={[2.5, 0.02, 0.15]} material={blackMat} position={[0, 0.1, 0]} castShadow />
          </group>
        </group>
      ))}

      {/* Landing Gear */}
      <Cylinder args={[0.08, 0.08, 2]} position={[0.8, -1.5, 0]} rotation={[0, 0, Math.PI / 6]} material={blackMat} castShadow />
      <Cylinder args={[0.08, 0.08, 2]} position={[-0.8, -1.5, 0]} rotation={[0, 0, -Math.PI / 6]} material={blackMat} castShadow />
      <Cylinder args={[0.1, 0.1, 3]} position={[1.3, -2.4, 0]} rotation={[Math.PI / 2, 0, 0]} material={darkGrayMat} castShadow />
      <Cylinder args={[0.1, 0.1, 3]} position={[-1.3, -2.4, 0]} rotation={[Math.PI / 2, 0, 0]} material={darkGrayMat} castShadow />

      {/* Underslung Payload Block */}
      <group position={[0, -1.2, 0]}>
        {/* Silver gimbal attachment */}
        <Box args={[0.8, 0.5, 0.8]} material={silverMat} position={[0, 0, 0]} castShadow />
        
        {/* Red Sensor Box */}
        <Box args={[1.2, 1.2, 1.2]} material={redMat} position={[0, -0.85, 0]} castShadow />

        {/* Latrics Logo decal on the FRONT face of the red box */}
        {/* Positioned just in front of the box face (z = -0.85 + 0.61) */}
        <mesh
          material={logoMat}
          position={[0, -0.85, 0.62]}
          rotation={[0, 0, 0]}
        >
          <planeGeometry args={[0.9, 0.9]} />
        </mesh>

        {/* Also on the BACK face */}
        <mesh
          material={logoMat}
          position={[0, -0.85, -0.62]}
          rotation={[0, Math.PI, 0]}
        >
          <planeGeometry args={[0.9, 0.9]} />
        </mesh>

        {/* Lens / camera detail */}
        <Cylinder args={[0.3, 0.3, 0.1]} material={blackMat} position={[0, -0.85, -0.65]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  );
}

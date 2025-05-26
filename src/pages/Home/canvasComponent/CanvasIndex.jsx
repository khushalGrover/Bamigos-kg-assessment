// Hero.jsx
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  Center,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  ScrollControls,
} from "@react-three/drei";
import { AnimatedScroll } from "./AnimatedScroll";

export function CanvasIndex() {
  return (
    <div className="canvas-container">
      <Canvas
        shadows
        gl={{ alpha: true }}
        camera={{ position: [0, 5, 5], fov: 30 }}
        className="canvas"
      >
        <ScrollControls pages={6} damping={0.2}>
          <AnimatedScroll />
        </ScrollControls>
        
        <AccumulativeShadows
          temporal
          frames={100}
          color="orange"
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.75}
          opacity={2}
          scale={12}
        >
          <RandomizedLight
            intensity={Math.PI}
            amount={8}
            radius={4}
            ambient={0.5}
            position={[5, 5, -10]}
            bias={0.001}
          />
        </AccumulativeShadows>
        {/* <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} /> */}
        <Environment preset="city" />
      </Canvas>
      <Loader />
    </div>
  );
}

// Hero.jsx
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "@canvasComp/Model";
import { AnimatedModel } from "@canvasComp/AnimatedModel";
import { OverlayUI } from "@canvasComp/OverlayUI";
import {
  Loader,
  Center,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  ScrollControls,
} from "@react-three/drei";

export function CanvasIndex() {
  return (
    <div className="canvas-container">
      <Canvas
        shadows
        gl={{ alpha: true }}
        camera={{ position: [0, 3, 5], fov: 30 }}
        className="canvas"
        // onCreated={state => state.gl.setClearColor("red")}
      >
        {/* <color attach={"background"} args={["#111"]} /> */}
        {/* <fog attach="fog" args={["#0078c8", 0, 150]} /> */}
        <Center>
            <OverlayUI />
          <ScrollControls pages={8} damping={0.1}>
            <AnimatedModel />
          </ScrollControls>
        </Center>
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

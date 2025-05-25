// Hero.jsx
import React, { useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

export function CanvasEle() {
	return (
		<div className="canvas-container">
			<Canvas
				shadows
                gl={{ alpha: true }}
				camera={{ position: [20, 20, 20], fov: 35 }}
				className="canvas"
                // onCreated={state => state.gl.setClearColor("red")}
			>
                {/* <color attach={"background"} args={["#0078c8"]} /> */}
				<fog attach="fog" args={["#0078c8", 0, 150]} />
				<mesh>
					<boxGeometry args={[1, 1, 1]} />
					<meshNormalMaterial />
				</mesh>
			</Canvas>
			<Loader />
		</div>
	);
}

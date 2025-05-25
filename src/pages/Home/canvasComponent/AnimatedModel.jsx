import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { Model } from "./Model";
export function AnimatedModel(props) {
  const ref = useRef();
  const tl = useRef();
  const macOneRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    tl?.current?.seek(scroll?.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // FLOOR One ANIMATION
    tl.current.from(
      macOneRef.current.position,
      {
        duration: 0.5,
        y: -1,
      },
      0
    );
    tl.current.from(
      macOneRef.current.rotation,
      {
        duration: 0.5,
        z: 0,
      },
      0
    );

    tl.current.to(
      macOneRef.current.rotation,
      {
        duration: 0.5,
        z: -Math.PI / 2,
      },
      0.5
    );
    tl.current.to(
      macOneRef.current.position,
      {
        duration: 1,
        y: 3,
      },
      0.5
    );
  }, []);

  return (
    <>
      <group ref={macOneRef} position={[0, 0, 0]}>
        <Model />
      </group>
    </>
  );
}

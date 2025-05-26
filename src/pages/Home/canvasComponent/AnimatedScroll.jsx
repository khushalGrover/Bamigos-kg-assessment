import { useScroll, Scroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { Model } from "./Model";
import { Model2 } from "./Model2";
import { Model3 } from "./Model3";
import HomeHero from "@components/HomeHero";
import HomeFeature from "@components/HomeFeature";
import HomeProduct1 from "@components/HomeProduct1";
import HomeProduct2 from "@components/HomeProduct2";
import HomeProduct3 from "@components/HomeProduct3";

export function AnimatedScroll() {
  const ref = useRef();
  const tl = useRef();
  const macOneRef = useRef();
  const macTwoRef = useRef();
  const macThreeRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
  const scrollProgress = scroll.offset; // value between 0 and 1
  tl.current.seek(scrollProgress * tl.current.duration());
});


  useLayoutEffect(() => {
  tl.current = gsap.timeline();

  // Page 2 (0.2): All 3 Machines Enter
  tl.current.from(macOneRef.current.position, { x: 2, duration: 0.2 }, 0);
  tl.current.from(macTwoRef.current.position, { x: 12, duration: 0.25 }, 0);
  tl.current.from(macThreeRef.current.position, { x: 6, duration: 0.25 }, 0);

  // Page 3 (0.4): Machine One rotate + move right; Others move back in Z
  tl.current.to(macOneRef.current.rotation, { y: -Math.PI * 2.5, duration: 0.2 }, 0.4);
  tl.current.to(macOneRef.current.position, { x: 2, duration: 0.2 }, 0.4);
  tl.current.to(macTwoRef.current.position, { z: -8, duration: 0.25 }, 0.4);
  tl.current.to(macThreeRef.current.position, { z: -8, duration: 0.25 }, 0.4);
  tl.current.to(macThreeRef.current.position, { x: -2, z: 0, duration: 0.01 }, 0.6);

  // Page 4 (0.6): Machine One exits right; Machine Three enters from left
  tl.current.to(macOneRef.current.position, { x: 6, z: 0, duration: 0.25 }, 0.6);
  tl.current.to(macThreeRef.current.position, { x: -2, z:0, duration: 0.25 }, 0.6);

  // Page 5 (0.8): Machine Two re-enters
  tl.current.to(macTwoRef.current.position, { x: 2, z: 0, duration: 0.5 }, 0.8);
  tl.current.to(macThreeRef.current.position, { x: -6, duration: 0.25 }, 1);
}, []);


  return (
    <>
      <Scroll html>
        <HomeHero />
        <HomeFeature />
        <HomeProduct1 />
        <HomeProduct2 />
        <HomeProduct3 />
        {/* <HomeHero /> */}
      </Scroll>
      <group dispose={null} ref={macOneRef} position={[-2, -1, 0]}>
        <Model />
      </group> 
       <group dispose={null} ref={macThreeRef} position={[0, -1, 0]}>
        <Model3 />
      </group>
      <group dispose={null} ref={macTwoRef} position={[2, -1, 0]}>
        <Model2 />
      </group>
    </>
  );
}

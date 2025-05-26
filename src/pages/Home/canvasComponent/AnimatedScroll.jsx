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
    tl.current.seek(scroll.offset * tl.current.duration() * 2);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // Machine One ANIMATION
    tl.current.from(
      macOneRef.current.position,
      {
        duration: 0.2,
        x: 2,
      },
      0
    );
    tl.current.to(
      macOneRef.current.rotation || { x: 0, y: 0, z: 0 },
      {
        duration: 0.2,
        y: Math.PI * 2,
      },
      0.18
    );
    tl.current.to(
      macOneRef.current.position,
      {
        duration: 0.2,
        x: 2,
      },
      0.18
    );
     
    
    
    // Machine Two ANIMATION
    // Machine One ANIMATION
    tl.current.from(
      macTwoRef.current.position,
      {
        duration: 0.2,
        x: 8,
      },
      0.01
    );
      tl.current.to(
      macTwoRef.current.position,
      {
        duration: 0.2,
        z: 5,
      },
      0.22
    );

    


    // Machine Three ANIMATION
    // Machine One ANIMATION
    tl.current.from(
      macThreeRef.current.position,
      {
        duration: 0.2,
        x: 6,
      },
      0.02
    );
    tl.current.to(
      macThreeRef.current.position,
      {
        duration: 0.2,
        z: 5,
      },
      0.2
    );
  }, []);

  return (
    <>
      <Scroll html>
        <HomeHero />
        <HomeFeature />
        <HomeProduct1 />
        <HomeProduct2 />
        <HomeProduct3 />
        <HomeHero />
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

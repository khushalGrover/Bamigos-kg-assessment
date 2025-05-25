import { useScroll, Scroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { Model } from "./Model";
import HomeHero from "@components/HomeHero";
import HomeFeature from "@components/HomeFeature";

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
      macOneRef.current.position,
      {
        duration: 0.2,
        z: 5,
      },
      0.2
    );
    
    
    // Machine Two ANIMATION
    tl.current.from(
      macTwoRef.current.position,
      {
        duration: 0.2,
        y: 5,
      },
      0
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
    tl.current.from(
      macThreeRef.current.position,
      {
        duration: 0.2,
        y: -8,
      },
      0
    );
  }, []);

  return (
    <>
      <Scroll html>
        <HomeHero />
        <HomeFeature />
        <HomeHero />
        <HomeHero />
        <HomeHero />
      </Scroll>
      <group dispose={null} ref={macOneRef} position={[0, -1, 0]}>
        <Model />
      </group> 
       <group dispose={null} ref={macTwoRef} position={[-2, -1, 0]}>
        <Model />
      </group>
      <group dispose={null} ref={macThreeRef} position={[2, -1, 0]}>
        <Model />
      </group>
    </>
  );
}

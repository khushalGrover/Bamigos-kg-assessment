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

    // Machine One ANIMATION
    // from right to left, when reach feature game section (page2)
    tl.current.from(
      macOneRef.current.position,
      {
        duration: 0.5,
        x: 2,
      },
      0.25
    );

    // Rotate the machine and move it
    // from Left to right, when reach product1 section (page3)
    tl.current.to(
      macOneRef.current.rotation || { x: 0, y: 0, z: 0 },
      {
        duration: 0.75,
        y: -Math.PI * 2.5,
      },
      2
    );
    tl.current.to(
      macOneRef.current.position,
      {
        duration: 0.75,
        x: 2,
      },
      2
    );

    // exit animation move to right when react product2 section (page4)
     tl.current.to(
      macOneRef.current.position,
      {
        duration: 0.5,
        x: 6,
        z:0,
      },
      4
    );
   

    
     
    
    
    // Machine Two ANIMATION
    //entry animation
    // from right to left, when reach feature game section (page2)
    tl.current.from(
      macTwoRef.current.position,
      {
        duration: 0.5,
        x: 12,
      },
      0.25
    );
    // exit animation
    // move to z -8 when reach product1 section (page3)
      tl.current.to(
      macTwoRef.current.position,
      {
        duration: 0.5,
        z: -8,
      },
      2
    );
    // entry animation
    // from z -8 to x 2 when reach product3 section (page5) 
     tl.current.to(
      macTwoRef.current.position,
      {
        duration: 0.5,
        x: 2,
        z:0,
      },
      6
    );
    
   

    


    // Machine Three ANIMATION
     // from right to left, when reach feature game section (page2)
    tl.current.from(
      macThreeRef.current.position,
      {
        duration: 0.5,
        x: 6,
      },
      0.25
    );
    // exit from feature section to 
    tl.current.to(
      macThreeRef.current.position,
      {
        duration: 0.5,
        z: -8,
        x: -4,
      },
      1.9
    );
    // Come near tp product2 section target
     tl.current.to(
      macThreeRef.current.position,
      {
        duration: 0.5,
        x: -10,
        z:0,
      },
      3
    );
    // from (-10)left to -2 entry in product section ( page4)
    tl.current.to(
      macThreeRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      4.5
    );
    // exit animation move to left when react product3 section (page4)
    //code here




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

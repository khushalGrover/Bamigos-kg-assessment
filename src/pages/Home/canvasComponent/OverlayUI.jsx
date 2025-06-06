import { Html } from "@react-three/drei";
import { useEffect } from "react";
import { toggleDocumentAttribute } from "@/utils";
import WOW from "wow.js";
import Preloader from "@components/Preloader";
import NavigationBar from "@components/NavigationBar";
import HomeHero from "@components/HomeHero";
import HomeAbout from "@components/HomeAbout";
import HomeAboutBoxes from "@components/HomeAboutBoxes";
import HomeTeam from "@components/HomeTeam";
import HomeQuote from "@components/HomeQuote";
import HomePortfolio from "@components/HomePortfolio";
import HomePricing from "@components/HomePricing";
import HomeClients from "@components/HomeClients";
import HomeBlog from "@components/HomeBlog";
import HomeContactUs from "@components/HomeContactUs";
import Footer from "@components/Footer";
import AnimatedCursor from "@components/AnimatedCursor";
import "@vendor/css/jquery.fancybox.min.css";
import "@vendor/css/cubeportfolio.min.css";
import ".././assets/css/style.css";
import ".././assets/css/custom.css";

export const OverlayUI = () => {
  useEffect(() => {
    const width = $(window).width();
    if (width && width > 767) {
      new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true,
      }).init();
    }
    toggleDocumentAttribute("data-spy", "scroll", "body");
    toggleDocumentAttribute("data-target", ".navbar-nav", "body");
    toggleDocumentAttribute("data-offset", "90", "body");
    return () => {
      toggleDocumentAttribute("data-spy", "scroll", "body", true);
      toggleDocumentAttribute("data-target", ".navbar-nav", "body", true);
      toggleDocumentAttribute("data-offset", "90", "body", true);
    };
  }, []);

  return (
    <Html scale={1} occlude position={[0,0]} className="overlay1">
       {/* <NavigationBar /> */}
      <HomeHero />
      
      <HomeAboutBoxes />

      {/* <HomeAbout />  */}
      
      <HomeTeam /> 

      <HomeQuote />

      <HomePortfolio />
      
      
    </Html>
  );
};

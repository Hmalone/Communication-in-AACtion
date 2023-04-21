import React from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage.js";
import Hero from "../Treact/components/hero/ServicesInfo.js";
import Footer from "../Treact/components/footers/Footer.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Footer />
    </AnimationRevealPage>
  );
}
import React from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage.js";
import Hero from "../Treact/components/hero/LandingInfo.js";
import TwoColWithButton from "Treact/components/features/TwoColWithButton.js";
import Footer from "../Treact/components/footers/Footer.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <TwoColWithButton/>
      <Footer />
    </AnimationRevealPage>
  );
}

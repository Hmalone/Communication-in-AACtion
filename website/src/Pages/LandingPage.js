import React from "react";
import { css } from "styled-components/macro";//eslint-disable-line
import AnimationRevealPage from "../Treact/helpers/AnimationRevealPage.js";


import Hero from "../Treact/components/hero/LandingInfo.js";
import Footer from "../Treact/components/footers/Footer.js";


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Footer />
    </AnimationRevealPage>
  );
}

import React from "react";
import { css } from "styled-components/macro";//eslint-disable-line
import AnimationRevealPage from "../Treact/helpers/AnimationRevealPage.js";


import Hero from "../Treact/components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Footer from "../Treact/components/footers/FiveColumnDark.js";


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Footer />
    </AnimationRevealPage>
  );
}

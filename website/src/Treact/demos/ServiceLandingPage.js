import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";


import Hero from "../components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "Treact/components/features/ThreeColWithSideImage.js";
import MainFeature from "Treact/components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "Treact/components/features/ThreeColCenteredStatsPrimaryBackground.js";
import GetStarted from "Treact/components/cta/GetStartedLight.js";
import Footer from "Treact/components/footers/FiveColumnWithInputForm.js";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <FeatureStats/>
      <Features 
        heading={<>Amazing <HighlightedText>Features</HighlightedText></>}
      />
      <MainFeature
        heading={<>Cloud built by and for <HighlightedText>Professionals</HighlightedText></>}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}

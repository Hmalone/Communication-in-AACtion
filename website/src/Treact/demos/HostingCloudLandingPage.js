import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "Treact/components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "Treact/components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "Treact/components/features/TwoColWithButton.js";
import Pricing from "Treact/components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "Treact/components/testimonials/SimplePrimaryBackground.js";
import FAQ from "Treact/components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "Treact/components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features />
      <Pricing />
      <MainFeature 
        subheading="Reliable"
        heading="Highly Redundant Servers With Backup"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
      />
      <MainFeature 
        subheading="Secure"
        heading="State of the Art Computer Security"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      />
      <Testimonial />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
}

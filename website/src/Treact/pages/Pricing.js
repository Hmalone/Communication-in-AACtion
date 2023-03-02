import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "Treact/components/headers/light.js";
import Pricing from "Treact/components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "Treact/components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "Treact/components/footers/FiveColumnWithInputForm.js";
import FAQ from "Treact/components/faqs/SingleCol.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial
        heading="Our Paying Customers"
      />
      <FAQ />
      <Footer/>
    </AnimationRevealPage>
  );
};

import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "Treact/components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "Treact/components/features/VerticalWithAlternateImageAndText.js";
import Blog from "Treact/components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "Treact/components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "Treact/components/forms/SimpleContactUs.js";
import Footer from "Treact/components/footers/SimpleFiveColumn.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <Blog />
    <Testimonial />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);

import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "Treact/components/hero/FullWidthWithImage.js";
import Features from "Treact/components/features/ThreeColSimple.js";
import MainFeature from "Treact/components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "Treact/components/cards/ThreeColSlider.js";
import TrendingCard from "Treact/components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "Treact/components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "Treact/components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "Treact/components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "Treact/components/forms/SimpleSubscribeNewsletter.js";
import Footer from "Treact/components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <SliderCard />
    <TrendingCard />
    <MainFeature />
    <Blog />
    <Testimonial textOnLeft={true}/>
    <FAQ />
    <SubscribeNewsLetterForm />
    <Footer />
  </AnimationRevealPage>
);

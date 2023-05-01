import React from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage";
import Header from "Treact/components/headers/light.js";
import Footer from "Treact/components/footers/Footer.js";
import ContactUsForm from "Treact/components/forms/TwoColContactUsWithIllustrationFullForm.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
        <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};

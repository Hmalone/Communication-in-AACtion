import React from "react";
//import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "Treact/components/headers/light.js";
import Footer from "Treact/components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "Treact/components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "Treact/components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Pennsylvannia",
            description: (
              <>
                <Address>
                  <AddressLine>Limerick, PA 19468</AddressLine>
                </Address>
                <Email>gia@email.com</Email>
                <Phone>+1 (203) 101-1001</Phone>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};

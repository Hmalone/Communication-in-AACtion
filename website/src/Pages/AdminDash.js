import React from "react";
//import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage";
import tw from "twin.macro";
import Header from "Treact/components/headers/light.js";
import Footer from "Treact/components/footers/Footer.js";
import ContactDetails from "Pages/ServicesPage.js";
import AdminDashForm from "Treact/components/forms/TwoColAdminDash.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <AdminDashForm />
      <ContactDetails
        cards={[
          {
            title: "test in here",
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

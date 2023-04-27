import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "Treact/components/misc/Headings.js";
import { SectionDescription } from "Treact/components/misc/Typography.js";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage.js";
import HeaderBase from "Treact/components/headers/light.js";
import Footer from "../Treact/components/footers/Footer.js";

//import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

export default ({ cards = null, heading = "Our Services", description = "Below our the details on the kinds of services we provide. Feel free to create an account and scheduele an appointment for your child. If you have any questions you can reach out using the contact form." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) title - the title of the card
   *  2) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      title: "Direct Therapy",
      description: "1:1 sessions targeting speech sound and language disorders. In-home services available in Montgomery, Bucks, and Delaware Counties (PA) Teletherapy services available across the state of Pennsylvania"
    },
    { 
      title: "Coaching",
      description: "Live feedback provided to communication partners for implementation of strategies. Available in-home and via teletherapy"
    },
    { 
      title: "Consultation",
      description: "Brainstorming solutions to best support autonomous communication Review of synchronous (live) or asynchronous (video submission) observation. Collaboration with communication partners (siblings, grandparents, babysitters, etc.). IEP advocacy to ensure consistency of implementation strategies across environments."
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <AnimationRevealPage>
    <Container>
      <HeaderBase/>
      <ThreeColumnContainer>
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <Footer/>
    </Container>
    </AnimationRevealPage>
  );
};

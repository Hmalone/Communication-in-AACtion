import React from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "Treact/components/misc/Layouts";
import tw from "twin.macro";
import Footer from "Treact/components/footers/Footer.js";
import { SectionHeading } from "Treact/components/misc/Headings.js";


const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-full xl:w-full p-6 sm:p-12`;
const MainContent = tw.div`mt-16 grid grid-cols-4 gap-4 items-center bg-blue-100`;
const Heading = tw.h1`col-span-3 bg-blue-100 text-2xl xl:text-3xl font-extrabold text-center`;
const SubHeading = tw.h1`col-span-2 text-2xl xl:text-2xl font-extrabold rounded-lg border-2 border-indigo-500`;
const Info = tw(SectionHeading)`mt-2 text-center text-gray-700 leading-snug xl:text-xl`;

export default function AccountView(){
  return (
      <AnimationRevealPage>
        <Container>
          <Content>
            <MainContainer>
              <Heading>Account Details</Heading>
              <MainContent>
                  <SubHeading>Contact Information
                    <Info>Email: (make textboxes)</Info>
                    <Info>Phone: (make textboxes)</Info>
                    <Info>Address: (make textboxes)</Info>
                  </SubHeading>
                  <SubHeading>Child Info
                    <Info>Name: </Info>
                    <Info>Age: </Info>
                    <Info>Grade: </Info>
                  </SubHeading>
              
                  <SubHeading>Upcoming Appointments
                    <Info>info here </Info>
                  </SubHeading>
              
                  <SubHeading>Recent Appointments
                    <Info>info here </Info>
                  </SubHeading>
              </MainContent>
            </MainContainer>
          </Content>
        </Container>
        <Footer/>
      </AnimationRevealPage>
  );
}


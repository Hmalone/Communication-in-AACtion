import React from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "Treact/components/misc/Layouts";
import tw from "twin.macro";
import Footer from "Treact/components/footers/Footer.js";
import { SectionHeading } from "Treact/components/misc/Headings.js";


const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`bg-blue-100 text-2xl xl:text-3xl font-extrabold text-center`;
const SubHeading = tw.h1`text-2xl xl:text-2xl font-extrabold bg-blue-100`;
const Info = tw(SectionHeading)`mt-2 text-left text-gray-700 leading-snug xl:text-xl`;


export default function AccountView(){
    return (
        <AnimationRevealPage>
          <Container>
            <Content>
              <MainContainer>
                <Heading>_</Heading>
                <MainContent>
                    <SubHeading>Contact Information</SubHeading>
                    <Info>Email: (make textboxes)</Info>
                    <Info>Phone: (make textboxes)</Info>
                    <Info>Address: (make textboxes)</Info>
                </MainContent>
                
                <MainContent>
                    <SubHeading>Child Info</SubHeading>
                    <Info>Name: </Info>
                    <Info>Age: </Info>
                    <Info>Services: </Info>
                </MainContent>
              </MainContainer>

              <MainContainer>
                <Heading>Account Details</Heading>
                <MainContent>
                    <SubHeading>Upcoming Appointments</SubHeading>
                </MainContent>
              </MainContainer>

              <MainContainer>
                <Heading>_</Heading>
                <MainContent>
                    <SubHeading>Recent Appointments</SubHeading>
                </MainContent>
              </MainContainer>

            </Content>
          </Container>
          <Footer/>
        </AnimationRevealPage>
    );

}


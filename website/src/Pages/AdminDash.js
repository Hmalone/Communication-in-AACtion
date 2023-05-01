import React, { useState } from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "Treact/components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import Footer from "Treact/components/footers/Footer.js";
import { SectionHeading } from "Treact/components/misc/Headings";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-full xl:w-full p-6 sm:p-12`;
const MainContent = tw.div`mt-16 grid grid-cols-4 gap-4 items-center bg-blue-100`;
const Heading = tw.h1`col-span-3 bg-blue-100 text-2xl xl:text-3xl font-extrabold text-center`;
const SubHeading = tw.h1`col-span-2 p-4 text-2xl xl:text-2xl font-extrabold rounded-lg border-2 border-indigo-500`;
const Info = tw(SectionHeading)`mt-2 text-center text-gray-700 leading-snug xl:text-xl`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

export default function AccountView(){
  const [message, setMessage] = useState('');
  const [image, setImage] = useState([]);
  const submitButtonText = "Create Newsletter";

  async function handleNewsletter(e){
    e.preventDefault();
    var data = {
      message: message,
      image: image
    }
    try{
      let response = await fetch('/newsletter', {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    } catch (error){
      alert("Problem creating newsletter. Error: ", error);
    }
  }

  return (
      <AnimationRevealPage>
        <Container>
          <Content>
            <MainContainer>
              <Heading>Admin Dashboard</Heading>
              <MainContent>
                  <SubHeading>Pending Sessions
                    <Info>Session Info</Info>
                    <Info>Date</Info>
                    <Info>Time</Info>
                    <Info>Location</Info>
                    <Info>Services</Info>
                    <Info>Approve or Deny</Info>
                  </SubHeading>
                  <SubHeading>Pending Testimonials
                    <Info>"The appointment was great"</Info>
                    <Info>Approve or Deny</Info>
                  </SubHeading>
              
                  <SubHeading>Upcoming Appointments
                    <Info>info here </Info>
                  </SubHeading>
              
                  <SubHeading>Recent Appointments
                    <Info>info here </Info>
                  </SubHeading>

                  <SubHeading> Create Newsletter
                    <Form onSubmit={handleNewsletter}>
                      <Input type='message' placeholder='Message' value={message} onChange={e => setMessage(e.target.value)}/>
                      <Input type='file' valye={image} onChange={e => setImage(e.target.files[0])}/>
                      <SubmitButton type="submit" >
                        <span className="text">{submitButtonText}</span>
                      </SubmitButton>
                    </Form>
                  </SubHeading>

              </MainContent>
            </MainContainer>
          </Content>
        </Container>
        <Footer/>
      </AnimationRevealPage>
  );
}
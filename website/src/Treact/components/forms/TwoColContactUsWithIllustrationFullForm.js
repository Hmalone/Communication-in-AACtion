import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "Treact/components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "Treact/components/misc/Buttons.js";
import image from "../../../Images/Standing_PNG.png";
import { useNavigate } from "react-router-dom";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default function ContactForm(){
  const navigate = useNavigate();
  async function handleSubmit(e){
    e.preventDefault();
    var data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: cellNumber,
      message: message
      }
    try{
      let response = await fetch('/send', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });
      const result = response.json();
      alert("Message Sent."); 
      navigate('/');
    } catch (error){
      alert("Message failed to send. Error: ", error);
    }  
  }

  const [firstName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [message, setMessage] = useState('');

  const subheading = "Contact Me";
  const heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with me.</>;
  const description = "Please feel free to reach out with any questions or concerns, or if you are interested in scheduling an information meeting.";
  const submitButtonText = "Send";
  const textOnLeft = true;

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          {<Image imageSrc={image} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={handleSubmit} method="POST">
              <Input type="text" name="first_name" placeholder="First Name" onChange={e => setFristName(e.target.value)}/>
              <Input type="text" name="last_name" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
              <Input type="email" name="email" placeholder="Your Email Address" onChange={e => setEmail(e.target.value)}/>
              <Input type="text" name="phone_number" placeholder="Cell Number" onChange={e => setCellNumber(e.target.value)}/>
              <Textarea name="message" placeholder="Your Message Here" onChange={e => setMessage(e.target.value)}/>
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
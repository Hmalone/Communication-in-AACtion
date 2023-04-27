import React, { useState } from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "Treact/components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
//import { css } from "styled-components/macro"; //eslint-disable-line
//import illustration from "Treact/images/signup-illustration.svg";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import Footer from "Treact/components/footers/Footer.js";


const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

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

export default function AccountForm(){
  async function createAccount(){
    var data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      cellNumber: cellNumber,
      address: address
    }
    try{
      let response = await fetch('/account', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = response.json();
    } catch (error){
      alert("Problem creating account. Error: ", error);
    }
  }
  
  async function handleSubmit(e){
    e.preventDefault();
    
    if(email === ""){
      alert("Please enter an email.");
    }else if(password === ""){
      alert("Please enter a password.");
    }else if(repassword === ""){
      alert("Please re-enter a password.");
    }else if(password !== repassword){
      alert("Passwords do no match, please re-enter passwords.");
    }else if(firstName === ""){
      alert("Please enter your first name.");
    }else if(lastName === ""){
      alert("Please enter your last name.");
    }
    createAccount();
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [firstName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [address, setAddress] = useState('');
  const headingText = "Create an Account";
  const submitButtonText = "Sign Up";
  const SubmitButtonIcon = SignUpIcon;
  return (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <Form>
                <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <Input type="password" placeholder="Repeat Password" value={repassword} onChange={e => setRepassword(e.target.value)} />
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <MainContainer>
          <MainContent>
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <Input type="firstName" placeholder="First Name" value={firstName} onChange={e => setFristName(e.target.value)} />
                <Input type="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                <Input type="cellNumber" placeholder="Cell Number" value={cellNumber} onChange={e => setCellNumber(e.target.value)} />
                <Input type="address" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}/>
                <SubmitButton type="submit" >
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <a href="../SignInPage" tw="border-b border-gray-500 border-dotted">
                      Sign In 
                    </a>
                  </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
    <Footer/>
   </AnimationRevealPage>
  );
}

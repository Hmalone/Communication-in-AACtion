import React from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "Treact/components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "Treact/images/signup-illustration.svg";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import SignInPage from "./SignInPage";
import { Link } from "react-router-dom";


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

export default ({
  headingText = "Create an Account",
  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <Form>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="repeatPassword" placeholder="Repeat Password" />
                <Input type="firstName" placeholder="First Name" />
                <Input type="lastName" placeholder="Last Name" />
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <MainContainer>
          <MainContent>
            <FormContainer>
              <Form>
                <Input type="cellNumber" placeholder="Cell Number" />
                <Input type="address" placeholder="Address" />
                <Input type="childName" placeholder="Child Name" />
                <Input type="childAge" placeholder="Child Birthday" />
                <Input type="childGrade" placeholder="Child Grade" />
                <SubmitButton type="submit">
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link to={SignInPage} tw="border-b border-gray-500 border-dotted">
                      Sign In
                    </Link>
                  </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);

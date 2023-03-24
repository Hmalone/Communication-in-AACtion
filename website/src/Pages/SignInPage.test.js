import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import SignInPage from 'Pages/SignInPage';
import React from "react";
import AnimationRevealPage from "Treact/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "Treact/components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import image from "../Images/Client_pic_1_PNG.png"
import illustration from "Treact/images/login-illustration.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import SignUpPage from "./SignUpPage";
import { Link } from "react-router-dom";

test("Sign In page test", () => {
    const sit_tree = renderer.create(<SignInPage/>).toJSON();
    expect(sit_tree).toMatchSnapshot();
});
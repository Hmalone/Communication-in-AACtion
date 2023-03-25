import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import SignInPage from 'Pages/SignInPage.js';
import React from "react";


test("Sign In page test", () => {
    const sit_tree = renderer.create(<SignInPage/>).toJSON();
    expect(sit_tree).toMatchSnapshot();
});
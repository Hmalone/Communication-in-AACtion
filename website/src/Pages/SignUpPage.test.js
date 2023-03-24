import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import SignUpPage from 'Pages/SignUpPage';

test("Sign Up page test", () => {
    const sut_tree = renderer.create(<SignUpPage/>).toJSON();
    expect(sut_tree).toMatchSnapshot();
});
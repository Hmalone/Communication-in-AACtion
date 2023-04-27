import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import AccountPage from 'Pages/AccountPage.js';

test("account page test", () => {
    const apt_tree = renderer.create(<AccountPage/>).toJSON();
    expect(apt_tree).toMatchSnapshot();
});
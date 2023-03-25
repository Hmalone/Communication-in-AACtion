import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import LandingPage from 'Pages/LandingPage.js';

test("Landing page test", () => {
    const lpt_tree = renderer.create(<LandingPage/>).toJSON();
    expect(lpt_tree).toMatchSnapshot();
});
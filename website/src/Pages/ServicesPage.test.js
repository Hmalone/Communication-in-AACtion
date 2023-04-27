import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import ServicesPage from 'Pages/ServicesPage.js';

test("services page test", () => {
    const spt_tree = renderer.create(<ServicesPage/>).toJSON();
    expect(spt_tree).toMatchSnapshot();
});
import {expect, jest, test} from '@jest/globals';
import ContactUs from 'Pages/ContactUs';
import renderer from 'react-test-renderer';

test("contact page test", () => {
    const cpt_tree = renderer.create(<ContactUs/>).toJSON();
    expect(cpt_tree).toMatchSnapshot();
});
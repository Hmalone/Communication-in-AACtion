import {expect, jest, test} from '@jest/globals';
import ContactUs from 'Treact/pages/ContactUs';
import renderer from 'react-test-renderer';
import LandingPage from 'Pages/LandingPage';
//import AboutUs from 'Treact/pages/AboutUs';

test("contact page test", () => {
    const cpt_tree = renderer.create(<ContactUs/>).toJSON();
    expect(cpt_tree).toMatchSnapshot();
});

// test("about us page test", () => {
//     const aupt_tree = renderer.create(<ContactUs/>).toJSON();
//     expect(aupt_tree).toMatchSnapshot();
// })

// test("landing page test", () => {
//     const lpt_tree = renderer.create(<LandingPage/>).toJSON();
//     expect(lpt_tree).toMatchSnapshot();
// });
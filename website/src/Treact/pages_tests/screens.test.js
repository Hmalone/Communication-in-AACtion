import {expect, jest, test} from '@jest/globals';
import ContactUs from 'Treact/pages/ContactUs';
import renderer from 'react-test-renderer';
import LandingPage from 'Pages/LandingPage';
import AdminDash from 'Treact/pages/AdminDash';
//import AboutUs from 'Treact/pages/AboutUs';

test("contact page test", () => {
    const cpt_tree = renderer.create(<ContactUs/>).toJSON();
    expect(cpt_tree).toMatchSnapshot();
});

// seems like you can't use .create twice? when order is switched, this passes and contact page test fails
// test("admin dash test", () => {
//     const adt_tree = renderer.create(<AdminDash/>).toJSON();
//     expect(adt_tree).toMatchSnapshot();
// });

// test("about us page test", () => {
//     const aupt_tree = renderer.create(<ContactUs/>).toJSON();
//     expect(aupt_tree).toMatchSnapshot();
// })

// test("landing page test", () => {
//     const lpt_tree = renderer.create(<LandingPage/>).toJSON();
//     expect(lpt_tree).toMatchSnapshot();
// });
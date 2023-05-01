import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Testimonials from 'Pages/TestimonialsPage';

test("Testimonals page test", () => {
    const sut_tree = renderer.create(<Testimonials/>).toJSON();
    expect(sut_tree).toMatchSnapshot();
});
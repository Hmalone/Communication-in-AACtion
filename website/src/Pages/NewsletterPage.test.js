import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import NewsletterPage from 'Pages/NewsletterPage';

test("newsletter page test", () => {
    const spt_tree = renderer.create(<NewsletterPage/>).toJSON();
    expect(spt_tree).toMatchSnapshot();
});
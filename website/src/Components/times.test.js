import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Times from 'Components/times.js';
import Time from 'Components/time.js';

test("Times comp test", () => {
    const tst_tree = renderer.create(<Times/>).toJSON();
    expect(tst_tree).toMatchSnapshot();
});

test("Time comp test", () => {
    const tct_tree = renderer.create(<Time/>).toJSON();
    expect(tct_tree).toMatchSnapshot();
});
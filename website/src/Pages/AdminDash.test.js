import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import AdminDash from 'Pages/AdminDash';

test("admin dash test", () => {
    const adt_tree = renderer.create(<AdminDash/>).toJSON();
    expect(adt_tree).toMatchSnapshot();
});
import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Calendar from 'Pages/CalendarPage';


test("calendar page test", () => {
    const cpt_tree = renderer.create(<Calendar/>).toJSON();
    expect(cpt_tree).toMatchSnapshot();
});
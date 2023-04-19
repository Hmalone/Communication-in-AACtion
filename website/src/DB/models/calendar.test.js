import {expect, jest, test} from '@jest/globals';

const calendarDB = require("./calendar");

afterEach(async function(){
    await calendarDB.deleteAll();
});

test("Create new calendar", async function(){
    let newCal = {scheduleId: "123", mondayTimes: ['08:00','09:00','10:00'], tuesdayTimes: ['08:00','09:00','10:00'], wednesdayTimes: ['08:00','09:00','10:00'], thursdayTimes: ['08:00','09:00','10:00'], fridayTimes: ['08:00','09:00','10:00']};
    let created = await calendarDB.create(newCal);
    let found = await calendarDB.read(created._id);
    expect(created).toBe(found);
});

test("Delete calendar", async function(){
    let newCal = {scheduleId: "123", mondayTimes: ['08:00','09:00','10:00'], tuesdayTimes: ['08:00','09:00','10:00'], wednesdayTimes: ['08:00','09:00','10:00'], thursdayTimes: ['08:00','09:00','10:00'], fridayTimes: ['08:00','09:00','10:00']};
    let created = await calendarDB.create(newCal);
    await calendarDB.del("123");
    let found = await calendarDB.read(created._id);
    expect(found).toBe(NULL);
});

test("Update calendar", async function(){
    let newCal = {scheduleId: "123", mondayTimes: ['08:00','09:00','10:00'], tuesdayTimes: ['08:00','09:00','10:00'], wednesdayTimes: ['08:00','09:00','10:00'], thursdayTimes: ['08:00','09:00','10:00'], fridayTimes: ['08:00','09:00','10:00']};
    let created = await calendarDB.create(newCal);
    let updated = {scheduleId: "321", mondayTimes: ['08:00','09:00','10:00'], tuesdayTimes: ['08:00','09:00','10:00'], wednesdayTimes: ['08:00','09:00','10:00'], thursdayTimes: ['08:00','09:00','10:00'], fridayTimes: ['08:00','09:00','10:00']};
    created = await calendarDB.update("123", updated);
    let found = await calendarDB.read(created._id);
    expect(created).toBe(found);
});
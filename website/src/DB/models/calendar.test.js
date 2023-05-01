import {expect, jest, test} from '@jest/globals';

const calendarDB = require("./calendar");

afterEach(async function(){
    await calendarDB.deleteAll();
});

test("Create new calendar", async function(){
    let newCal = {customer: "test", childName: "test kid", date: "05/10", time: "11:00", service: "lesson", location: "virtual"};
    let created = await calendarDB.create(newCal);
    let found = await calendarDB.read(created._id);
    expect(created).toBe(found);
});

test("Delete calendar", async function(){
    let newCal = {customer: "test", childName: "test kid", date: "05/10", time: "11:00", service: "lesson", location: "virtual"};
    let created = await calendarDB.create(newCal);
    await calendarDB.del("123");
    let found = await calendarDB.read(created._id);
    expect(found).toBe(NULL);
});

test("Update calendar", async function(){
    let newCal = {customer: "test", childName: "test kid", date: "05/10", time: "11:00", service: "lesson", location: "virtual"};
    let created = await calendarDB.create(newCal);
    let updated = {customer: "test", childName: "test kid 2", date: "05/10", time: "11:00", service: "lesson", location: "virtual"};
    created = await calendarDB.update("test", updated);
    let found = await calendarDB.read(created._id);
    expect(created).toBe(found);
});
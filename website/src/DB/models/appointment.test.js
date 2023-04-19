import {expect, jest, test} from '@jest/globals';

const appointmentDB = require("./appointment");

afterEach(async function(){
    await appointmentDB.deleteAll();
});

test("Create new appointment", async function(){
    let newApp = {appointmentId:"123", appointmentDate: "4/4/2023", location: "virtual", service: "lesson", message: "testing"};
    let created = await appointmentDB.create(newApp);
    let found = await appointmentDB.read(created._id);
    expect(created).toBe(found);
});

test("Delete appointment", async function(){
    let newApp = {appointmentId:"123", appointmentDate: "4/4/2023", location: "virtual", service: "lesson", message: "testing"};
    let created = await appointmentDB.create(newApp);
    await appointmentDB.del("123");
    let found = await appointmentDB.read(created._id);
    expect(found).toBe(NULL);
});

test("Update appointment", async function(){
    let newApp = {appointmentId:"123", appointmentDate: "4/4/2023", location: "virtual", service: "lesson", message: "testing"};
    let created = await appointmentDB.create(newApp);
    let updated = {appointmentId:"321", appointmentDate: "4/10/2023", location: "virtual", service: "lesson", message: "testing"};
    created = await appointmentDB.update("123", updated);
    let found = await appointmentDB.read(created._id);
    expect(created).toBe(found);
});
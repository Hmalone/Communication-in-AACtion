import {expect, jest, test} from '@jest/globals';

const testimonialDB = require("./testimonial");

afterEach(async function(){
    await testimonialDB.deleteAll();
});

test("Create new testimonial", async function(){
    let newTestimonial = {message: "test"};
    let created = await testimonialDB.create(newTestimonial);
    let found = await testimonialDB.read(created._id);
    expect(created).toBe(found);
});

test("Delete testimonial", async function(){
    let newTestimonial = {message: "test"};
    let created = await testimonialDB.create(newTestimonial);
    await testimonialDB.del("test");
    let found = await testimonialDB.read(created._id);
    expect(found).toBe(NULL);
});

test("Update testimonial", async function(){
    let newTestimonial = {message: "test"};
    let created = await testimonialDB.create(newTestimonial);
    let newNews2 = {message: "tester"};
    created = await testimonialDB.update("test", updated);
    let found = await testimonialDB.read(created._id);
    expect(created).toBe(found);
});
import {expect, jest, test} from '@jest/globals';

const newsDB = require("./newsletter");

afterEach(async function(){
    await newsDB.deleteAll();
});

test("Create new newsletter", async function(){
    let newNews = {message: "test"};
    let created = await newsDB.create(newNews);
    let found = await newsDB.read(created._id);
    expect(created).toBe(found);
});

test("Delete newsletter", async function(){
    let newNews = {message: "test"};
    let created = await newsDB.create(newNews);
    await newsDB.del("test");
    let found = await newsDB.read(created._id);
    expect(found).toBe(NULL);
});

test("Update newsletter", async function(){
    let newNews = {message: "test"};
    let created = await newsDB.create(newNews);
    let newNews2 = {message: "tester"};
    created = await newsDB.update("test", updated);
    let found = await newsDB.read(created._id);
    expect(created).toBe(found);
});
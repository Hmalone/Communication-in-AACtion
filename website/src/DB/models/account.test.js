import {expect, jest, test} from '@jest/globals';
const accountDB = require("./account");

afterEach(async function(){
    await accountDB.deleteAll();
});

test("Create new account test", async function(){
    let newAccount = {email:"test", password:"123", firstName:"first", lastName:"last", address:"address", phoneNumber:"cell"};
    let created = await accountDB.create(newAccount);
    let found = await accountDB.read(created._id);
    expect(created.email).toBe(found.email);
});

test("Delete account", async function(){
    let newAccount = {email:"test", password:"123", firstName:"first", lastName:"last", address:"address", phoneNumber:"cell"};
    let created = await accountDB.create(newAccount);
    await accountDB.del("test");
    let found = await accountDB.read(created._id);
    expect(found).toBe(NULL);
});

test("Update account", async function(){
    let newAccount = {email:"test", password:"123", firstName:"first", lastName:"last", address:"address", phoneNumber:"cell"};
    let created = await accountDB.create(newAccount);
    let updated = {email:"test2", password:"123", firstName:"first", lastName:"last", address:"address", phoneNumber:"cell"};
    created = await accountDB.update("test", updated);
    let found = await accountDB.read(created._id);
    expect(created).toBe(found);
});
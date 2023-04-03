const accountDB = require("./account");

test("Create new account test", async function(){
    let newAccount = {email:"test", password:"123", firstName:"first", lastName:"last", address:"address", phoneNumber:"cell"};
    let created = await accountDB.create(newAccount);
    let found = await accountDB.read(created._id);
    expect(created.email).toBe(found.email);
});

test("Read all accounts test", async function(){
    
})
const Account = require("../DB/routes/accountRoutes.js");

module.exports = async function createAccount(userName, email, password, firstName, lastName){
    try{
        const existingAccount = await Account.findOne({userName: userName})
        if(existingAccount) throw new Error(`An account with the name ${userName} already exists.`)

        const newAccount = new Account({userName, 
            email, 
            password,
            firstName,
            lastName,
        })
        await newAccount.save()

        return{
            accountID: newAccount._id
        }
    } catch (err) {
        throw err
    }
}

module.exports = async function updateAccount(userName, email, password, firstName, lastName, address, phoneNumber){
    try{
        const existingAccount = await Account.findOne({userName: userName})
        if(!(existingAccount)) throw new Error(`An account with the name ${userName} does not exists.`)

        
    }
}
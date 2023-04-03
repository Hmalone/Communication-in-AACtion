const mongoose = require("mongoose");

const ChildSchema = new mongoose.Schema({
    childName:{
        type: String,
    },
    childGrade:{
        type: String,
    },
    childBirthday:{
        type: Date,
    },
})

const AccountSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    child: [ChildSchema],
  });
  
const accountModel = mongoose.model("Account", AccountSchema);
  
exports.readAll = async function(){
    let accounts = await accountModel.find();
    return accounts;
  }

exports.read = async function(id){
    let account = await accountModel.findById(id);
    return account;
  }

exports.create = async function(newAccount){
    const account = new accountModel(newAccount);
    await account.save();
    return account;
  }

exports.del = async function(id){
    let account = await accountModel.findByIdAndDelete(id);
    return account;
} 

exports.deleteAll = async function(){
    await accountModel.deleteMany();
}

exports.update = async function(id, updatedAccount){
    let account = await accountModel.findByIdAndUpdate(id, updatedAccount);
    await account.save();
    return account;
}

exports.login = async function(email, pass){
    let account = await accountModel.findOne({email:email, password:pass});
    return account;
}
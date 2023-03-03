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
    userName: {
      type: String,
      required: true,
    },
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
  
  const Account = mongoose.model("Account", AccountSchema);
  
  module.exports = Account;
const mongoose = require("mongoose");

exports.connect = function(){
  mongoose.connect(
    "mongodb+srv://Hunter:HMpass@website.c5x0mfa.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );
}

exports.disconnect = async function(){
  await mongoose.connection.close();
}




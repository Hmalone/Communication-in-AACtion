const mongoose = require("mongoose");

exports.connect = function(where){
  let uri = "mongodb+srv://Hunter:HMpass@website.c5x0mfa.mongodb.net/?retryWrites=true&w=majority";
  if(where == 'test')
    uri = "mongodb+srv://Hunter:HMpass@website.c5x0mfa.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
    }
  );
}

exports.disconnect = async function(){
  await mongoose.connection.close();
}




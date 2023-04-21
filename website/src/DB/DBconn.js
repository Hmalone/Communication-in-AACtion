const mongoose = require("mongoose");

exports.connect = function(where){
  let uri = process.env.DB_URI;
  if(where == 'test')
    uri = process.env.DB_URI;
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
} 

exports.disconnect = async function(){
  await mongoose.connection.close();
}
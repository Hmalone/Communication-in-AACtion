require('dotenv').config();
const dbconn = require('./DB/DBconn');
dbconn.connect();

const ExpressApp = require('./App');

ExpressApp.app.listen(process.env.PORT,process.env.HOSTNAME,function(){
    console.log(`Server is running on ${process.env.HOSTNAME}:${process.env.PORT}...`);
});
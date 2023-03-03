const express = require("express");
const mongoose = require("mongoose");
const accountRouter = require("./routes/accountRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://<username>:<password>@website.c5x0mfa.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(accountRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});

/*const express = require("express");
const accountModel = require("../models/account.js");
const app = express();

app.use(express.json())

app.get("/accounts", async (request, response) => {
  const accounts = await accountModel.find({});

  try {
    response.send(accounts);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/account", async (request, response) => {
    const account = new accountModel(request.body);

    try {
        await account.save();
        response.send(account);
    } catch (error){
        response.status(500).send(error);
    }
});

app.patch("/account/:id", async (request, response) => {
    const account = new accountModel(request.body);

    try {
      await accountModel.findByIdAndUpdate(request.params.id, request.body);
      await accountModel.save();
      response.send(account);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.delete("/account/:id", async (request, response) => {
    try {
      const account = await accountModel.findByIdAndDelete(request.params.id);
  
      if (!account) response.status(404).send("No account found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
});


module.exports = app;
*/
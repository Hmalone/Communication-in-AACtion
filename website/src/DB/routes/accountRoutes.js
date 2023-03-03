const express = require("express");
const accountModel = require("../models/account.js");
const app = express();

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
    }
})

module.exports = app;
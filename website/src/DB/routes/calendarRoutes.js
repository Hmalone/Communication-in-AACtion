// const express = require("express");
// const calendarModel = require("../models/calendar.js");
// const app = express();

// app.get("/calendar", async (request, response) => {
//   const cal = await calendarModel.find({});

//   try {
//     response.send(cal);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// app.post("/calendar", async (request, response) => {
//     const cal = new calendarModel(request.body);

//     try {
//         await cal.save();
//         response.send(cal);
//     } catch (error){
//         response.status(500).send(error);
//     }
// });

// app.patch("/calendar/:id", async (request, response) => {
//     try {
//       await calendarModel.findByIdAndUpdate(request.params.id, request.body);
//       await calendarModel.save();
//       response.send(request.cal);
//     } catch (error) {
//       response.status(500).send(error);
//     }
// });

// app.delete("/calendar/:id", async (request, response) => {
//     try {
//       const cal = await calendarModel.findByIdAndDelete(request.params.id);
  
//       if (!cal) response.status(404).send("No calendar found");
//       response.status(200).send();
//     } catch (error) {
//       response.status(500).send(error);
//     }
// });


// module.exports = app;
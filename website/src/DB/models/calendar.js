const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema({
    scheduleId: {
        type: String,
        required: true,
    },
    mondayTimes:{
        type: Array,
    },
    tuesdayTimes:{
        type: Array,
    },
    wednesdayTimes:{
        type: Array,
    },
    thursdayTimes:{
        type: Array,
    },
    fridayTimes:{
        type: Array,
    }
  });
  
  const Calendar = mongoose.model("Calendar", CalendarSchema);
  
  module.exports = Calendar;
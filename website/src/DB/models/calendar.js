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
  
const calendarModel = mongoose.model("Calendar", CalendarSchema);
  
exports.readAll = async function(){
    let calendars = await calendarModel.find();
    return calendars;
}

exports.read = async function(id){
    let calendar = await calendarModel.findById(id);
    return calendar;
}

exports.create = async function(newCalendar){
    const calendar = new calendarModel(newCalendar);
    await calendar.save();
    return calendar;
}

exports.del = async function(id){
    let calendar = await calendarModel.findByIdAndDelete(id);
    return calendar;
} 

exports.deleteAll = async function(){
    await calendarModel.deleteMany();
}

exports.update = async function(id, updatedCalendar){
    let calendar = await calendarModel.findByIdAndUpdate(id, updatedCalendar);
    await calendar.save();
    return calendar;
}


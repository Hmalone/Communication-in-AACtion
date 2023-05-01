const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
    },
    childName: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
});
  
const calendarModel = mongoose.model("calendar", CalendarSchema);
  
exports.readAll = async function(){
    let appointments = await calendarModel.find();
    return appointments;
}

exports.read = async function(id){
    let appointment = await calendarModel.findById(id);
    return appointment;
}

exports.create = async function(newAppointment){
    const appointment = new calendarModel(newAppointment);
    await appointment.save();
    return appointment;
}

exports.del = async function(id){
    let appointment = await calendarModel.findByIdAndDelete(id);
    return appointment;
} 

exports.deleteAll = async function(){
    await calendarModel.deleteMany();
}

exports.update = async function(id, updatedAppointment){
    let appointment = await calendarModel.findByIdAndUpdate(id, updatedAppointment);
    await appointment.save();
    return appointment;
}


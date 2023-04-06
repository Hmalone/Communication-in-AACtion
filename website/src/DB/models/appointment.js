const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    appointmentId: {
        type: String,
        required: true,
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
        //maybe use bool if only options are virtual or her house
    },
    service: {
        type: String,
        required: true,
        //maybe set/distinguish each service with an int
    },
    //optional if user wants to include a message when booking                                                
    message: {
        type: String,
    }
});

const appointmentModel = mongoose.model("Appointment", AppointmentSchema);

exports.readAll = async function(){
    let appointments = await appointmentModel.find();
    return appointments;
}

exports.read = async function(id){
    let appointment = await appointmentModel.findById(id);
    return appointment;
}

exports.create = async function(newAppointment){
    const appointment = new appointmentModel(newAppointment);
    await appointment.save();
    return appointment;
}

exports.del = async function(id){
    let appointment = await appointmentModel.findByIdAndDelete(id);
    return appointment;
} 

exports.deleteAll = async function(){
    await appointmentModel.deleteMany();
}

//original scheduling should be confirmed multiple times
exports.update = async function(id, updatedAppointment){
    let appointment = await appointmentModel.findByIdAndUpdate(id, updatedAppointment);
    await appointment.save();
    return appointment;
}
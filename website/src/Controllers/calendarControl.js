const calendarDB = require("../DB/models/calendar");

exports.getAll = async function(req,res){
    res.status(200);
    res.send(await calendarDB.readAll());
    res.end();
}

exports.get = function(req,res){
    let id = req.params.id;
    let found = calendarDB.read(id);

    if(found !== null){
        res.status(200);
        res.send(found);
    }
    else{
        res.status(404);
        res.send({msg:"Appointment not found."});
    }
    res.end();
}

exports.postCreateOrUpdate = function(req,res){
    let newAppointment = {};
    newAppointment.customer = req.body.customer;
    newAppointment.childName = req.body.childName;
    newAppointment.date = req.body.date;
    newAppointment.time = req.body.time;
    newAppointment.service = req.body.service;
    newAppointment.location = req.body.location;

    if(req.body.id){
        console.log("Update appointment");
        calendarDB.update(newAppointment);
    }else{
        calendarDB.create(newAppointment);
    }
    res.redirect("#")
}

exports.deleteOne = function(req,res){
    let id = req.params.id;

    calendarDB.del(id);
    res.redirect("../#");
}
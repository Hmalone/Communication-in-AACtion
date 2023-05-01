const testimonialDB = require("../DB/models/testimonial");

exports.getAll = async function (req,res){
    res.status(200);
    res.send(await testimonialDB.readAll());
    res.end();
}

exports.postCreateOrUpdate = function(req,res){
    let newTestimonial = {};
    newTestimonial.message = req.body.message,
    newTestimonial.image = req.body.image


    if(req.body.id){
        console.log("Update testimonial");
        testimonialDB.update(newTestimonial);
    }else{
        testimonialDB.create(newTestimonial);
    }
}
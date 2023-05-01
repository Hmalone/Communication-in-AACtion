const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
    testimonial: String,
    name: String,
});

const testimonialModel = mongoose.model("Testimonial", TestimonialSchema);

exports.readAll = async function(){
    let testimonials = await testimonialModel.find();
    return testimonials;
}

exports.create = async function(newTestimonial){
    const testimonial = new testimonialModel(newTestimonial);
    await testimonial.save();
    return testimonial;
}

exports.del = async function(id){
    let testimonial = await testimonialModel.findByIdAndDelete(id);
    return testimonial;
}

exports.update = async function(id, updatedNewsletter){
    let testimonial = await testimonialModel.findByIdAndUpdate(id, updatedNewsletter);
    await testimonial.save();
    return testimonial;
}
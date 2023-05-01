const mongoose = require("mongoose");

const NewsletterSchema = new mongoose.Schema({
    message: String,
    image: {
        data: Buffer,
        contentType: String
    },
});

const newsletterModel = mongoose.model("Newsletter", NewsletterSchema);

exports.readAll = async function(){
    let newsletters = await newsletterModel.find();
    return newsletters;
}

exports.create = async function(newNewsletter){
    const newsletter = new newsletterModel(newNewsletter);
    await newsletter.save();
    return newsletter;
}

exports.del = async function(id){
    let newsletter = await newsletterModel.findByIdAndDelete(id);
    return newsletter;
}

exports.update = async function(id, updatedNewsletter){
    let newsletter = await newsletterModel.findByIdAndUpdate(id, updatedNewsletter);
    await newsletter.save();
    return newsletter;
}
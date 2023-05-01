const newsletterDB = require("../DB/models/newsletter");

exports.getAll = async function (req,res){
    res.status(200);
    res.send(await newsletterDB.readAll());
    res.end();
}

exports.postCreateOrUpdate = function(req,res){
    let newNewsletter = {};
    newNewsletter.message = req.body.message,
    newNewsletter.image = req.body.image


    if(req.body.id){
        console.log("Update newsletter");
        newsletterDB.update(newNewsletter);
    }else{
        newsletterDB.create(newNewsletter);
    }
}
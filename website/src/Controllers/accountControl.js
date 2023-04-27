const accountDB = require("../DB/models/account");
const passUtil = require('../util/PasswordUtil');

exports.getAll = async function(req,res){
    res.status(200);
    res.send(await accountDB.readAll());
    res.end();
}

exports.get = function(req,res){
    let id = req.params.id;
    let found = accountDB.read(id);

    if(found !== null){
        res.status(200);
        res.send(found);
    }
    else{
        res.status(404);
        res.send({msg:"Account not found."});
    }
    res.end();
}

exports.postCreateOrUpdate = function(req,res){
    let newAccount = {};
    newAccount.email = req.body.email;
    newAccount.password = passUtil.hashPassword(req.body.password);
    newAccount.firstName = req.body.firstName;
    newAccount.lastName = req.body.lastName;
    newAccount.address = req.body.address;
    newAccount.phoneNumber = req.body.cellNumber;


    if(req.body.id){
        console.log("Update account");
        accountDB.update(newAccount);
    }else{
        accountDB.create(newAccount);
    }
    res.redirect("#")
}

exports.deleteOne = function(req,res){
    let id = req.params.id;

    accountDB.del(id);
    res.redirect("../#");
}

exports.login = async function(req,res){
    let email = req.body.email;
    let pwd = passUtil.hashPassword(req.body.password);
    console.log(email +" "+ pwd);
    let account = await accountDB.login(email, pwd);
    
    console.log(account);

    if(account != null){
        account.password = null;
        req.session.account = account;
        res.redirect("../AccountPage");
    }else{
        res.redirect('SignUpPage?error=1');
    }
}

exports.loggedUser = function(req,res){
    res.status(200); 
    res.send(req.session.account);
    res.end();
}

exports.logout = function(req, res){
    req.session.account = null;
    res.redirect("/#")
}

//maybe just add account profile/view stuff in here?
//need account email, phone, address (not sure that gets collected on the site?), and child name, age, and grade
//also need past and upcoming appointments and related details for each
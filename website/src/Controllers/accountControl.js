const accountDB = require("../DB/models/account");


export class Child{
    constructor(childName, childGrade, childBirthday){
        this.childName = childName;
        this.childGrade = childGrade;
        this.childBirthday = childBirthday;
    }
    
    getName(){
        return this.childName;
    }

    getGrade(){
        return this.childGrade;
    }

    getBirthday(){ 
        return this.childBirthday;
    }
}

export class Account{
    constructor(email, password, firstName, lastName, address, phoneNumber, child, accountID){
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.child = child;
    }
}

/*exports.getAll = async function(req,res){
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
    newAccount.password = req.body.password;
    newAccount.firstName = req.body.firstName;
    newAccount.lastName = req.body.lastName;
    newAccount.address = req.body.address;
    newAccount.phoneNumber = req.body.phoneNumber;

    if(req.body.id){

    }
}*/
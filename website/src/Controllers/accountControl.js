const AccountDB = require("../DB/routes/accountRoutes.js");

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

    create(){
        return AccountDB.post(this.email, this.password, this.firstName, this.lastName, this.address, this.phoneNumber, this.child.getName(), this.child.getGrade(), this.child.getBirthday())
    }
}
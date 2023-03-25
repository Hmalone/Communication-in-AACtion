//const AccountDB = require("../DB/routes/accountRoutes.js");
const CalendarDB = require("../DB/routes/calendarRoutes.js");

export class Calendar{
    constructor(scheduleId, mondayTimes, tuesdayTimes, wednesdayTimes, thursdayTimes, fridayTimes){
        this.scheduleId = scheduleId;
        this.mondayTimes = mondayTimes;
        this.tuesdayTimes = tuesdayTimes;
        this.wednesdayTimes = wednesdayTimes;
        this.thursdayTimes = thursdayTimes;
        this.fridayTimes = fridayTimes;
    }

    create(){
        return CalendarDB.post(this.scheduleId, this.mondayTimes, this.tuesdayTimes, this.wednesdayTimes, this.thursdayTimes, this.fridayTimes)
    }


}
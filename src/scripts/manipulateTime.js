define('manipulateTime', [], function(){
    'use strict';

    function TimeManipulator(date) {
        this.date = (date instanceof Date) ? date : new Date();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.dayPart = null;
        this.hourPart = null;
    }

    TimeManipulator.prototype.setTime = function setTime (date){
        var date = (date instanceof Date) ? date : this.date || new Date();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.getPartOfDay();
        this.getPartOfHour();
    };

    TimeManipulator.prototype.getPartOfDay = function hourInWords (){
        if (this.hour >= 12) {
            this.dayPart = "pm";
        } else {
            this.dayPart = "am";
        }
        return this.dayPart;
    };

    TimeManipulator.prototype.getPartOfHour = function minuteInWords (){
        if (this.minute > 30) {
            this.hourPart = "to";
            //increment hour in order to refer to next hour
            this.hour += 1;
        } else {
            this.hourPart = "past";
        }
        return this.hourPart;
    };

    return TimeManipulator;

});

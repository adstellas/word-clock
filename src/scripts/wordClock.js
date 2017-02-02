define('wordClock', ["manipulateTime", "drawClock"], function(TimeManipulator, ClockDrawer ) {
    'use strict';

    function WordClock(date) {
        this.date = (date instanceof Date) ? date : new Date();
        this.timeManipulator = new TimeManipulator(this.date);
        this.clockDrawer = new ClockDrawer();
    }

    WordClock.prototype.showTimeInWords = function showTimeInWords(date) {
        this.clockDrawer.clearWordClockView();

        this.timeManipulator.setTime(date);

        this.clockDrawer.highlightTimeInWords({
            hour: this.timeManipulator.hour,
            minute: this.timeManipulator.minute,
            dayPart: this.timeManipulator.dayPart,
            hourPart: this.timeManipulator.hourPart
        });
    };

    return WordClock;

});
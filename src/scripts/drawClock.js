define('drawClock', [], function () {
    'use strict';

    var SECINMIN = 60;
    var HALFOFMINUTE = 30;
    var HALFOFDAY = 12;

    function ClockDrawer() {
    }

    ClockDrawer.prototype.highlightTimeInWords = function highlightTimeInWords(timeInfo) {
        this.getMinuteAsSelectorsToHighlight(timeInfo.minute, timeInfo.hourPart);
        this.getHourAsSelectorsToHighlight(timeInfo.minute, timeInfo.hour, timeInfo.dayPart);
    };

    ClockDrawer.prototype.getMinuteAsSelectorsToHighlight = function getMinuteAsSelectorsToHighlight(minute, hourPart) {
        var minuteName = '';
        var remainderPartOfMinuteName = '';

        minute = (minute > HALFOFMINUTE) ? SECINMIN - minute : minute;

        if (minute === 0) {
            minuteName = 'oclock';
            hourPart = '';
        }

        if (minute > 0 && minute <= 20 || minute === 30) {
            minuteName = "minute-" + minute;
        }

        if (minute > 20 && minute < 30) {
            minuteName = "minute-" + minute % 10;
            remainderPartOfMinuteName = "minute-" + (minute - minute % 10);
        }

        this.highlightSelectedWordsOfTime([minuteName, remainderPartOfMinuteName, hourPart]);
    };

    ClockDrawer.prototype.getHourAsSelectorsToHighlight = function getHourAsSelectorsToHighlight(minute, hour, dayPart) {
        var preposition = (dayPart === 'am') && (hour < 6) ? 'at' : 'in';
        var article = (dayPart === 'am') && (hour > 6) || (dayPart === 'pm') ? 'the' : '';

        var dayTime;

        if (hour <= 23) {
            dayTime = 'evening';
        }

        if (hour < 18) {
            dayTime = 'afternoon';
        }

        if (hour < 12) {
            dayTime = 'morning';
        }

        if (hour < 6) {
            dayTime = 'night';
        }

        if (!(hour % HALFOFDAY) && !minute) {
            dayTime = (dayPart === 'pm') ? 'noon' : 'midnight';
            preposition = '';
            article = '';
        }
        hour = (hour % HALFOFDAY) ? hour % HALFOFDAY : hour;
        this.highlightSelectedWordsOfTime(["hour-" + hour, preposition, article, dayTime]);
    };

    ClockDrawer.prototype.highlightSelectedWordsOfTime = function highlightSelectedWordsOfTime(selectorList) {
        //highlight initial words: IT IS
        document.querySelector('#it').classList.add('highlight');
        document.querySelector('#is').classList.add('highlight');

        for (var i = 0; i < selectorList.length; i++) {
            var word = selectorList[i];
            if (word.length > 0) {
                document.querySelector('#' + word).classList.add('highlight');
            }
        }
    };

    ClockDrawer.prototype.clearWordClockView = function clearWordClockView() {
        var highlightedWords = document.querySelectorAll('.highlight');
        highlightedWords.forEach(function (element) {
            element.classList.remove('highlight');
        });
    };

    return ClockDrawer;

});

define(['wordClock', 'manipulateTime'], function (WordClock, TimeManipulator) {
    'use strict';

    describe('Word Clock is a clock that shows time with words', function () {

        var wordClock;

        beforeEach(function () {
            wordClock = new WordClock();
        });

        it('expects module wordClock to be defined', function () {
            expect(wordClock).toBeDefined();
        });

        it('expects property date to be defined', function () {
            expect(wordClock.date).toBeDefined();
        });

        it('expects property timeManipulator to be defined', function () {
            expect(wordClock.timeManipulator).toBeDefined();
        });

        it('expects property clockDrawer to be defined', function () {
            expect(wordClock.clockDrawer).toBeDefined();
        });

        it('expects property date to be equal to current date', function () {
            var currentDate = new Date();
            wordClock = new WordClock();
            expect(wordClock.date).toEqual(currentDate);
        });

        it('expects property date to be equal to current date if the date is NOT instance of Date', function () {
            var dateString = 'date';
            var currentDate = new Date();
            wordClock = new WordClock(dateString);
            expect(wordClock.date).toEqual(currentDate);
        });

        it('expects property date to be equal to Date(2017, 1, 1, 15, 43)', function () {
            var date = new Date(2017, 1, 1, 15, 43);
            wordClock = new WordClock(date);
            expect(wordClock.date).toEqual(date);
        });

        it('expects method showTime to be defined', function () {
            expect(wordClock.showTimeInWords).toBeDefined();
        });

        it('expects method showTime to assign date parameter to this.date', function () {
            var date = new Date();
            wordClock.showTimeInWords(date);
            expect(wordClock.date).toEqual(date);
        });

    });

});

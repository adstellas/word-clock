define(['manipulateTime'], function (TimeManipulator) {
    'use strict';

    describe('Time Manipulator gets time from date and sets part of hour and part of day', function () {
        var timeManipulator;

        beforeEach(function () {
            timeManipulator = new TimeManipulator();
        });

        it('expects module timeManipulator to be defined', function () {
            expect(timeManipulator).toBeDefined();
        });

        describe('Checking date property', function () {
            it('expects property date to be defined', function () {
                expect(timeManipulator.date).toBeDefined();
            });

            it('expects property date to be equal to current date', function () {
                var currentDate = new Date();
                timeManipulator = new TimeManipulator();
                expect(timeManipulator.date).toEqual(currentDate);
            });

            it('expects property date to be equal to Date(2017, 1, 1, 15, 43)', function () {
                var date = new Date(2017, 1, 1, 15, 43);
                timeManipulator = new TimeManipulator(date);
                expect(timeManipulator.date).toEqual(date);
            });

            it('expects property date to be equal to current date if the parameter is NOT instance of Date', function () {
                var dateString = 'date';
                var currentDate = new Date();
                timeManipulator = new TimeManipulator(dateString);
                expect(timeManipulator.date).toEqual(currentDate);
            });
        });

        describe('Checking hour property', function () {
            it('expects property hour to be defined', function () {
                expect(timeManipulator.hour).toBeDefined();
            });

            it('expects property hour to be equal to current hour', function () {
                var currentDate = new Date();
                timeManipulator = new TimeManipulator();
                var hour = currentDate.getHours();
                expect(timeManipulator.hour).toEqual(hour);
            });

            it('expects property hour to be equal to 15', function () {
                var date = new Date(2017, 1, 1, 15, 43);
                var hour = date.getHours();
                timeManipulator = new TimeManipulator(date);
                expect(timeManipulator.hour).toEqual(hour);
            });
        });

        describe('Checking minute property', function () {
            it('expects property minute to be defined', function () {
                expect(timeManipulator.minute).toBeDefined();
            });

            it('expects property hour to be equal to current minute', function () {
                var currentDate = new Date();
                timeManipulator = new TimeManipulator();
                var minute = currentDate.getMinutes();
                expect(timeManipulator.minute).toEqual(minute);
            });

            it('expects property minute to be equal to 43', function () {
                var date = new Date(2017, 1, 1, 15, 43);
                var minute = date.getMinutes();
                timeManipulator = new TimeManipulator(date);
                expect(timeManipulator.minute).toEqual(minute);
            });
        });

        describe('Checking dayPart property', function () {

            it('expects property dayPart to be defined', function () {
                expect(timeManipulator.dayPart).toBeDefined();
            });
        });

        describe('Checking hourPart property', function () {
            it('expects property hourPart to be defined', function () {
                expect(timeManipulator.hourPart).toBeDefined();
            });
        });

        describe('Checking setTime method', function () {
            it('expects method setTime to be defined', function () {
                expect(timeManipulator.setTime).toBeDefined();
            });

            it("tracks that getPartOfHour was called", function() {
                spyOn(timeManipulator, 'getPartOfHour').and.callThrough();
                timeManipulator.getPartOfHour();
                expect(timeManipulator.getPartOfHour).toHaveBeenCalled();
            });

            it("tracks that getPartOfDay was called", function() {
                spyOn(timeManipulator, 'getPartOfDay').and.callThrough();
                timeManipulator.getPartOfDay();
                expect(timeManipulator.getPartOfDay).toHaveBeenCalled();
            });

            it('expects date property to be equal to Date(2017, 7, 30, 2, 6)', function () {
                var date = new Date(2017, 7, 30, 2, 6);
                var timeManipulator = new TimeManipulator(date);
                expect(timeManipulator.date).toEqual(date);
            });

            it('expects hour property to be equal to 2', function () {
                var date = new Date(2017, 7, 30, 2, 6);
                var hour = date.getHours();
                var timeManipulator = new TimeManipulator(date);
                expect(timeManipulator.hour).toEqual(hour);
            });

            it('expects minute property to be equal to 6', function () {
                var date = new Date(2017, 7, 30, 2, 6);
                var minute = date.getMinutes();
                var timeManipulator = new TimeManipulator(date);
                expect(timeManipulator.minute).toEqual(minute);
            });

        });

        describe('Checking getPartOfDay method', function () {
            it('expects method getPartOfDay to be defined', function () {
                expect(timeManipulator.getPartOfDay).toBeDefined();
            });

            it('expects dayPart to be equal to "pm" ', function () {
                timeManipulator.hour = 12;
                var dayPart = timeManipulator.getPartOfDay();
                expect(dayPart).toEqual("pm");
            });

            it('expects dayPart to be equal to "am" ', function () {
                timeManipulator.hour = 6;
                var dayPart = timeManipulator.getPartOfDay();
                expect(dayPart).toEqual("am");
            });

        });

        describe('Checking getPartOfHour method', function () {
            it('expects method getPartOfHour to be defined', function () {
                expect(timeManipulator.getPartOfHour).toBeDefined();
            });

            it('expects dayPart to be equal to "past"', function () {
                timeManipulator.minute = 12;
                var dayPart = timeManipulator.getPartOfHour();
                expect(dayPart).toEqual("past");
            });

            it('expects dayPart to be equal to "to" ', function () {
                timeManipulator.minute = 35;
                var hourPart = timeManipulator.getPartOfHour();
                expect(hourPart).toEqual("to");
            });

            it('expects to increment hour by 1 if minute is > 30', function () {
                var date = new Date(2017, 7, 30, 2, 45);
                var timeManipulator = new TimeManipulator(date);
                timeManipulator.getPartOfHour();
                expect(timeManipulator.hour).toEqual(3);
            });

        });

    });
});

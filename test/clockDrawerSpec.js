define(['drawClock'], function (ClockDrawer) {
    'use strict';

    describe('ClockDrawer converts time to words, highlights words and clears highlighted words', function () {

        var clockDrawer;

        beforeEach(function () {
            document.body.innerHTML = __html__.index;
            clockDrawer = new ClockDrawer();
        });

        afterEach(function () {
            document.body.innerHTML = __html__.index;
        });

        it('expects module clockDrawer to be defined', function () {
            expect(clockDrawer).toBeDefined();
        });

        describe('Checking method highlightTimeInWords', function () {
            it('expects module clockDrawer to have method highlightTimeInWords', function () {
                expect(clockDrawer.highlightTimeInWords).toBeDefined();
            });

            it('expects module clockDrawer to have method highlightTimeInWords', function () {
                var timeInfo = {
                    hour: 13,
                    minute: 18,
                    dayPart: 'pm',
                    hourPart: 'past'
                };
                clockDrawer.highlightTimeInWords(timeInfo);
                var minuteIsHighlighted = document.getElementById('minute-18').classList.contains('highlight');
                var hourIsHighlighted = document.getElementById('hour-1').classList.contains('highlight');
                var prepIsHighlighted = document.getElementById('in').classList.contains('highlight');
                var attrIsHighlighted = document.getElementById('the').classList.contains('highlight');
                var dayTimeIsHighlighted = document.getElementById('afternoon').classList.contains('highlight');
                expect(((minuteIsHighlighted && hourIsHighlighted) && (prepIsHighlighted && attrIsHighlighted)) && dayTimeIsHighlighted).toBeTruthy();
            });
        });

        describe('Checking method getMinuteAsSelectorsToHighlight', function () {
            it('expects module clockDrawer to have method getMinuteAsSelectorsToHighlight', function () {
                expect(clockDrawer.getMinuteAsSelectorsToHighlight).toBeDefined();
            });

            it('expects getMinuteAsSelectorsToHighlight highlight word oclock', function () {
                var minute = 0;
                var past  = 'past';
                clockDrawer.getMinuteAsSelectorsToHighlight(minute, past);
                var oclockIsHighlighted = document.getElementById('oclock').classList.contains('highlight');
                expect(oclockIsHighlighted).toBeTruthy();
            });

            it('expects getMinuteAsSelectorsToHighlight highlight words ten and past', function () {
                var minute = 10;
                var past  = 'past';
                clockDrawer.getMinuteAsSelectorsToHighlight(minute, past);
                var tenIsHighlighted = document.getElementById('minute-10').classList.contains('highlight');
                var pastIsHighlighted = document.getElementById('past').classList.contains('highlight');
                expect(tenIsHighlighted, pastIsHighlighted).toBeTruthy();
            });

            it('expects getMinuteAsSelectorsToHighlight highlight words twenty, two, and past', function () {
                var minute = 30;
                var past  = 'past';
                clockDrawer.getMinuteAsSelectorsToHighlight(minute, past);
                var minuteIsHighlighted = document.getElementById('minute-30').classList.contains('highlight');
                var pastIsHighlighted = document.getElementById('past').classList.contains('highlight');
                expect(minuteIsHighlighted, pastIsHighlighted).toBeTruthy();
            });

            it('expects getMinuteAsSelectorsToHighlight highlight words twenty, two, and to', function () {
                var minute = 38;
                var to  = 'to';
                clockDrawer.getMinuteAsSelectorsToHighlight(minute, to);
                var minuteIsHighlighted = document.getElementById('minute-20').classList.contains('highlight');
                var twoIsHighlighted = document.getElementById('minute-2').classList.contains('highlight');
                var toIsHighlighted = document.getElementById('to').classList.contains('highlight');
                expect(minuteIsHighlighted, twoIsHighlighted, toIsHighlighted).toBeTruthy();
            });

            it('expects getMinuteAsSelectorsToHighlight highlight words 17 and to', function () {
                var minute = 43;
                var to  = 'to';
                clockDrawer.getMinuteAsSelectorsToHighlight(minute, to);
                var minuteIsHighlighted = document.getElementById('minute-17').classList.contains('highlight');
                var toIsHighlighted = document.getElementById('to').classList.contains('highlight');
                expect(minuteIsHighlighted, toIsHighlighted).toBeTruthy();
            });
        });

        describe('Checking method getHourAsSelectorsToHighlight', function () {
            it('expects module clockDrawer to have method getHourAsSelectorsToHighlight', function () {
                expect(clockDrawer.getHourAsSelectorsToHighlight).toBeDefined();
            });

            it('expects getHourAsSelectorsToHighlight highlight word noon', function () {
                var minute = 0;
                var hour = 12;
                var pm = 'pm';
                clockDrawer.getHourAsSelectorsToHighlight(minute, hour, pm);
                var noonIsHighlighted = document.getElementById('noon').classList.contains('highlight');
                expect(noonIsHighlighted).toBeTruthy();
            });

            it('expects getHourAsSelectorsToHighlight highlight word midnight', function () {
                var minute = 0;
                var hour = 12;
                var am = 'am';
                clockDrawer.getHourAsSelectorsToHighlight(minute, hour, am);
                var midnightIsHighlighted = document.getElementById('midnight').classList.contains('highlight');
                expect(midnightIsHighlighted).toBeTruthy();
            });

            it('expects getHourAsSelectorsToHighlight highlight word three, at, night', function () {
                var minute = 15;
                var hour = 4;
                var am = 'am';
                clockDrawer.getHourAsSelectorsToHighlight(minute, hour, am);
                var threeIsHighlighted = document.getElementById('hour-4').classList.contains('highlight');
                var atIsHighlighted = document.getElementById('at').classList.contains('highlight');
                var nightIsHighlighted = document.getElementById('night').classList.contains('highlight');
                expect(threeIsHighlighted && atIsHighlighted && nightIsHighlighted).toBeTruthy();
            });

            it('expects getHourAsSelectorsToHighlight highlight word two, in , the, morning', function () {
                var minute = 17;
                var hour = 11;
                var am = 'am';
                clockDrawer.getHourAsSelectorsToHighlight(minute, hour, am);
                var twoIsHighlighted = document.getElementById('hour-11').classList.contains('highlight');
                var inIsHighlighted = document.getElementById('in').classList.contains('highlight');
                var theIsHighlighted = document.getElementById('the').classList.contains('highlight');
                var morningIsHighlighted = document.getElementById('morning').classList.contains('highlight');
                expect(twoIsHighlighted, inIsHighlighted, theIsHighlighted, morningIsHighlighted).toBeTruthy();
            });

            it('expects getHourAsSelectorsToHighlight highlight word three, in, the, afternoon', function () {
                var minute = 15;
                var hour = 15;
                var pm = 'pm';
                clockDrawer.getHourAsSelectorsToHighlight(minute, hour, pm);
                var threeIsHighlighted = document.getElementById('hour-3').classList.contains('highlight');
                var inIsHighlighted = document.getElementById('in').classList.contains('highlight');
                var theIsHighlighted = document.getElementById('the').classList.contains('highlight');
                var afternoonIsHighlighted = document.getElementById('afternoon').classList.contains('highlight');
                expect(threeIsHighlighted && inIsHighlighted && theIsHighlighted && afternoonIsHighlighted).toBeTruthy();
            });

            it('expects getHourAsSelectorsToHighlight highlight word nineteen, in, the, evening', function () {
                var minute = 15;
                var hour = 19;
                var pm = 'pm';
                clockDrawer.getHourAsSelectorsToHighlight(minute, hour, pm);
                var nineteenIsHighlighted = document.getElementById('hour-7').classList.contains('highlight');
                var inIsHighlighted = document.getElementById('in').classList.contains('highlight');
                var theIsHighlighted = document.getElementById('the').classList.contains('highlight');
                var eveningIsHighlighted = document.getElementById('evening').classList.contains('highlight');
                expect(nineteenIsHighlighted && inIsHighlighted && theIsHighlighted && eveningIsHighlighted).toBeTruthy();
            });

        });

        describe('Checking method highlightSelectedWordsOfTime', function () {
            it('expects module method highlightSelectedWordsOfTime to be defined', function () {
                expect(clockDrawer.highlightSelectedWordsOfTime).toBeDefined();
            });

            it('expects module method highlightSelectedWordsOfTime to highlight selected elements', function () {
                clockDrawer.highlightSelectedWordsOfTime(['minute-19', 'to', 'hour-8', 'in', 'the', 'evening']);

                var itIsHighlighted = document.querySelector('#it').classList.contains('highlight');
                var isIsHighlighted = document.querySelector('#is').classList.contains('highlight');
                var minIsHighlighted = document.querySelector('#minute-19').classList.contains('highlight');
                var toIsHighlighted = document.querySelector('#to').classList.contains('highlight');
                var hourIsHighlighted = document.querySelector('#hour-8').classList.contains('highlight');
                var inIsHighlighted = document.querySelector('#in').classList.contains('highlight');
                var theIsHighlighted = document.querySelector('#the').classList.contains('highlight');
                var eveningIsHighlighted = document.querySelector('#evening').classList.contains('highlight');

                var noHighlightedElements = itIsHighlighted && isIsHighlighted && minIsHighlighted && toIsHighlighted
                    && hourIsHighlighted && inIsHighlighted && theIsHighlighted && eveningIsHighlighted;

                expect(noHighlightedElements).toBeTruthy();
            });
        });


        describe('Checking method clearWordClockView', function () {
            it('expects module method clearWordClockView to be defined', function () {
                expect(clockDrawer.getHourAsSelectorsToHighlight).toBeDefined();
            });

            it('expects module method clearWordClockView to clear highlighted classes', function () {
                document.querySelector('#it').classList.add('highlight');
                document.querySelector('#is').classList.add('highlight');
                document.querySelector('#minute-12').classList.add('highlight');
                document.querySelector('#past').classList.add('highlight');
                document.querySelector('#hour-6').classList.add('highlight');
                document.querySelector('#in').classList.add('highlight');
                document.querySelector('#the').classList.add('highlight');
                document.querySelector('#evening').classList.add('highlight');
                clockDrawer.clearWordClockView();
                var selectedElements = document.querySelector('.highlight');
                expect(selectedElements).toEqual(null);
            });
        });

    });


});
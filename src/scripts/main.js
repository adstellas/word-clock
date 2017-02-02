requirejs.config({
    baseUrl: '/src/scripts'
});

requirejs(['wordClock'], function (WordClock) {
    'use strict';

    var date = new Date();

    var wordClock = new WordClock(date);
    wordClock.showTimeInWords();

    //update time every minute
    setTimeout(function run() {

        wordClock.showTimeInWords();

        setTimeout(run, 60000);

    }, 60000);

});

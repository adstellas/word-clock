var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src/scripts',

    // ask Require.js to load these files (all our tests)
    deps: [
        'base/test/wordClockSpec.js',
        'base/test/timeManipulatorSpec.js',
        'base/test/clockDrawerSpec.js'
    ],

    // start test run, once Require.js is done
    callback: window.__karma__.start
});


exports.config = {

    /**
     * server configurations
     */
    maxInstances: 1,
    host: '0.0.0.0',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './test/e2e/specs/*.spec.js'
    ],
    exclude: [
        'test/spec/multibrowser/**',
        'test/spec/mobile/**'
    ],

    /**
     * capabilities
     */
     capabilities: [{
       browserName: 'chrome'
     }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    sync: true,
    coloredLogs: true,
    screenshotPath: './test/e2e/screenshots',
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    framework: 'jasmine',

    reporters: ['spec'],
    reporterOptions: {
    outputDir: './'
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 9999999
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('Starting end2end tests');
    },
    onComplete: function() {
        console.log('All done!');
    }

};

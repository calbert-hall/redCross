module.exports = {

    //apiKey: 'mRL1000UGJvg0Ne0v5SbRN102P1047G6b1D5SNeFfh3NTm2Z0110',

    showLogs: true,

    testConcurrency: 20,

    //disableBrowserFetching: false,

    disableBrowserFetching: true,

    failCypressOnDiff: false,

    batchSequenceName: 'ARC', //optional

    saveDebugData: false,

    ignoreDisplacements: false, // false =

    polyfillAdoptedStyleSheets: true,

    waitBeforeCapture: 250,

    //notifyOnCompletion: true,

    layoutBreakpoints: true,

    browser: [



                    // Add browsers with different viewports



                    {width: 1024, height: 768, name: 'chrome'},

                    {width: 1024, height: 768, name: 'firefox'},

                    {width: 1024, height: 768, name: 'safari'},

                    //{width: 1024, height: 768, name: 'chrome-one-version-back'},

                    //{width: 1024, height: 768, name: 'firefox-one-version-back'},

                    //{width: 1024, height: 768, name: 'safari-one-version-back'},

                    //{width: 500, height: 768, name: 'chrome'},

                    //{width: 500, height: 768, name: 'firefox'},

                    //{width: 500, height: 768, name: 'safari'},

                    //{width: 500, height: 768, name: 'chrome-one-version-back'},

                    //{width: 500, height: 768, name: 'firefox-one-version-back'},

                    //{width: 500, height: 768, name: 'safari-one-version-back'},

                    { iosDeviceInfo: {deviceName:'iPhone X', screenOrientation: 'portrait', version: 'latest'}},

                    { iosDeviceInfo: {deviceName:'iPhone 12', screenOrientation: 'portrait', version: 'latest'}},

                    { chromeEmulationInfo: {deviceName:'Pixel 4 XL'}}

],



// set batch name to the configuration



batchName:

'RCO'



}
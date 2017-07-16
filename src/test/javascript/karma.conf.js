<<<<<<< HEAD
const webpackConfig = require('../../../webpack/webpack.test.js');

const WATCH = process.argv.indexOf('--watch') > -1;

module.exports = (config) => {
=======
'use strict';

const path = require('path');
const webpack = require('webpack');
const WATCH = process.argv.indexOf('--watch') > -1;
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

module.exports = function (config) {
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
<<<<<<< HEAD
        frameworks: ['jasmine', 'intl-shim'],
=======
        frameworks: ['jasmine'],
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

        // list of files / patterns to load in the browser
        files: [
            'spec/entry.ts'
        ],


        // list of files to exclude
<<<<<<< HEAD
        exclude: [],
=======
        exclude: ['e2e/**'],
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'spec/entry.ts': ['webpack', 'sourcemap']
        },

<<<<<<< HEAD
        webpack: webpackConfig(WATCH),
=======
        webpack: {
            resolve: {
                extensions: ['.ts', '.js']
            },
            module: {
                rules: [
                    {
                        test: /\.ts$/, enforce: 'pre', loader: 'tslint-loader', exclude: /(test|node_modules)/
                    },
                    {
                        test: /\.ts$/,
                        loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
                        exclude: /node_modules/
                    },
                    {
                        test: /\.(html|css)$/,
                        loader: 'raw-loader',
                        exclude: /\.async\.(html|css)$/
                    },
                    {
                        test: /\.async\.(html|css)$/,
                        loaders: ['file?name=[name].[hash].[ext]', 'extract']
                    },
                    {
                        test: /src\/main\/webapp\/.+\.ts$/,
                        enforce: 'post',
                        exclude: /(test|node_modules)/,
                        loader: 'sourcemap-istanbul-instrumenter-loader?force-sourcemap=true'
                    }]
            },
            devtool: 'inline-source-map',
            plugins: [
                new webpack.ContextReplacementPlugin(
                    // The (\\|\/) piece accounts for path separators in *nix and Windows
                    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                    root('./src') // location of your src
                ),
                new LoaderOptionsPlugin({
                    options: {
                        tslint: {
                            emitErrors: !WATCH,
                            failOnHint: false
                        }
                    }
                })
            ]
        },
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
<<<<<<< HEAD
        reporters: ['dots', 'junit', 'progress', 'karma-remap-istanbul', 'notify'],
=======
        reporters: ['dots', 'junit', 'progress', 'coverage', 'karma-remap-istanbul'],
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

        junitReporter: {
            outputFile: '../../../../target/test-results/karma/TESTS-results.xml'
        },

<<<<<<< HEAD
        notifyReporter: {
            reportEachFailure: true, // Default: false, will notify on every failed sepc
            reportSuccess: true // Default: true, will notify when a suite was successful
        },


=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        remapIstanbulReporter: {
            reports: { // eslint-disable-line
                'html': 'target/test-results/coverage',
                'text-summary': null
            }
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: WATCH,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

<<<<<<< HEAD
        // Ensure all browsers can run tests written in .ts files
        mime: {
            'text/x-typescript': ['ts','tsx']
        },

=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: !WATCH
    });
};
<<<<<<< HEAD
=======

function root(__path) {
    return path.join(__dirname, __path);
}
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

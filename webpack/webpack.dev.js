const webpack = require('webpack');
<<<<<<< HEAD
=======
const path = require('path');
const commonConfig = require('./webpack.common.js');
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
const writeFilePlugin = require('write-file-webpack-plugin');
const webpackMerge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
<<<<<<< HEAD
const WebpackNotifierPlugin = require('webpack-notifier');
const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');

const ENV = 'development';

module.exports = webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'eval-source-map',
=======
const ENV = 'dev';
const execSync = require('child_process').execSync;
const fs = require('fs');
const ddlPath = './target/www/vendor.json';

if (!fs.existsSync(ddlPath)) {
    execSync('webpack --config webpack/webpack.vendor.js');
}

module.exports = webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'inline-source-map',
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    devServer: {
        contentBase: './target/www',
        proxy: [{
            context: [
<<<<<<< HEAD
                /* jhipster-needle-add-entity-to-webpack - JHipster will add entity api paths here */
=======
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
                '/api',
                '/management',
                '/swagger-resources',
                '/v2/api-docs',
                '/h2-console'
            ],
            target: 'http://127.0.0.1:8080',
            secure: false
        },{
            context: [
                '/websocket'
            ],
            target: 'ws://127.0.0.1:8080',
            ws: true
        }]
    },
<<<<<<< HEAD
    entry: {
        polyfills: './src/main/webapp/app/polyfills',
        global: './src/main/webapp/content/scss/global.scss',
        main: './src/main/webapp/app/app.main'
    },
    output: {
        path: utils.root('target/www'),
        filename: 'app/[name].bundle.js',
        chunkFilename: 'app/[id].chunk.js'
=======
    output: {
        path: path.resolve('target/www'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    },
    module: {
        rules: [{
            test: /\.ts$/,
<<<<<<< HEAD
            enforce: 'pre',
            loaders: 'tslint-loader',
            exclude: ['node_modules', new RegExp('reflect-metadata\\' + path.sep + 'Reflect\\.ts')]
        },
        {
            test: /\.ts$/,
            loaders: [
                'angular2-template-loader',
                'awesome-typescript-loader'
            ],
            exclude: ['node_modules/generator-jhipster']
=======
            loaders: [
                'tslint-loader'
            ],
            exclude: ['node_modules', new RegExp('reflect-metadata\\' + path.sep + 'Reflect\\.ts')]
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
        }]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 9000,
            proxy: {
<<<<<<< HEAD
                target: 'http://localhost:9060',
                ws: true
=======
              target: 'http://localhost:9060',
              ws: true
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
            }
        }, {
            reload: false
        }),
        new ExtractTextPlugin('styles.css'),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new writeFilePlugin(),
        new webpack.WatchIgnorePlugin([
<<<<<<< HEAD
            utils.root('src/test'),
        ]),
        new WebpackNotifierPlugin({
            title: 'JHipster',
            contentImage: path.join(__dirname, 'logo-jhipster.png')
        })
=======
            path.resolve('./src/test'),
        ])
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    ]
});

#!/usr/bin/env node

var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    jadeTemplater = require('metalsmith-jade-templater'),
    browserSync = require('metalsmith-browser-sync'),
    drafts = require('metalsmith-drafts'),
    sass = require('metalsmith-sass');

// Require arguments parser and set default values.
var cliArgs = require('yargs')
                .default({draft: false, watch: false, clean: false})
                .argv;

var jadeTemplaterOptions = {
    baseTemplatesDir: __dirname + '/templates',
    fileDataKey: 'file'
};

var browserSyncOptions = {
    server: 'output',
    files: [
        'src/**/*.md', // Posts
        'templates/**/*.jade',   // Jade templates
        'src/**/*.scss' // Sass    
    ],
    port: process.env.PORT,
    directory: true
};

// Define the Metalsmith file processing pipeline.
var metalsmith = Metalsmith(__dirname)
    .source('./src/')
    .destination('./output/')
    
    // Conditionally enable cleaning (default false)
    .clean(cliArgs.clean)
    
    // Conditionally process drafts.
    .use(conditional(
        isDraftModeTest,
        drafts()
    ))
    
    // Primary pipeline processes - Markdown, Jade, and Sass transpilers
    .use(markdown())
    .use(jadeTemplater(jadeTemplaterOptions))
    .use(sass({outputStyle: 'expanded'}))
    
    // Conditionally watch and serve with BrowserSync.
    .use(conditional(   
        isWatchModeTest,
        browserSync(browserSyncOptions)
    ));
 
metalsmith.build(function (err, files) {
    console.log('Building.');

    if (err) throw err;

    console.log('Build successful. Output files:', Object.keys(files));
});

function isDraftModeTest () {
    return !cliArgs.draft;
}

function isWatchModeTest () {
    return cliArgs.watch;
}

function conditional (testFunc, plugin) {
    return function (files, metalsmith, done) {
        var execute = testFunc();
        
        if (execute) {
            plugin(files, metalsmith, done);
        } else {
            done();
        }
    };
}

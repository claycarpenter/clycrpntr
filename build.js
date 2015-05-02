#!/usr/bin/env node

var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    jadeTemplater = require('metalsmith-jade-templater'),
    browserSync = require('metalsmith-browser-sync'),
    drafts = require('metalsmith-drafts'),
    sass = require('metalsmith-sass');

// Define default values for CLI arguments.
var defaultArgValues = {
    // Whether to process draft posts.
    draft: false, 
    
    // Whether to run browserSync server and watch for changes.
    watch: false, 
    
    // Whether to clean the output directory before running the pipeline.
    // Disable this action when running BrowserSync as BrowserSync currently
    // seems to get confused when a directory it's watching is removed and 
    // replaced.
    clean: false
};

// Require arguments parser and set default values.
var cliArgs = require('yargs')
                .default(defaultArgValues)
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

var conditionalBrowserSync = singleExecute(
    conditional(   
        isWatchModeTest,
        browserSync(browserSyncOptions)
    )
);

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
    .use(conditionalBrowserSync);

 
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
            //console.log('Executing plugin:', plugin);
            plugin(files, metalsmith, done);
        } else {
            done();
        }
    };
}

function singleExecute (plugin) {
    var isExecutable = true;
    
    return function (files, metalsmith, done) {
        if (isExecutable) {
            plugin(files, metalsmith, done);
            
            isExecutable = false;
        } else {
            done();
        }
    };
}

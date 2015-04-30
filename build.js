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

var metalsmith = Metalsmith(__dirname)
    .source('./src/')
    .destination('./output/')
    .clean(cliArgs.clean);  // Conditionally enable cleaning (default false)

// Conditionally strip drafts out.
if (!cliArgs.draft) {
    console.log('Removing draft posts.');
    metalsmith.use(drafts());
}

// The primary file processing pipeline.
metalsmith
    .use(markdown())
    .use(jadeTemplater(jadeTemplaterOptions))
    .use(sass({outputStyle: 'expanded'}));

if (cliArgs.watch) {
    console.log('Enabling browser-sync.');
    metalsmith.use(browserSync(browserSyncOptions));
}
 
metalsmith.build(function (err, files) {
    console.log('Building.');

    if (err) throw err;

    console.log('Build successful. Output files:', Object.keys(files));
});

var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    jadeTemplater = require('metalsmith-jade-templater'),
    browserSync = require('metalsmith-browser-sync'),
    drafts = require('metalsmith-drafts'),
    sass = require('metalsmith-sass'),
    cliArgs = require('yargs').argv;

var jadeTemplaterOptions = {
    baseTemplatesDir: __dirname + '/templates',
    fileDataKey: 'file'
};

var browserSyncOptions = {
    server: 'output',
    files: ['src/**/*.md', 'templates/**/*.jade']
};

var metalsmith = Metalsmith(__dirname)
    .source('./src/')
    .destination('./output/')
    .clean(Boolean(cliArgs.clean));  // Conditionally enable cleaning (default false)

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

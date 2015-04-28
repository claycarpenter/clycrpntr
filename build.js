var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    jadeTemplater = require('metalsmith-jade-templater'),
    browserSync = require('metalsmith-browser-sync'),
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
    .use(markdown())
    .use(jadeTemplater(jadeTemplaterOptions));

if (cliArgs.watch) {
    console.log('Enabling browser-sync.');
    metalsmith.use(browserSync(browserSyncOptions));
}
 
metalsmith.build(function (err, files) {
    console.log('Building.');

    if (err) throw err;

    console.log('Build successful. Output files:', Object.keys(files));
});

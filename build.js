var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    jadeTemplater = require('metalsmith-jade-templater'),
    browserSync = require('metalsmith-browser-sync');

var jadeTemplaterOptions = {
    baseTemplatesDir: __dirname + '/templates',
    fileDataKey: 'file'
};

var browserSyncOptions = {
    server: 'output',
    files: ['src/**/*.md', 'templates/**/*.jade']
};


var cliArgs = Array.prototype.slice.call(process.argv, 2);
var isWatchMode = cliArgs.some(function (arg) {
    return arg === '--watch';
});

var metalsmith = Metalsmith(__dirname)
    .source('./src/')
    .destination('./output/')
    .use(markdown())
    .use(jadeTemplater(jadeTemplaterOptions));

if (isWatchMode) {
    console.log('Enabling browser-sync.');
    metalsmith.use(browserSync(browserSyncOptions));
}
 
metalsmith.build(function (err, files) {
    console.log('Building.');

    if (err) throw err;

    console.log('Build successful. Output files:', Object.keys(files));
});

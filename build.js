var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    jadeTemplater = require('metalsmith-jade-templater'),
    browserSync = require('metalsmith-browser-sync');

var jadeTemplaterOptions = {
    baseTemplatesDir: __dirname + '/templates'
};

Metalsmith(__dirname)
    .source('./src/')
    .destination('./output/')
    .use(markdown())
    .use(jadeTemplater(jadeTemplaterOptions))
    .build(function (err, files) {
        console.log('Building.');
    
        if (err) throw err;
    
        console.log('Build successful. Output files:', Object.keys(files));
    });

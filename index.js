var compressor = require('node-minify');
compressor.minify({
  compressor: 'gcc',
  input: 'vaity.js',
  output: 'dist/vaity.min.js',
  options: {
    createSourceMap: true,
    compilationLevel: 'WHITESPACE_ONLY',
    languageIn: 'ECMASCRIPT5',
    languageOut: 'ECMASCRIPT6'
  },
  callback: function(err, min) {
    if(err === null) {
      console.log('vaityJS: Minification completed.');
    } else {
      console.log('Error: ' + err);
    }
  }
});

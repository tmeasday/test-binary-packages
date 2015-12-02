Package.describe({
  name: 'npm',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'kurento-client' : 'https://github.com/tmeasday/kurento-client-js/tarball/33e3b60f48b376a514add9266192294ec9fef101',
  // 'socket.io-client' : '1.3.5'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('npm.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('npm');
  api.addFiles('npm-tests.js');
});

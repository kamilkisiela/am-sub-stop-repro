Package.describe({
  name: "angular-meteor-auth",
  summary: "Angular-Meteor authentication module",
  version: "0.2.0-beta.1-1.3.7",
  git: "https://github.com/Urigo/angular-meteor.git",
  documentation: null
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use('underscore@1.0.4');
  api.use('tracker@1.0.8');
  api.use('ecmascript');
  api.use('reactive-var');
  api.use('accounts-base');
  api.use('angular-meteor-data@0.3.0-beta.1', { weak: true });
  api.use('angular:angular@1.4.8', 'client', { weak: true });

  // Files to load in Client only.
  api.add_files([
    'angular-meteor-auth.js'
  ], 'client');
});

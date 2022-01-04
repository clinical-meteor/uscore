Package.describe({
  name: 'clinical:uscore',
  version: '0.4.10',
  summary: 'Covid19 - Reporting - SANER (Situational Awareness of Novel Epidemic Response',
  git: 'https://github.com/clinical-meteor/uscore',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.4');
  
  api.use('meteor-base@1.4.0');
  api.use('ecmascript@0.16.0');
  api.use('react-meteor-data@2.4.0');
  api.use('session');
  api.use('mongo');
  api.use('http');
  api.use('ejson');
  api.use('random');
  api.use('fourseven:scss@4.15.0');

  api.use('clinical:hl7-fhir-data-infrastructure@6.20.0');

  api.addFiles('lib/UsCoreMethods.js', 'server');
  api.addFiles('server/methods.js', 'server');

  api.export('UsCoreMethods');
  
  api.mainModule('index.jsx', 'client');
});


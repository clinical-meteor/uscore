Package.describe({
  name: 'symptomatic:fhir-uscore',
  version: '0.4.9',
  summary: 'Covid19 - Reporting - SANER (Situational Awareness of Novel Epidemic Response',
  git: 'https://github.com/symptomatic/fhir-uscore',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.4');
  
  api.use('meteor-base@1.4.0');
  api.use('ecmascript@0.13.0');
  api.use('react-meteor-data@2.1.2');
  api.use('session');
  api.use('mongo');
  api.use('http');
  api.use('ejson');
  api.use('random');
  api.use('fourseven:scss');

  api.use('clinical:hl7-fhir-data-infrastructure');

  api.addFiles('lib/UsCoreMethods.js', 'server');

  api.export('UsCoreMethods');
  
  api.mainModule('index.jsx', 'client');
});


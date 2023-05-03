import { Meteor } from 'meteor/meteor';


import { get } from 'lodash';
import { ValueSets } from 'meteor/clinical:hl7-fhir-data-infrastructure';


if(Meteor.isServer){
  // import USCoreValueSetsBundle from '../data/USCore-ValueSets-Bundle';
  let USCoreValueSetsBundle = Assets.getText('data/USCore-ValueSets-Bundle.json');

  UsCoreMethods = {
    initializeValueSets: function(){

      console.log('Initializing US Core Value Sets...')
      process.env.DEBUG && console.log('USCoreValueSetsBundle', USCoreValueSetsBundle)

      UsCoreMethods.ingestValueSet(USCoreValueSetsBundle);
    },
    ingestValueSet: function(record){
      let parsedRecord = record;
      if(typeof record === "string"){
        parsedRecord = JSON.parse(record);
      } 
      if(get(parsedRecord, 'resourceType') === "Bundle"){
        console.log('Initializing US Core Value Sets..')
        if(Array.isArray(get(parsedRecord, 'entry'))){
          console.log('Initializing US Core Value Sets..')
          process.env.DEBUG && console.log('Found a Bundle with an array of entries.  Parsing for ValueSets.')
          parsedRecord.entry.forEach(function(entry){
            if(get(entry, 'resource.resourceType') === "ValueSet"){
              process.env.TRACE && console.log('Found a ValueSet.  Ingesting.')
              if(!ValueSets.findOne({id: get(entry, 'resource.id')})){
                ValueSets.insert(get(entry, 'resource'), {filter: false, validate: false});                            
              }
            }
          });
        }

      } else if(get(parsedRecord, 'resourceType') === "ValueSet"){
        if(!ValueSets.findOne({id: get(entry, 'resource.id')})){
          ValueSets.insert(parsedRecord, {filter: false, validate: false});                                            
        }
      } else {
        console.log('File not recognized.')
      }
    }
  }
}


export default UsCoreMethods;
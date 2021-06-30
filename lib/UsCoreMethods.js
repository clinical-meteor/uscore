import { Meteor } from 'meteor/meteor';

import { get } from 'lodash';
import { ValueSets } from 'meteor/clinical:hl7-fhir-data-infrastructure';


import USCoreValueSetsBundle from '../data/USCore-ValueSets-Bundle';

UsCoreMethods = {
  initializeValueSets: function(){

    console.log('Initializing US Core Value Sets.', USCoreValueSetsBundle)
    UsCoreMethods.ingestValueSet(USCoreValueSetsBundle);
  },
  ingestValueSet: function(record){
    if(get(record, 'resourceType') === "Bundle"){
      if(Array.isArray(get(record, 'entry'))){
        console.log('Found a Bundle with an array of entries.  Parsing for ValueSets.')
        record.entry.forEach(function(entry){
          if(get(entry, 'resource.resourceType') === "ValueSet"){
            console.log('Found a ValueSet.  Ingesting.')
            ValueSets.insert(get(entry, 'resource'), {filter: false, validate: false});                            
          }
        });
      }

    } else if(get(record, 'resourceType') === "ValueSet"){
      ValueSets.insert(record, {filter: false, validate: false});                            
    }
  }
}

export default UsCoreMethods;
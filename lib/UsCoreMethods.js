import { Meteor } from 'meteor/meteor';

import { get } from 'lodash';
import { ValueSets } from 'meteor/clinical:hl7-fhir-data-infrastructure';


import { USCoreValueSetsBundle } from '../data/USCore-ValueSets-Bundle';

UsCoreMethods = {
  initializeValueSets: function(){

    console.log('Initializing US Core Value Sets.')
    UsCoreMethods.ingestValueSet(USCoreValueSetsBundle);
  },
  ingestValueSet: function(record){
    if(get(record, 'resourceType') === "Bundle"){
      if(Array.isArray(get(record, 'entry'))){
        record.entry.forEach(function(entry){
          if(get(entry, 'resource.resourceType') === "ValueSet"){
            ValueSets.upsert({id: get(entry, 'resource.id')}, {$set: get(entry, 'resource')}, {filter: false, validate: false});                            
          }
        });
      }

    } else if(get(record, 'resourceType') === "ValueSet"){
      ValueSets.upsert({id: get(record, 'id')}, {$set: record}, {filter: false, validate: false});                            
    }
  }
}

export default UsCoreMethods;
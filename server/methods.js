import { get, has } from 'lodash';
import { ValueSets } from 'meteor/clinical:hl7-fhir-data-infrastructure';

import UsCoreMethods from '../lib/UsCoreMethods';


Meteor.methods({
    initializeUsCoreValueSets: function(){
      console.log("Initializing US Core Value Sets....");

      UsCoreMethods.initializeValueSets();
    }
});
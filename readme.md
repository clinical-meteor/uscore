## USCORE

This package intends to implement the FHIR US Core profile.


#### Usage 

This package is an infrastructure package for Meteor apps, and intended to be used via a Meteor method from another package.  

The easiest way to initialize USCore value sets into a NodeOnFHIR app, is to open the browser console and run the the following command:

```js
Meteor.call('initializeUsCoreValueSets')
```

You can also add call this method from your Javascript or Node source code.

We are investigating other approaches to providing these value sets, via NPM and other package channels.  For the time being, this is how to use via Atmosphere package manager.  

#### License

MIT License.  
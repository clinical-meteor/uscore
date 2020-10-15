import React from 'react';

import UsCoreMethods from './lib/UsCoreMethods';

import { 
  ValueSetsButtons
} from './client/UsCoreFooterButtons';


let FooterButtons = [{
  pathname: '/valuesets',
  component: <ValueSetsButtons />
}];


export { 
  UsCoreMethods,
  FooterButtons
};

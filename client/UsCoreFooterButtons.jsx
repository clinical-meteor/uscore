import React from 'react';

import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { HTTP } from 'meteor/http';

import { Button } from '@material-ui/core';

import { get } from 'lodash';
import JSON5 from 'json5';

import UsCoreMethods from '../lib/UsCoreMethods';


//========================================================================================================

import {
  fade,
  ThemeProvider,
  MuiThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
  useTheme
} from '@material-ui/core/styles';

  // Global Theming 
  // This is necessary for the Material UI component render layer
  let theme = {
    appBarColor: "#f5f5f5 !important",
    appBarTextColor: "rgba(0, 0, 0, 1) !important",
  }

  // if we have a globally defined theme from a settings file
  if(get(Meteor, 'settings.public.theme.palette')){
    theme = Object.assign(theme, get(Meteor, 'settings.public.theme.palette'));
  }

  const muiTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      appBar: {
        main: theme.appBarColor,
        contrastText: theme.appBarTextColor
      },
      contrastThreshold: 3,
      tonalOffset: 0.2
    }
  });


  const buttonStyles = makeStyles(theme => ({
    west_button: {
      cursor: 'pointer',
      justifyContent: 'left',
      color: theme.palette.appBar.contrastText,
      marginLeft: '20px',
      marginTop: '15px'
    },
    east_button: {
      cursor: 'pointer',
      justifyContent: 'left',
      color: theme.palette.appBar.contrastText,
      right: '20px',
      marginTop: '15px',
      position: 'absolute'
    }
  }));


  




//============================================================================================================================
// Valuesets

export function ValueSetsButtons(props){
  const buttonClasses = buttonStyles();

  function toggleLayout(){
    console.log('toggleLayout!');

    Session.toggle('ValueSetsPage.onePageLayout')
  }
  function clearValueSets(){
    // ValueSets.remove({});
  }
  function initializeSampleValueSets(){
    console.log('Initializing Sample ValueSets!');

    UsCoreMethods.initializeValueSets();
  }
  return (
    <div>
      <Button className={buttonClasses.west_button} onClick={ initializeSampleValueSets.bind(this) } >
        Initialize Sample ValueSets
      </Button>
      <Button className={buttonClasses.west_button} onClick={ clearValueSets.bind(this) } >
        Clear
      </Button>
      <Button className={buttonClasses.west_button} onClick={ toggleLayout.bind(this) } >
        Toggle Layout Screen
      </Button>
    </div>
  );
}

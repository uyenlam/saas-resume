//this is the entry point for our app.
import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import store from "./store";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBarExampleComposition from "./components/nav.jsx";

//Material-UI requires an event plugin for touch devices.
injectTapEventPlugin();
const root = document.getElementById('root');

//Our routes must go through the Provider in order to have access to stored states.
ReactDOM.render(
<Provider store={store}>
  <MuiThemeProvider>
{/*our routes and components will go here.*/}
    <AppBarExampleComposition />
  </MuiThemeProvider>
</Provider>, root);

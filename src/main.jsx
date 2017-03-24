import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import store from "./store";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBarExampleComposition from "./components/nav.jsx";

injectTapEventPlugin();
const root = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
  <MuiThemeProvider>
    <AppBarExampleComposition />
  </MuiThemeProvider>
</Provider>, root);

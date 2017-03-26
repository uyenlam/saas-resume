import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import store from "./store";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBarExampleComposition from "./components/nav.jsx";
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

injectTapEventPlugin();
const root = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={routes}/>
    {/*<AppBarExampleComposition />*/}
  </MuiThemeProvider>
</Provider>, root);

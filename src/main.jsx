import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import store from "./store"

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
</Provider>, root);
  
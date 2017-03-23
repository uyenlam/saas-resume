import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import store from "./store"
import AppBarExampleComposition from "./components/nav.jsx"

const root = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
    <AppBarExampleComposition />
</Provider>, root);

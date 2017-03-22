import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from "./store"
import App from './components/App';
import './styles/css/index.css';

const root = document.getElementById('root');


ReactDOM.render( < Provider store = { store } >
        <
        Layout / > < /Provider>, root);


        {
            /*ReactDOM.render( <
                        App / > ,
                        document.getElementById('root')
                    );*/
        }
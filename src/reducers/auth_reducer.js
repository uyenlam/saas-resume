//This is the reducer for authorization.
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, PROTECTED_TEST } from './actions/types';


const initialState = {
    error: '',
    message: '',
    content: '',
    authenticated: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_USER:
            return {...state, error: '', message: '', content: '', authenticated: true };
        case UNAUTH_USER:
            return {...state, authenticated: false };
        case AUTH_ERROR:
            return {...state, error: action.payload };
        case PROTECTED_TEST:
            return {...state, content: action.payload };
    }
    return state;
}
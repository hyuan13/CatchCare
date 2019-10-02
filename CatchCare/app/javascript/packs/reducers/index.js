import { combineReducers } from 'redux';

import * as types from '../actions/actionTypes';

const loginMessageReducer = (user, action) => {
    if(action.type === types.AUTHENTICATION_SUCCESS) {
        return action.user;
    }
    return null;
};

const emailErrorMessageReducer = (errors, action) => {
    if(action.type === types.RETURN_EMAIL_ERROR_MESSAGE) {
        return action.errors
    }
    return null;
};

const passwordErrorMessageReducer = (errors, action) => {
    if(action.type === types.RETURN_PASSWORD_ERROR_MESSAGE) {
        return action.errors
    }
    return null;
};

export default combineReducers({
    loginMessage: loginMessageReducer,
    emailErrorMessage: emailErrorMessageReducer,
    passwordErrorMessage: passwordErrorMessageReducer
});
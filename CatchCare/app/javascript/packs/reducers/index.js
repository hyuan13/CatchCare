import { combineReducers } from 'redux';

import * as types from '../actions/actionTypes';

const loginMessageReducer = (user, action) => {
    if(action.type === types.AUTHENTICATION_SUCCESS) {
        return action.user;
    }
    return null;
};

export default combineReducers({
    loginMessage: loginMessageReducer
});
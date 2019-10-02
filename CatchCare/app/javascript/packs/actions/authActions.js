import * as types from './actionTypes';
import api from '../api';

export const authRequest = () => {
    return {
      type: types.AUTHENTICATION_REQUEST
    };
};

export const authSuccess = (user) => {
    return {
        type: types.AUTHENTICATION_SUCCESS,
        user: user
    };
};

export const authFailure = (errors) => {
    return {
        type: types.AUTHENTICATION_FAILURE,
        errors: errors
    };
};

export const returnEmailErrorMessage = (errors) => {
    return {
        type: types.RETURN_EMAIL_ERROR_MESSAGE,
        errors: errors
    };  
};

export const returnPasswordErrorMessage = (errors) => {
    return {
        type: types.RETURN_PASSWORD_ERROR_MESSAGE,
        errors: errors
    };  
};

export const signup = (user) => {
    const newUser = user;
    return dispatch => {
        return api.post('/api/users/signup', JSON.stringify(user))
            .catch(error => {
                if(error.response) {
                    dispatch(authFailure(error));
                }
            })
            .then(response => {
                console.log(response.data);
                if(response.data.email === "has already been taken") {
                    dispatch(returnEmailErrorMessage(response.data.email));    
                }
                else if(response.data.password === "is too short (minimum is 8 characters)") {
                    dispatch(returnPasswordErrorMessage(response.data.password));
                }
                else {
                    dispatch(authenticateUser(newUser.email, newUser.password));
                }
            })
    };
};

export const authenticateUser = (email, password) => {
    return dispatch => {
        var credentials = {
              email: email,
              password: password
        };
        return api.post('/api/user/token', JSON.stringify({auth: credentials}, { validateStatus: false }))
            .catch(function (error) {
                if(error.response) {
                    dispatch(authFailure(error));
                }
            })
            .then(response => {
                const token = response.data.jwt;
                return getUser(token);
            })
                .then((user) => {
                    console.log(user);
                    dispatch(authSuccess(user));
                })
                .catch(error => {
                    dispatch(authFailure(error));
                })
        
    };
};

export const getUser = (jwt) => {
    var config = {
        headers: {}
    };
    if(jwt) {
        config['headers']['Authorization'] = 'Bearer ' + jwt;
    }
    return api.get('/api/users/current', config)
        .then(function(response) {
            return response.data;
        })
        .catch(function (error) {
            return undefined;
        })
};
import * as types from './actionTypes';
import api from '../api';

//this function has an authentication request action type
export const authRequest = () => {
    return {
      type: types.AUTHENTICATION_REQUEST
    }
}
//this function has an authentication success action type. When there's a success in correct credentials, the server passes a user.
export const authSuccess = (user) => {
    return {
        type: types.AUTHENTICATION_SUCCESS,
        user: user
    }
}
//this function has an authentication failure action type. When there are incorrect credentials, the server passes errors.
export const authFailure = (errors) => {
    return {
        type: types.AUTHENTICATION_FAILURE,
        errors: errors
    }
}

export const signup = (user) => {
    const newUser = user;
    return dispatch => {
        return api.post('/api/users/signup', JSON.stringify(user))
            .then(response => {
                console.log(response.data);
                dispatch(authenticateUser(newUser.email, newUser.password));
            })
            .catch(error => {
                dispatch(authFailure(errors));
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
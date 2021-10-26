import { logIn, logOut, signUp } from "../util/sessioin_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USERs';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors: errors
})

export const login = formUser => dispatch => logIn(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));
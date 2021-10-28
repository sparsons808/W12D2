import * as SessionApi from "../util/sessioin_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USERs';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const login = (user) => dispatch => (
    SessionApi.logIn(user)
    .then(res => dispatch(receiveCurrentUser(res)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const logout = () => dispatch => (
    SessionApi.logOut()
    .then(() => dispatch(logoutCurrentUser()))
);

export const signUp = (user) => dispatch => (
    SessionApi.signUp(user)
    .then(res => dispatch(receiveCurrentUser(res)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
);
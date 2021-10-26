import * as APIUtileSession from '../utils/session'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

// creates a new user
export const createNewUser = user => dispatch => (
    APIUtileSession.postUser(user)
    .then(res => dispatch(receiveCurrentUser(res)))
);

// logs a user in
export const createNewSession = user => dispatch (
    APIUtileSession.postSession(user)
    .then(res => dispatch(receiveCurrentUser(res)))
);

// logs a user out
export const deleteSession = () => dispatch => (
    APIUtileSession.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
);
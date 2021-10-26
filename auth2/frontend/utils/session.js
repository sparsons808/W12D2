// creating a new sessions api to connect to the backend for login

// creating a new user using the create route which is /api/users this goes to our model and controll which saves the user in our db
export const postUser = user => (
    $.ajax({
        method: 'POST',
        url:'api/users',
        data: { user }
    })
);

// creates  new session (or session token) that securly logs a user in
export const postSession = user => (
    $.ajax({
        method:'POST',
        url: '/api/session',
        data: { user }
    })
);

// delet method logout user

export const deleteSession = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);
 

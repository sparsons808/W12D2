import { connect } from "react-redux";
import Greeting from "./greeting";
import { login, logout, signUp } from "../../actions/session_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})


const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
    signUp: user => dispatch(signUp(user))
});

export default connect(mSTP, mDTP)(Greeting);
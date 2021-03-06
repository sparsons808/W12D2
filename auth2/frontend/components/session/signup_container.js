import { connect } from "react-redux";
import { createNewUser } from "../../actions/sessioin";
import Signup from './signup'


const mapDispatchToProps = dispatch => ({
    createNewUser: user => dispatch(createNewUser(user))
});


export default connect(null, mapDispatchToProps)(Signup);
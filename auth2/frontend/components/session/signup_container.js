import { connect } from "react-redux";
import { createNewUser } from "../../actions/sessioin";up
import Signup from './signup'


const mapDispatchToProps = dispatch => ({
    createNewUser: user => dispatch(createNewUser(user))
});


export default connect(null, mapDispatchToProps)(Signup);
import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
    render() {
        if(this.props.currentUser) {
            debugger
            return (
                <div>
                    <h1>
                        Welcome! {this.props.currentUser.name}
                    </h1>
                    <button
                        onClick={() => this.props.logout()}
                    >Logout</button>
                </div>
            )
        } else {
            return (
                <div>

                    <Link to="/signup">SignUp</Link>
                    <Link to="/login">Login</Link>

                </div>
            )
        }
        
    }
}

export default Greeting
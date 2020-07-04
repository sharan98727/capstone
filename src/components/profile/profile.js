import React from "react";
import { connect } from "react-redux";

class Profile extends React.Component {

    render(){
        return(
        <h1>hiiii {this.props.details}</h1>
        )
    }

}

const mapStateToProps = state => {
    console.log(state.token.user.email);
    return {
          
        details:state.token.user.name

    }
}

export default connect(mapStateToProps)(Profile);
import React from "react";
//import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Profile extends React.Component {

  state = {
       x : JSON.parse(localStorage.getItem('jwt')).user.name
  }

    render(){
        return(
        <h1>hiiii {this.state.x}</h1>
        )
    }

}

// const mapStateToProps = state => {
//     console.log(state.token.user.email);
//     return {
          
//         details:state.token.user.name

//     }
// }

export default(withRouter(Profile));
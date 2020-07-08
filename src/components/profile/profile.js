import React from "react";
//import { connect } from "react-redux";
import { withRouter, Link, } from "react-router-dom";
import { Button } from "react-bootstrap";

class Profile extends React.Component {

  state = {
       x : '',
      // y:  JSON.parse(localStorage.getItem('jwt')).seller.name
      y: JSON.parse(localStorage.getItem('jwt')),
      z:''
  }
componentDidMount(){

    if(this.state.y.user) {
      this.setState({
        x : JSON.parse(localStorage.getItem('jwt')).user.name,
      })
    }
    else {
      this.setState({
        x:JSON.parse(localStorage.getItem('jwt')).seller.name,
        z:'for selling more appliances click on upload'
      })
    }

}


    render(){

      let message;
      if(this.state.y.user) {
        message = (
          <div></div>
        )
      }
      else {
        message = (
          <Link className="navbar-brand ml-4" to="/seller">
           <Button variant="danger">upload</Button>
           </Link>
        )
      }
     
        return(
       <div style={{textAlign:"center"}}> 
        <h1 style={{}}>hiiii {this.state.x}</h1>
        <h2>{this.state.z}
        {/* <Link className="navbar-brand ml-4" to="/seller">
              upload
          </Link> */}
          </h2>
          {message}
        
        </div>
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
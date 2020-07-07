import React from "react";
import {  Card, ListGroup,ListGroupItem, CardColumns } from "react-bootstrap";
//import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { display } from "../reducers/actions";
import { withRouter } from 'react-router';

class Appliance extends React.Component {
  constructor(props){
      super(props)
       this.state = {
        appliancecards:[],
        isloggedin:false,
        name:props.type,
    }
  }
    componentDidMount() {
        fetch('/home')
          .then(response => response.json())
          .then(data => 
            {
              console.log(data);
              console.log(typeof data);
            this.setState({
              appliancecards: data ,

            });
            console.log(this.state.appliancecards);
          });
      }

      handleclick = (item) => {
        
        this.props.displayname(item);

        if(this.props.tokenvalue) {
          this.props.history.push('/cart');
        } 
        else {
          this.props.history.push('/SignIn')
        } 
      }
    
   render(){

      
    const items = this.state.appliancecards.map(item => {
      return (
      
        <Card style={{ width: '18rem' }} key={item.id}>
             <Card.Img variant="top" src={item.image} width="200px" height="200px" />
             <ListGroup className="list-group-flush">
                <ListGroupItem>{item.name}</ListGroupItem>
                <ListGroupItem>Rs{item.price}/week</ListGroupItem>
                <ListGroupItem>Delivery in {item.delivery}min</ListGroupItem>
                <button onClick = {()=>{this.handleclick({item})}} >Add to Cart</button>
              </ListGroup>
              
        </Card>
      
      );
    });
    
    return(
      <CardColumns style={{margin:"30px"}}>
      {items}
   </CardColumns>
    )       
   }
   
}
const mapDispatchToProps = dispatch =>{
  return{
       displayname: item => {
         dispatch(display(item));
       }
  }
}

const mapStateToProps = state => {
  return {
    tokenvalue:state.token.token,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Appliance));

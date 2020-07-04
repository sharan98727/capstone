import React from "react";
import {  CardDeck, Card, ListGroup,ListGroupItem } from "react-bootstrap";
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
        fetch(
          `https://api.unsplash.com/search/photos/?client_id=x00KRDCTU-TSnOwMefUykvB47JTFRXXnQoZN6wSjH9Q&query=${this.state.name}`
        )
          .then(response => response.json())
          .then(data => {
            this.setState({
              appliancecards: data.results
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

        const items = this.state.appliancecards.slice(0, 4).map(item => {
            return (
            
              <Card style={{ width: '18rem' }} key={item.id}>
                   <Card.Img variant="top" src={item.urls.small} width="200px" height="200px" />
                   <ListGroup className="list-group-flush">
                      <ListGroupItem>{item.alt_description}</ListGroupItem>
                      <ListGroupItem>Rs{item.likes}/week</ListGroupItem>
                      <ListGroupItem>Delivery in {item.user.total_photos}min</ListGroupItem>
                      <button onClick = {()=>{this.handleclick({item})}} >Add to Cart</button>
                    </ListGroup>
                    
              </Card>
            
            );
          });

          return(
              <CardDeck style={{margin:"20px"}}>
                  {items}
              </CardDeck>
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

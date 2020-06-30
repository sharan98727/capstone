import React from "react";
import {  CardColumns, Card, ListGroup,ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import { display } from "../reducers/actions";
import { Redirect } from "react-router-dom";

class Housemaid extends React.Component{

    state = {
        maidimages:[],
        isloggedin:false,
    }

    componentDidMount(){
        fetch('https://api.unsplash.com/search/photos/?client_id=x00KRDCTU-TSnOwMefUykvB47JTFRXXnQoZN6wSjH9Q&query=housework')
           .then(response => response.json())
           .then(data => {
                this.setState({
                    maidimages:data.results,
                })
           })
    }

    handleclick = (item) => {
      this.props.displayname(item);

      this.setState({
        isloggedin:true,
      })

    }

    render(){

      if(this.state.isloggedin){
        return(
        <Redirect to ="/cart" />
        )
      }

        const items = this.state.maidimages.map(item => {
        return(
            <Card style={{ width: '18rem' }} key={item.id}>
            <Card.Img variant="top" src={item.urls.small} width="200px" height="200px" />
            <ListGroup className="list-group-flush">
               <ListGroupItem>{item.alt_description}</ListGroupItem>
               <ListGroupItem>Rs{item.likes}/week</ListGroupItem>
               <ListGroupItem>Delivery in {item.user.total_photos}min</ListGroupItem>
               <button onClick = {()=>this.handleclick({item})} >Add to Cart</button>
             </ListGroup>
             
       </Card>
        )
    })

      return(
           
        <CardColumns style={{margin:"20px"}}>
           {items}
        </CardColumns>
      )
    }

}

const mapDispatchToProps = dispatch =>{
  return{
       displayname: (item) => {
         dispatch(display(item));
       }
  }
}

export default connect(null,mapDispatchToProps)(Housemaid);
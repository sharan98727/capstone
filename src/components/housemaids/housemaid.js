import React from "react";
import {  CardColumns, Card, ListGroup,ListGroupItem } from "react-bootstrap";

class Housemaid extends React.Component{

    state = {
        maidimages:[]
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

    render(){
        const items = this.state.maidimages.map(item => {
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.urls.small} width="200px" height="200px" />
            <ListGroup className="list-group-flush">
               <ListGroupItem>{item.alt_description}</ListGroupItem>
               <ListGroupItem>Rs{item.likes}/week</ListGroupItem>
               <ListGroupItem>Delivery in {item.user.total_photos}min</ListGroupItem>
               <button onClick = {this.handleclick} >Add to Cart</button>
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

export default Housemaid;
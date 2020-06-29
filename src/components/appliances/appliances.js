import React from "react";
import {  CardDeck, Card, ListGroup,ListGroupItem } from "react-bootstrap";

class Appliance extends React.Component {

    state = {
        appliancecards:[],
    }

    componentDidMount() {
        fetch(
          "https://api.unsplash.com/search/photos/?client_id=x00KRDCTU-TSnOwMefUykvB47JTFRXXnQoZN6wSjH9Q&query=washing machine"
        )
          .then(response => response.json())
          .then(data => {
            this.setState({
              appliancecards: data.results
            });
            console.log(this.state.appliancecards);
          });
      }
    
   render(){

        const items = this.state.appliancecards.slice(0, 4).map(item => {
            return (
            
              <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={item.urls.small} width="200px" height="200px" />
                   <ListGroup className="list-group-flush">
                      <ListGroupItem>{item.alt_description}</ListGroupItem>
                      <ListGroupItem>Rs{item.likes}/month</ListGroupItem>
                      <ListGroupItem>{item.user.total_photos}min</ListGroupItem>
                      <button onClick = {this.handleclick} >Add to Cart</button>
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
export default Appliance;

//{item.urls.small}
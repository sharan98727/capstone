import React from "react";
import { connect } from "react-redux";
import { CardDeck,Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Cart extends React.Component {



    render(){

        const cartitem = this.state.cartdata.map(item => {
        return(
            <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={item.urls.small} width="200px" height="200px" />
                   <ListGroup className="list-group-flush">
                      <ListGroupItem>{item.alt_description}</ListGroupItem>
                      <ListGroupItem>Rs{item.likes}/week</ListGroupItem>
                      <ListGroupItem>Delivery in {item.user.total_photos}min</ListGroupItem>
                      
                    </ListGroup>
                    
              </Card>
            
        )

        })

        return(
            <CardDeck>
                  {cartitem}
            </CardDeck>

           
        )
    }

}


const mapStateToProps = state =>{
    return{
        cartdata: state.cartdata,
    };
};

export default connect(mapStateToProps)(Cart);
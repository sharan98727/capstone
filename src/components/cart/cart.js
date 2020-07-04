import React from "react";
import { connect } from "react-redux";
import { Card, CardColumns,ListGroup,ListGroupItem } from "react-bootstrap";
import {withRouter} from "react-router";
import { Remove } from "../reducers/actions";

class Cart extends React.Component {


handleremove = (item) => {
    this.props.remove(item);
   // this.props.history.push('/cart');
}


    render(){
        console.log(this.props.cartitems);
        const Cartitem = this.props.cartitems.map(item => {
        return(
            <Card style={{ width: '18rem' }}>

                   <Card.Img variant="top" src={item.urls.small} width="200px" height="200px" />  
                   <ListGroup className="list-group-flush">
                      <ListGroupItem>{item.alt_description}</ListGroupItem>
                      <ListGroupItem>Rs{item.likes}/week</ListGroupItem>
                      <ListGroupItem>Delivery in {item.user.total_photos}min</ListGroupItem>
                      <button onClick = {()=>{this.handleclick({item})}} >Proceed to payment</button>
                      <button onClick ={()=>{this.handleremove({item})}} >Remove from cart </button>
                    </ListGroup>               
                    
            </Card>
            
        )

        })

        return(
            <CardColumns style={{margin:"20px"}}>
                  {Cartitem}
            </CardColumns>

           
        )
    }

}


const mapStateToProps = state =>{
    console.log(state);
    return{
        cartitems: state.cartdata,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        remove: item => {
            dispatch(Remove(item));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Cart));
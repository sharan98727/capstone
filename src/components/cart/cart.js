import React from "react";
import { connect } from "react-redux";
import { Card, CardColumns,ListGroup,ListGroupItem } from "react-bootstrap";
import {withRouter} from "react-router";
import { Remove } from "../reducers/actions";
import {subtractprice} from "../reducers/actions";

class Cart extends React.Component {

    state = {
        total:0,
    }


handleremove = (item) => {
    console.log(item);
    this.props.remove(item);
   // this.props.history.push('/cart');
    this.props.subtractprice(item.item.price);
}


    render(){
        console.log(this.props.cartitems);
        const Cartitem = this.props.cartitems.map(item => {
        return(
            <Card style={{ width: '18rem' }}>

                   <Card.Img variant="top" src={item.image} width="200px" height="200px" />  
                   <ListGroup className="list-group-flush">
                      <ListGroupItem>{item.name}</ListGroupItem>
                      <ListGroupItem>Rs{item.price}/week</ListGroupItem>
                      <ListGroupItem>Delivery in {item.delivery}min</ListGroupItem>
                      {/* <button onClick = {()=>{this.handleclick({item})}} >Proceed to payment</button> */}
                      <button onClick ={()=>{this.handleremove({item})}} >Remove from cart </button>
                    </ListGroup> 
                          
            </Card>
            
        )

        })

        return(
            <div>
            <CardColumns style={{margin:"20px"}}>
                  {Cartitem}
            </CardColumns>
            <p>total cost :{this.props.price}</p>
            </div>

           
        )
    }

}


const mapStateToProps = state =>{
    console.log(state);
    return{
        cartitems: state.cartdata,
        price:state.price,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        remove: item => {
            console.log(item);
            dispatch(Remove(item));
        },
        subtractprice: item => {
            dispatch(subtractprice(item));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Cart));
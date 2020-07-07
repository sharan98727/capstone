import React from "react";
import { connect } from "react-redux";
import { Card, ListGroup ,ListGroupItem ,CardColumns } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { display } from "../reducers/actions";

class Searchshow extends React.Component {

    state={
        itemshow:[]
    }

    componentDidMount(){
        
        fetch(`/home/${this.props.value}`)
            .then(response => response.json())
            .then(data => {
              console.log(data)
                 this.setState({
                     itemshow:data,
                 });
                 console.log(this.state.itemshow)
            })

    }

    componentDidUpdate(){
        
      fetch(`/home/${this.props.value}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
               this.setState({
                   itemshow:data,
               });
               console.log(this.state.itemshow)
          })

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

    const items =  this.state.itemshow.map(item => {
        return(
            <Card style={{ width: '18rem' }} key={item.id}>
            <Card.Img variant="top" src={item.image} width="200px" height="200px" />
            <ListGroup className="list-group-flush">
               <ListGroupItem>{item.price}</ListGroupItem>
               <ListGroupItem>Rs{item.delivery}/week</ListGroupItem>
               <ListGroupItem>Delivery in {item.delivery}min</ListGroupItem>
               <button onClick = {()=>{this.handleclick({item})}} >Add to Cart</button>
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


const mapStateToProps = state => {
    console.log(state);
    return{
        value:state.searchvalue,
        tokenvalue:state.token.token,
    }
}


const mapDispatchToProps = dispatch =>{
    return{
         displayname: (item) => {
           dispatch(display(item));
         }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Searchshow));
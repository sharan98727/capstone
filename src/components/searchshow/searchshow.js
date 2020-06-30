import React from "react";
import { connect } from "react-redux";
import { Card, ListGroup ,ListGroupItem ,CardColumns } from "react-bootstrap";

class Searchshow extends React.Component {

    state={
        itemshow:[]
    }

    componentDidMount(){
        fetch(`https://api.unsplash.com/search/photos/?client_id=x00KRDCTU-TSnOwMefUykvB47JTFRXXnQoZN6wSjH9Q&query=${this.props.value}`)
            .then(response => response.json())
            .then(data => {
                 this.setState({
                     itemshow:data.results
                 });
            })

    }

    render(){

    const items =  this.state.itemshow.map(item => {
        return(
            <Card style={{ width: '18rem' }} key={item.id}>
            <Card.Img variant="top" src={item.urls.small} width="200px" height="200px" />
            <ListGroup className="list-group-flush">
               <ListGroupItem>{item.alt_description}</ListGroupItem>
               <ListGroupItem>Rs{item.likes}/week</ListGroupItem>
               <ListGroupItem>Delivery in {item.user.total_photos}min</ListGroupItem>
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
    return{
        value:state.searchvalue,
    }
}

export default connect(mapStateToProps)(Searchshow);
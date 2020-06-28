import React from "react";
import { Card,Button, CardDeck} from "react-bootstrap";
import "./home.css";

class Homecards extends React.Component {
  state = {
    images: [],
    cardnumber: 2
  };

  componentDidMount() {
    fetch(
      "https://api.unsplash.com/photos/?client_id=x00KRDCTU-TSnOwMefUykvB47JTFRXXnQoZN6wSjH9Q"
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data[0].urls.raw);
        this.setState({
          images: data
        });
        // console.log(this.state.quotesdata[0].urls.raw);
      });
  }

  render() {
    
    const items = this.state.images.slice(0, this.state.cardnumber).map(item => {
      return(
      <div>
        
          <Card style={{ width: '15rem' }} >          
           <Card.Img variant="top" src={item.urls.full} width="400px" height="150px" />
           <Card.Body >
             <Card.Title>House Maids</Card.Title>
           </Card.Body> 
           <button onClick = {this.handleclick}>click</button>         
          </Card>
          {/*<img src={item.urls.regular} alt="" height="250px" width="250px" />*/}
         
        </div>
      )
      })
      return (
      <CardDeck className="card-display">
       
        {items}
        
        
      </CardDeck>
      );
    
  }
}

export default Homecards;

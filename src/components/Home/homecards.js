import React from "react";
import { Card, CardDeck} from "react-bootstrap";
import "./home.css";
import { Redirect } from "react-router-dom";

class Homecards extends React.Component {
  state = {
    images: [],
    cardnumber: 2,
    navigate:false,
  };

  componentDidMount() {
    fetch(
      "https://api.unsplash.com/photos/?client_id=x00KRDCTU-TSnOwMefUykvB47JTFRXXnQoZN6wSjH9Q"
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data[0].urls.raw);
        this.setState({
          images: data,
          
        });
        // console.log(this.state.quotesdata[0].urls.raw);
      });
  }

  handleclick = () => {
     
   this.setState({
     navigate:true,
   })

    
  }

  render() {

    if(this.state.navigate)
    {
      return <Redirect to="/appliances" />
    }
    
    
    const items = this.state.images.slice(0, this.state.cardnumber).map(item => {
      return(
      <div>
        
          <Card style={{ width: '18rem',height:'15rem' }} >          
           <Card.Img variant="top" src={item.urls.full} width="400px" height="200px" />
           <Card.Body style={{height:'3rem',textAlign:'center',backgroundColor:'grey',color:'white',justifyContent:'center'}} >
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

         
                  
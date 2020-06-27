import React from "react";
import { Carousel } from "react-bootstrap";

class Carosel extends React.Component {
  state = {
    quotesdata: []
  };

  componentDidMount() {
    fetch(
      "https://api.unsplash.com/photos/?client_id=x00KRDCTU-TSnOwMefUykvB47JTFRXXnQoZN6wSjH9Q"
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data[0].urls.raw);
        this.setState({
          quotesdata: data
        });
        // console.log(this.state.quotesdata[0].urls.raw);
      });
  }
  render() {
    return (
      <div>
        <Carousel interval="1000" className="mx-3" >
          {this.state.quotesdata.map((item, i) => {
            console.log(item.urls.raw);
            return (
              <Carousel.Item >
                
                <img  src={item.urls.raw} alt="First slide" height="450px" width="100%"  />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Carosel;

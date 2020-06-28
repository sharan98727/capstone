import React from "react";

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
    return this.state.images.slice(0, this.state.cardnumber).map(item => {
      return (
        <div>
          <img src={item.urls.regular} alt="" height="250px" width="250px" />
        </div>
      );
    });
  }
}

export default Homecards;

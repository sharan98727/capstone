import React from "react";
import Carosel from "./carosel";
//import '../bootstrap-4.0.0/dist/css/bootstrap.min.css'
import '../../bootstrap-4.5.0-dist/css/bootstrap.min.css'

class Home extends React.Component {
  render() {
    return(
      <div>
       <h1>home page</h1>
       <Carosel/>
       </div>
    )
  }
}

export default Home;

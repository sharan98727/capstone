import React from "react";

class Seller extends React.Component {

    state = {
        productname:'',
        price:'',
        deliverytime: '',
        photo:'',
    }

    handlechange = e => {
      const { value, name } = e.target;
      this.setState({
        [name]: value,
      });
    };

    handlesubmit = e => {
      e.preventDefault();
      
    }

    render(){
        return(
            <form className="demoForm" onSubmit={this.handlesubmit} style={{margin:"auto",width:"500px"}}>
            <h2>Post Your Product Details</h2>
            <div className="panel panel-default mt-4"></div>
    
            <div className="panel panel-default" >
              <label htmlFor="name">Enter Name of Product</label>
              <input
                type="name"
                required
                className="form-control"
                name="productname"
                placeholder="Name"
                value={this.state.productname}
                onChange={this.handlechange}
              />
            </div>
    
            <div className="panel panel-default">
              <label htmlFor="name">Enter price for a week</label>
              <input
                type="text"
                required
                className="form-control"
                name="price"
                placeholder="price"
                value={this.state.price}
                onChange={this.handlechange}
              />
    
              <div className="panel panel-default">
                <label htmlFor="name">Enter Delivery Time</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  name="deliverytime"
                  placeholder="delivery time"
                  value={this.state.deliverytime}
                  onChange={this.handlechange}
                />
              </div>
              <div className="panel panel-default">
                <label htmlFor="image">upload your Image</label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  className="form-control"
                  name="photo"
                  placeholder="image"
                  value={this.state.photo}
                  onChange={this.handlechange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        )
    }

}

export default Seller;
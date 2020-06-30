import React from "react";
import { connect } from "react-redux";
import { searchitem } from "../reducers/actions";
import { withRouter } from "react-router";

class Search extends React.Component {

   state={
     value:"",
     isloggedin:false,
   }

   handlechange= (e) => {
     this.setState({
       value:e.target.value,
     })
   }

   handlesubmit = () => {
    // console.log(e);
    // e.preventdefault();
    const { value } = this.state;
    this.props.search(value);
            
     this.setState({
       isloggedin:true,
     })
     this.props.history.push('/search');
   }
     
   
  render() {
    return (
      <div>
        <input style={{width:"500px"}} onChange={this.handlechange} type="text"
        placeholder="search for household appliances" value={this.state.value}>
        </input>
        <button onClick={this.handlesubmit}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
      search: values => {
        dispatch(searchitem(values));
      }
  }
}

export default connect(null,mapDispatchToProps) (withRouter(Search));

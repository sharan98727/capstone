import React from "react";

class Search extends React.Component {

   state={
     value:""
   }
  render() {
    return (
      <form>
        <input style={{width:"500px"}} onchange={this.handlechange} type="text"
        placeholder="search for household appliances">
        </input>
      </form>
    );
  }
}

export default Search;

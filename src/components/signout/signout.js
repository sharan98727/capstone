// import React, { Component } from 'react';

// class Signout extends Component {
// state = {
//     isLoggedin : false,
// }

// authenticate = () => {
//         if(typeof window !== 'undefined'){
//         localStorage.removeItem('jwt');
//         }
//       }

//     render(){
//         if(this.isLoggedin){
//         this.authenticate() 
//         return (<div>SignOut</div>);
//     }else{
//         return(<div>Sig</div>);
//     }
//     }
// }
 
// export default Signout;

export const signout = (next) => {
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt");
        next();
        return fetch('/signout',{
            method:"GET"
        })
        .then(response => {
            console.log("Signout",response);
        })
        .catch(err => console.log(err));
    }
} 
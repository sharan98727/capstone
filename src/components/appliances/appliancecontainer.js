import React from "react";
import Appliance from "./appliances";

class Appcontainer extends React.Component {

    render(){
        return(
        <div>
            <div>
                <Appliance type="washing machine" />
            </div>
            <div>
                <Appliance type="ovens" />
            </div>
            <div>
                <Appliance type="air conditioner" />
            </div>

        </div>
        )
    }

}

export default Appcontainer;
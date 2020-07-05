import React from 'react';
import "./footer.css";

const Footer = () => {
    return(
         <div className="main-footer">
            <div className="container">
               <div className="row">

                <h4>Home appliances </h4>
                  {/* column1 */}
                  <div className="col-md-3 col-sm-6">
                     
                     <ul>Large appliances</ul>
                     <li>Washing machine</li>
                     <li>Refrigerator</li>
                     <li>Air conditioner</li>
                     <li>Cooler</li>
                     <li>Television</li>
                  </div>

                {/* column2 */}
                <div className="col-md-3 col-sm-6">
                   
                   <ul>Medium appliances</ul>
                   <li>Oven</li>
                   <li>Table</li>
                   <li>Fan</li>
                   <li>Mixer grinder</li>
                   <li>Television</li>
                </div>

                {/* column3 */}
                <div className="col-md-3 col-sm-6">
                 
                   <ul>Small appliances</ul>
                   <li>Iron box</li>
                   <li>Portable coller</li>
                   <li>Rice cooker</li>
                   <li>Juice maker</li>
                   <li>Sewing machine</li>
                </div>
               </div>

               {/* Footer bottom */}
               <hr />
               <div className="footer-bottom">
                  <p className="text-xs-center">
                     &copy;{new Date().getFullYear()} city guide App - All Rights Reserved
                  </p>
               </div>
            </div>
         </div>
    )
}


export default Footer;
import React from "react";
import './Contact.css'
import { Link } from "react-router-dom";
function Contact(){

    return (
        <div className="App">
         
          <div className="login-contain">
           
            <h3>Contact us</h3>
            <form>
              
              <input type="text" placeholder="Enter Your Name" required /><br />
              <input type="text" placeholder="Enter Your Mail ID" required /><br />
              <input type="text" placeholder="Mobile Number" required /><br />

             
              <button type="submit">
                <Link to="/" className="con">Sumbit</Link></button>
            </form>
          </div>
        </div>
      );
}

export default Contact;
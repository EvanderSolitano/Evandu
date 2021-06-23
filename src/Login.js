import React, { Component } from 'react';
import './Login.css';
import tsaa from './tsaa.png';
import vanfalse from './vanderfalse.jpg';
import {Link} from 'react-router-dom';
export class Login extends Component{
    render(){
        return(
<section>

    <img className="backg" src={vanfalse}></img>
    <div id="logo"><img  src={tsaa}></img></div>
    <div className="vanderContainer">
 
        <ul className="vanderdrop">
      
            <li><input placeholder="Username/Email adds"></input></li>
            <li><input placeholder="Password"></input></li>
          <Link to="/Evantea"><li><input type="button" id="logun" value="Login"></input></li></Link>
          <a className="register" href="#">Registration</a>

        </ul>
    </div>
</section>
        )
    }

}
export default Login;
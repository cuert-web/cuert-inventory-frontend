import React from "react";
import {Link} from "react-router-dom"
import person from "../images/person.png"
import phone from "../images/icons8-phone-30.png"
import graduation from"../images/icons8-graduation-30.png"
import email from "../images/email.png"
import pass1 from "../images/password.png"
import pass2 from "../images/icons8-password-30.png"

function Signup()
{
    return(
        <div className = "big-box2" >
            <form action="" className="form1">
                <div className="mb-3">
                    <img src={person}/>
                    <label htmlFor="name"><strong> Name</strong></label>
                    <div className="box">
                    <input type="text" name="Enter Name" />
                    </div>
                </div>
                <div className="mb-3">
                <img src={phone}/>
                    <label htmlFor="name"><strong> Phone Number </strong></label>
                    <div className="box">
                    <input type="text" name="Enter Name"  />
                    </div>
                </div>
              
                <div className="mb-3">
                <img src={email}/>
                    <label htmlFor="email"><strong> Email</strong></label>
                    <div className="box">
                    <input type="email" name="Enter Email" />
                    </div>
                </div>
                <div className="mb-3">
                <img src={pass1}/>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <div className="box">
                    <input type="password" name="Enter Password" />
                    </div>
                </div>
                <div className="mb-3">
                <img src={pass2}/>
                    <label htmlFor="password"><strong>Confirm Password</strong></label>
                    <div className="box">
                    <input type="password" name="Enter Password" />
                    </div>
                </div>
                <button className="btn btn-success btn-highlight  w-100">Sign up</button>
                <p>Already have an account?</p>
                <Link to='/login'  className="btn btn-default border w-100 bg-light text-decoration-none">Log in</Link>
            </form>
        </div>
    );
}
export default Signup
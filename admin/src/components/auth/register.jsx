import React, {Component} from "react";
import {Link} from "react-router-dom";

class Register extends Component{
    render() {
        return (
            <div className="lock-wrapper">
                <div className="panel lock-box">
                    <div className="center"><img alt="" src="" className="img-circle"/></div>
                    <h4> Hello User !</h4>
                    <p className="text-center">Please login to Access your Account</p>
                    <div className="row">
                        <form id="registration" className="form-inline" action="#">
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <div id="demo-error-container">

                                </div>
                            </div>
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <div className="text-left">
                                    <label htmlFor="signupInputName" className="control-label">Full Name</label>
                                    <input id="signupInputName" type="text" placeholder="Enter Full Name"
                                           className="form-control" name="firstName"/>
                                </div>
                            </div>
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <div className="text-left">
                                    <label htmlFor="signupInputEmail" className="control-label">Email Address</label>
                                    <input id="signupInputEmail" type="email" placeholder="Enter Email Address"
                                           className="form-control" name="email"/>
                                </div>
                            </div>
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <div className="text-left">
                                    <label htmlFor="signupInputPassword" className="control-label">Password</label>
                                    <input id="signupInputPassword" type="password" placeholder="Password"
                                           className="form-control lock-input" name="password"/>
                                </div>
                            </div>
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <div className="text-left">
                                    <label htmlFor="signupInputRepassword" className="control-label">Retype
                                        Password</label>
                                    <input id="signupInputRepassword" type="password" placeholder="Retype Password"
                                           className="form-control lock-input" name="confirmPassword"/>
                                </div>
                            </div>
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <div className="text-left pad-btm">
                                    <label htmlFor="checkboxtickmark" className="form-checkbox form-icon control-label">
                                        <input id="checkboxtickmark" type="checkbox" name="agree" value="agree"/>
                                            Agree with the terms and conditions
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-block btn-primary">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
                <div className="registration"> Already registered! <Link to="/login"> <span className="text-primary"> Please Login Here </span>
                </Link></div>
            </div>
        )
    }
}

export default Register
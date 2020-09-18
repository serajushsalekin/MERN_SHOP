import React, {Component} from "react";
import {Link} from "react-router-dom";


class Login extends Component{
    render() {
        return (
            <div className="lock-wrapper">
                <div className="panel lock-box">
                    <div className="center"><img alt="" src="" className="img-circle"/></div>
                    <h4> Hello User !</h4>
                    <p className="text-center">Please login to Access your Account</p>
                    <div className="row">
                        <form action="" className="form-inline">
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <div className="text-left">
                                    <label className="text-muted">Email ID</label>
                                    <input id="signupInputEmail1" type="email" placeholder="Enter Email ID"
                                           className="form-control" required/>
                                </div>
                                <div className="text-left">
                                    <label htmlFor="signupInputPassword" className="text-muted">Password</label>
                                    <input id="signupInputPassword" type="password" placeholder="Password"
                                           className="form-control lock-input" required/>
                                </div>
                                <div className="pull-left pad-btm">
                                    <label className="form-checkbox form-icon form-text">
                                        <input type="checkbox"/> Remember Me
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-block btn-primary">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="registration"> Don't have an account !
                    <Link to="/signup"> <span
                    className="text-primary"> Sign Up </span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Login
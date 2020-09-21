import { connect } from "react-redux";
import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import { login } from "../../redux/auth/authAction";


class Login extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password,
        }
        //login(userData)
        this.props.login(userData)
    }


    render() {
        if (this.props.auth.authenticate) {
            return (<Redirect to={'/dashboard'}/>)
        }
        return (
            <div className="lock-wrapper">
                <div className="panel lock-box">
                    <div className="center"><img alt="" src="" className="img-circle"/></div>
                    <h4> Hello User !</h4>
                    <p className="text-center">Please login to Access your Account</p>
                    <div className="row">
                        <form onSubmit={ this.onSubmit } className="form-inline">
                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                <div className="text-left">
                                    <label className="text-muted">Email ID</label>
                                    <input id="signupInputEmail1" 
                                    type="email" name="email"
                                    placeholder="Enter Email ID"
                                    value={ this.state.email }
                                    onChange={ this.onChange } 
                                    className="form-control" required/>
                                </div>
                                <div className="text-left">
                                    <label htmlFor="signupInputPassword" className="text-muted">Password</label>
                                    <input id="signupInputPassword" 
                                    type="password" name="password"
                                    value={ this.state.password }
                                    onChange={ this.onChange }  
                                    placeholder="Password"
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

const mapStateToProps = state => ({
    auth: state.auth
})

const mapStateToDispatch = dispatch => ({
    login: data => dispatch(login(data))
})

export default connect(mapStateToProps, mapStateToDispatch)(Login)
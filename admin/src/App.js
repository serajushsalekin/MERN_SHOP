import React, {Component} from 'react';
import Layout from "./components/Layout";
import { Route, Switch } from 'react-router-dom';
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import PrivateRoute from './router/restrict';
import { connect } from 'react-redux';
import { loggedIn } from "./redux/auth/authAction";


class App extends Component{

  componentDidMount(){
    const { auth } = this.props
    if (!auth.authenticate) {
        this.props.loggedIn()
    }
  }
 
  
  render() {
    return (
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Register} />
            <PrivateRoute component={Layout} />
          {/* <Layout /> */}
        </Switch>

        // <Router>
        //   <React.Suspense fallback={loading}>
        //     <Switch>
        //         <Route exact path='/' component={Layout} />
        //       {/*<Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />*/}
        //       {/*<Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />*/}
        //       {/*<Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />*/}
        //       {/*<Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />*/}
        //       {/*<Route path="/" name="Home" render={props => <TheLayout {...props}/>} />*/}
        //     </Switch>
        //   </React.Suspense>
        // </Router>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})

const mapStateToDispatch = dispatch => ({
  loggedIn: () => dispatch(loggedIn())
})
export default connect(mapStateToProps, mapStateToDispatch)(App)
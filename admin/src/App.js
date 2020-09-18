import React, {Component} from 'react';
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/auth/login";
import Register from "./components/auth/register";


class App extends Component{
  render() {
    return (
        <Router>
          <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={Register} />
            <Layout />
          </Switch>
        </Router>

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

export default App;
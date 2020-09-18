import React,{Component} from "react";
import Topnavbar from "./topnavbar";
import Footer from "./footer";
import Sidebar from "./sidebar";
import ContentBox from "./MainContent";
import { Route } from 'react-router-dom';

class Layout extends Component{
    render() {
        return(
<React.Fragment>
    <Topnavbar/>
        <div className="boxed">
            <Route path="/dashboard" exact component={ContentBox} />
            {/*<ContentBox />*/}
            <Sidebar/>
        </div>
    <Footer/>
        <button id="scroll-top" className="btn">
            <i className="fa fa-chevron-up">

            </i>
        </button>
</React.Fragment>
        )
    }
}

export default Layout
import React,{Component} from "react";
import {Link} from "react-router-dom";

class Sidebar extends Component{
    render() {
        return (
<nav id="mainnav-container">
    <div id="mainnav">
        <div id="mainnav-menu-wrap">
            <div className="nano">
                <div className="nano-content">
                    <ul id="mainnav-menu" className="list-group">
                        <li className="list-header">Navigation</li>
                        <li>
                            <Link to="/dashboard">
                                <i className="fa fa-home"> </i>
                                <span className="menu-title">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="fa fa-user"> </i>
                                <span className="menu-title">Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="fas fa-shopping-basket"> </i>
                                <span className="menu-title">Catalog</span>
                                <i className="arrow"> </i>
                            </Link>
                            <ul className="collapse">
                                <li><Link to=""><i className="fa fa-minus"> </i> Categories</Link></li>
                                <li><Link to=""><i className="fa fa-minus"> </i> Products </Link></li>
                                <li><Link to=""><i className="fa fa-minus"> </i> Partners </Link></li>
                                <li><Link to=""><i className="fa fa-minus"> </i> Reviews </Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="fa fa-shopping-cart"> </i>
                                <span className="menu-title">Sales</span>
                                <i className="arrow"> </i>
                            </Link>
                            <ul className="collapse">
                                <li>
                                    <Link to="ecommerce-order.html">
                                    <i className="fa fa-caret-right"> </i> Orders</Link>
                                </li>
                                <li>
                                    <Link to="ecommerce-orderview.html">
                                        <i className="fa fa-caret-right"> </i> Orders View</Link></li>
                                <li><Link to=""><i className="fa fa-caret-right"> </i> Customers </Link></li>
                                <li><Link to=""><i className="fa fa-caret-right"> </i> Coupons </Link></li>
                            </ul>
                        </li>
                        <li className="list-divider"> </li>
                        <li className="list-header">Customers Services</li>
                        <li>
                            <Link to="pages-faq.html">
                                <i className="fa fa-bullhorn"> </i>
                                <span className="menu-title">
                                <strong>Faq</strong>
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="mainnav-widget">
                        <div className="show-small">
                            <Link to="#" data-toggle="menu-widget" data-target="#demo-wg-server">
                                <i className="fa fa-desktop"> </i>
                            </Link>
                        </div>
                        <div id="demo-wg-server" className="hide-small mainnav-widget-content">
                            <ul className="list-group">
                                <li className="list-header pad-no pad-ver">Server Status</li>
                                <li className="mar-btm">
                                    <span className="label label-primary pull-right">15%</span>
                                    <p>CPU Usage</p>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar progress-bar-primary"
                                             style={{width: "15%"}}>
                                            <span className="sr-only">15%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="mar-btm">
                                    <span className="label label-purple pull-right">75%</span>
                                    <p>Bandwidth</p>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar progress-bar-purple"
                                             style={{width: "75%"}}>
                                            <span className="sr-only">75%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
        )
    }
}

export default Sidebar
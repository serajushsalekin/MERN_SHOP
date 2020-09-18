import React, {Component} from "react";
import {Link} from "react-router-dom";

class Topnavbar extends Component{
    render() {
        return (
<header id="navbar">
    <div id="navbar-container" className="boxed">
        <div className="navbar-header">
            <Link to="index.html" className="navbar-brand">
                <i className="fa fa-cube brand-icon"></i>
                <div className="brand-title">
                    <span className="brand-text">Admin Panel</span>
                </div>
            </Link>
        </div>
        <div className="navbar-content clearfix">
            <ul className="nav navbar-top-links pull-left">
                <li className="tgl-menu-btn">
                    <Link className="mainnav-toggle" to="#">
                        <i className="fa fa-navicon fa-lg"></i>
                    </Link>
                </li>
                <li className="dropdown">
                    <Link to="#" data-toggle="dropdown" className="dropdown-toggle">
                        <i className="fa fa-bell fa-lg"></i>
                        <span className="badge badge-header badge-danger">5</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-md with-arrow">
                        <div className="pad-all bord-btm">
                            <div className="h4 text-muted text-thin mar-no"> Notification</div>
                        </div>
                        <div className="nano scrollable">
                            <div className="nano-content">
                                <ul className="head-list">
                                    <li>
                                        <Link to="#" className="media">
                                            <div className="media-left"><span
                                                className="icon-wrap icon-circle bg-primary"> <i
                                                className="fa fa-comment fa-lg"></i> </span></div>
                                            <div className="media-body">
                                                <div className="text-nowrap">New comments waiting approval
                                                </div>
                                                <small className="text-muted">15 minutes ago</small>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="media">
                                            <span className="badge badge-success pull-right">90%</span>
                                            <div className="media-left"><span
                                                className="icon-wrap icon-circle bg-danger"> <i
                                                className="fa fa-hdd-o fa-lg"></i> </span></div>
                                            <div className="media-body">
                                                <div className="text-nowrap">HDD is full</div>
                                                <small className="text-muted">50 minutes ago</small>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="media">
                                            <div className="media-left"><span
                                                className="icon-wrap icon-circle bg-info"> <i
                                                className="fa fa-file-word-o fa-lg"></i> </span></div>
                                            <div className="media-body">
                                                <div className="text-nowrap">Write a news article</div>
                                                <small className="text-muted">Last Update 8 hours
                                                    ago</small>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="media">
                                            <span className="label label-danger pull-right">New</span>
                                            <div className="media-left"><span
                                                className="icon-wrap icon-circle bg-purple"> <i
                                                className="fa fa-comment fa-lg"></i> </span></div>
                                            <div className="media-body">
                                                <div className="text-nowrap">Comment Sorting</div>
                                                <small className="text-muted">Last Update 8 hours
                                                    ago</small>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="media">
                                            <div className="media-left"><span
                                                className="icon-wrap icon-circle bg-success"> <i
                                                className="fa fa-user fa-lg"></i> </span></div>
                                            <div className="media-body">
                                                <div className="text-nowrap">New User Registered</div>
                                                <small className="text-muted">4 minutes ago</small>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="pad-all bord-top">
                            <Link to="#" className="btn-link text-dark box-block"> <i
                                className="fa fa-angle-right fa-lg pull-right"></i>Show All Notifications
                            </Link>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="nav navbar-top-links pull-right">
                <li className="hidden-xs" id="toggleFullscreen">
                    <Link className="icon icon-fullscreen" data-toggle="fullscreen" to="#" role="button">
                        <span className="sr-only">Toggle fullscreen</span>
                    </Link>
                </li>
                <li id="dropdown-user" className="dropdown">
                    <Link to="#" data-toggle="dropdown" className="dropdown-toggle text-right">
                        <span className="pull-right">
                            <img
                                className="img-circle img-user media-object"
                                src="img/av1.png" alt=""/>
                        </span>
                        <div className="username hidden-xs">John Doe</div>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right with-arrow">
                        <ul className="head-list">
                            <li>
                                <Link to="#"> <i className="fa fa-user fa-fw fa-lg"></i> Profile </Link>
                            </li>
                            <li>
                                <Link to="#"> <i className="fa fa-envelope fa-fw fa-lg"></i> Messages </Link>
                            </li>
                            <li>
                                <Link to="#"> <i className="fa fa-gear fa-fw fa-lg"></i> Settings </Link>
                            </li>
                            <li>
                                <Link to="#"> <i className="fa fa-sign-out fa-fw"></i> Logout </Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</header>
        )
    }
}

export default Topnavbar
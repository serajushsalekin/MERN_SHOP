import React,{Component} from "react";
import ContentHeader from "./contentHeader";


class ContentBox extends Component{
    render() {
        return(
<div id="content-container">
<ContentHeader />
<div id="page-content">
    <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xm-12">
            <div className="panel media pad-all">
                <div className="media-left">
                            <span className="icon-wrap icon-wrap-sm icon-circle bg-success">
                            <i className="fa fa-user fa-2x"></i>
                            </span>
                </div>
                <div className="media-body">
                    <p className="text-2x mar-no text-thin text-right">241</p>
                    <p className="h5 mar-no text-right">Registered User</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xm-12">
            <div className="panel media pad-all">
                <div className="media-left">
                            <span className="icon-wrap icon-wrap-sm icon-circle bg-info">
                            <i className="fa fa-shopping-cart fa-2x"></i>
                            </span>
                </div>
                <div className="media-body">
                    <p className="text-2x mar-no text-thin text-right">543</p>
                    <p className="h5 mar-no text-right">New Order</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xm-12">
            <div className="panel media pad-all">
                <div className="media-left">
                            <span className="icon-wrap icon-wrap-sm icon-circle bg-warning">
                            <i className="fa fa-comment fa-2x"></i>
                            </span>
                </div>
                <div className="media-body">
                    <p className="text-2x mar-no text-thin text-right">34</p>
                    <p className="h5 mar-no text-right">Comments</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xm-12">
            <div className="panel media pad-all">
                <div className="media-left">
                            <span className="icon-wrap icon-wrap-sm icon-circle bg-danger">
                            <i className="fa fa-dollar fa-2x"></i>
                            </span>
                </div>
                <div className="media-body">
                    <p className="text-2x mar-no text-thin text-right">654</p>
                    <p className="h5 mar-no text-right">Sales</p>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-4">
            <div className="panel">
                <div className="panel-heading">
                    <h3 className="panel-title"> Order Statistics </h3>
                </div>
                <div className="panel-body">
                    <div className="col-md-12">
                        <div className="clearfix">
                            <span className="pull-left">In Queue</span>
                            <small className="pull-right">45%</small>
                        </div>
                        <div className="pad-btm">
                            <div className="progress progress-striped progress-sm">
                                <div className="progress-bar progress-bar-info"
                                     style={{width: "55%"}}>

                                </div>
                            </div>
                        </div>
                        <div className="clearfix">
                            <span className="pull-left">Shipped Products</span>
                            <small className="pull-right">350/500</small>
                        </div>
                        <div className="pad-btm">
                            <div className="progress progress-striped progress-sm">
                                <div className="progress-bar progress-bar-primary"
                                     style={{width: "55%"}}>

                                </div>
                            </div>
                        </div>
                        <div className="clearfix">
                            <span className="pull-left">Returned Products</span>
                            <small className="pull-right">50/500</small>
                        </div>
                        <div className="pad-btm">
                            <div className="progress progress-striped progress-sm">
                                <div className="progress-bar progress-bar-warning"
                                     style={{width: "55%"}}>

                                </div>
                            </div>
                        </div>
                        <div className="clearfix">
                            <span className="pull-left">Pending Deliveries</span>
                            <small className="pull-right">150/500</small>
                        </div>
                        <div className="pad-btm">
                            <div className="progress progress-striped progress-sm">
                                <div className="progress-bar progress-bar-danger"
                                     style={{width: "55%"}}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="panel">
                <div className="panel-heading">
                    <h3 className="panel-title"> Sales Statistics </h3>
                </div>
                <div className="panel-body">
                    <div id="demo-sales-statistics" style={{height:"180px"}}>

                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="panel">
                <div className="panel-heading">
                    <h3 className="panel-title"> Earning Statistics </h3>
                </div>
                <div className="panel-body">
                    <div id="demo-earning-statistics" style={{height:"180px"}}>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        )
    }
}

export default ContentBox
import React from "react";
import {Link} from "react-router-dom";

const ContentHeader = props => {
    return (
        <div className="pageheader">
            <h3><i className="fa fa-home"></i> Dashboard </h3>
            <div className="breadcrumb-wrapper">
                <span className="label">You are here:</span>
                <ol className="breadcrumb">
                    <li><Link to="/"> Home </Link></li>
                    <li className="active"> Dashboard</li>
                </ol>
            </div>
        </div>
    )
}

export default ContentHeader
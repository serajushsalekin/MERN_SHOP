import React from "react";

const Footer = () => {
    return (
<footer id="footer">
    <div className="show-fixed pull-right">
        <ul className="footer-list list-inline">
            <li>
                <p className="text-sm">SEO Proggres</p>
                <div className="progress progress-sm progress-light-base">
                    <div style={{width: "80%"}} className="progress-bar progress-bar-danger">

                    </div>
                </div>
            </li>
            <li>
                <p className="text-sm">Online Tutorial</p>
                <div className="progress progress-sm progress-light-base">
                    <div style={{width: "80%"}} className="progress-bar progress-bar-primary">

                    </div>
                </div>
            </li>
            <li>
                <button className="btn btn-sm btn-dark btn-active-success">Checkout</button>
            </li>
        </ul>
    </div>
    <div className="hide-fixed pull-right pad-rgt">Currently v2.2</div>
    <p className="pad-lft">&#0169; 2015 Your Company</p>
</footer>
    )
}

export default Footer
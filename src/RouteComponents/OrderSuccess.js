import React from 'react'
import './OrderSuccess.css'
import { Link, useLocation } from 'react-router-dom'

function OrderSuccess() {
    const location = useLocation()

    return (
        <div className="OrderSuccess">
            <div className="SuccessContent">
                <img src="data:image/png;base64,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" alt="yes boss" />
                
                <div className="OrderInfo">
                        <h2>Thank you!!</h2>
                        <h2>Your order has been placed successfully</h2>
                        <p>You will recieve a confirmation message as soon as the order is accepted</p>
                        <p>Order number John -27e</p>
                </div>

                <div className="OrderBtns">
                    <Link to="/Orders" style={{ textDecoration: "none", color: "", width: `${location.pathname === '/OrderSuccess' ? "100%" : "" }` }}><button className="TrackBtn">Track Order</button></Link>
                    <Link to="/" style={{ textDecoration: "none", color: "", width: `${location.pathname === '/OrderSuccess' ? "100%" : "" }` }}><button className="ContinueBtn">Continue Shopping</button></Link>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccess
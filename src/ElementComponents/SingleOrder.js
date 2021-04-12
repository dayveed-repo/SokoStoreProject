import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import React from 'react'
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import './SingleOrder.css'
import { useMediaQuery } from 'react-responsive';

function SingleOrder({ price, id, deliveryInfo, name }) {

    const isMobile = useMediaQuery({ query: `(max-width: 1070px)` });
    console.log(isMobile)
    return (
        <div className="SingleOrder">
            <div className="OrderHeader">
                { deliveryInfo !== 'Target' ? <StorefrontRoundedIcon /> : <span><FiberManualRecordRoundedIcon /></span> }
                <h3>{deliveryInfo === 'Target' ? 'Target' : `${name}`}</h3>
            </div>
            
            <div className="OrderBody">
                <div>
                    <h4>Order #{id}</h4>
                    <h4>{price}</h4>
                </div>

                <div>
                    <p>3 items</p>
                    <p>25/03/2021, 11:55</p>
                </div>
            </div>

            <div className="OrderLower" style={{ color: `${deliveryInfo === 'Target' ? 'orange' : '#2766cc' }` }}>
                <FiberManualRecordRoundedIcon /> shipped
            </div>
        </div>
    )
}

export default SingleOrder

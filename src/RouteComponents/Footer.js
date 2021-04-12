import React from 'react'
import './Footer.css'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SecurityIcon from '@material-ui/icons/Security';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { useLocation } from 'react-router';

function Footer() {

    const location = useLocation()
    return (
        <div className="Footer" style={{ display: `${location.pathname !== '/' ? 'none' : '' }`}}>
            <div className="Footer__Top">
                <div className="Footer__TopContain">
                    <div className="Footer__Icons">
                      <LocalShippingIcon />
                      <h5>Fast Delivery</h5>  
                    </div>    

                    <div className="Footer__Icons">
                        <SecurityIcon />
                        <h5>Buyer Protection</h5>
                    </div>

                    <div className="Footer__Icons">
                        <HowToRegIcon />
                        <h5>Customer Support</h5>
                    </div>                  
                </div>
            </div>

            <div className="Footer__Bottom">
                <p>Store Details</p>
                <h4>Target</h4>
                <h5>Cham towers, plot 12 nkom road kampala ug</h5>
                <button><WhatsAppIcon /> Chat with us</button>
            </div>
        </div>
    )
}

export default Footer

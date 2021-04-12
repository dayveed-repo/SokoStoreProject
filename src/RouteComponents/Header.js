import React, { useState } from 'react'
import './Header.css'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';


function Header() {
    const location = useLocation()
    const isMobile = useMediaQuery({ query: `(max-width: 1070px)` });
    const bagQuantity = useSelector(state => state.bagQuantity)

    return (
        <div className="Header" style={{ display: `${location.pathname === '/' && isMobile ? 'flex' : ''}`, borderBottom: `${location.pathname === '/' && isMobile ? 'none' : ''}` }}>
            <div className="Header__Upper" style={{ display: `${location.pathname === '/' && isMobile ? 'none' : ''}`}} >
                <h3>Store Made with s<LocalMallOutlinedIcon />ko</h3>
            </div>

            <div className="Header__Lower" style={{ padding: `${location.pathname !== '/Orders' ? '20px 0px 30px 0px' : '' }`}}>

                <div className="HeaderLower__Left">
                    <Link to="/" style={{ textDecoration: "none", color: ""}}><StorefrontRoundedIcon /></Link>
                    <div className="HeaderLeft__Info">
                        <h3>Target</h3>
                        <p>The address of the known</p>
                    </div>
                </div>

                <div className="HeaderLower__Right">
                    <Link to="/Bag" style={{ textDecoration: "none", color: ""}}><div className="Header__Icon" style={{ color: `${location.pathname === "/Bag" ? 'blue' : ''}`, background: `${location.pathname === '/Bag' ? '#d2e1f7' : ''}`}}>
                        <Badge badgeContent={bagQuantity} color="primary" showZero >
                            <LocalMallOutlinedIcon />
                        </Badge>
                        <p>Bag</p>
                    </div></Link>

                    <Link to="/Orders" style={{ textDecoration: "none", color: ""}}><div className="Header__Icon" style={{ color: `${location.pathname === "/Orders" ? 'blue' : ''}`, background: `${location.pathname === '/Orders' ? '#d2e1f7' : ''}`}} >
                        <PermIdentityRoundedIcon />
                        <p>Account</p>
                    </div></Link>
                </div>
            </div>

            <div className="Header__hidden" style={{ display: `${location.pathname !== '/Orders' ? 'none' : '' }`}}>
                <h4>+91 8080021387</h4>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Header

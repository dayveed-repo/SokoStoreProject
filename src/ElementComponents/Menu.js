import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import FilterRoundedIcon from '@material-ui/icons/FilterRounded';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import './Menu.css'
import { Link, useLocation } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';

function Menu() {

    const location = useLocation()
    const bagQuantity = useSelector(state => state.bagQuantity)

    return (
        <div className="Menu">
            <div className="MenuIcon" style={{ color: `${location.pathname === '/' ? '#2766cc' : ''}`, borderTop: `${location.pathname === '/' ? '2px solid #2766cc' : '' }` }} >
                <Link to='/' style={{ 
                    textDecoration: "none", 
                    color: `${location.pathname === '/' ? "#2766cc" : 'grey'}`, 
                    display: 'flex', 
                    flexDirection: "column", 
                    alignItems: "center",
                    padding: "8px",
                    background: `${location.pathname === '/' ? "#f0f5fc" : ''}`
                     }}>
                    <HomeOutlinedIcon />
                    <h4>Home</h4>
                </Link>
            </div>

            <div className="MenuIcon" style={{ color: `${location.pathname === '/Sections' ? '#2766cc' : ''}`, borderTop: `${location.pathname === '/Sections' ? '2px solid #2766cc' : '' }` }} >
                <Link to="/Sections" style={{ 
                    textDecoration: "none", 
                    color: `${location.pathname === '/Sections' ? "#2766cc" : 'grey'}`, 
                    display: 'flex', 
                    flexDirection: "column", 
                    alignItems: "center",
                    padding: "8px",
                    background: `${location.pathname === '/Sections' ? "#f0f5fc" : ''}`}}>
                    <AppsIcon />
                    <h4>Categories</h4>
                </Link>
            </div>
           

            <div className="MenuIcon" style={{ color: `${location.pathname === '/Bag' ? '#2766cc' : ''}`, borderTop: `${location.pathname === '/Bag' ? '2px solid #2766cc' : '' }` }} >
                <Link to="/Bag" style={{ 
                    textDecoration: "none", 
                    color: `${location.pathname === '/Bag' ? "#2766cc" : 'grey'}`, 
                    display: 'flex', 
                    flexDirection: "column", 
                    alignItems: "center",
                    padding: "8px",
                    background: `${location.pathname === '/Bag' ? "#f0f5fc" : ''}`}}>
                    
                    <Badge badgeContent={bagQuantity} color="primary" showZero >
                        <LocalMallOutlinedIcon />
                    </Badge>
                    <h4>Bag</h4>
                </Link>
            </div>
           

        
            <div className="MenuIcon" style={{ color: `${location.pathname === '/Orders' ? '#2766cc' : ''}`, borderTop: `${location.pathname === '/Orders' ? '2px solid #2766cc' : '' }` }} >
                <Link to='/Orders' style={{ 
                    textDecoration: "none", 
                    color: `${location.pathname === '/Orders' ? "#2766cc" : 'grey'}`, 
                    display: 'flex', 
                    flexDirection: "column", 
                    alignItems: "center",
                    padding: "8px",
                    background: `${location.pathname === '/Orders' ? "#f0f5fc" : ''}`}}>
                    <FilterRoundedIcon />
                    <h4>Orders</h4>
                </Link>
            </div>
        </div>
    )
}

export default Menu

import React, { useEffect, useState } from 'react'
import './Orders.css'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SingleOrder from '../ElementComponents/SingleOrder';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import FilterRoundedIcon from '@material-ui/icons/FilterRounded';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Address from '../ElementComponents/Address';
import CloseIcon from '@material-ui/icons/Close'
import { useSelector } from 'react-redux';
import Menu from '../ElementComponents/Menu';

function Orders() {
    const location = useLocation()
    const currentAddress = useSelector(state => state.currentAddress)

    const [inputs, setinputs] = useState({
        name: '',
        address: '',
        city: '',
        phone: ''
    })
    const [showBtn, setshowBtn] = useState(false)
    const [popUp, setpopUp] = useState(false)

    const handleChange = (e) =>{
        setinputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
       
        if(inputs.name && inputs.address && inputs.phone && inputs.city) {
            setshowBtn(true)
        }else {
            setshowBtn(false)
        }

    }, [inputs])

    return (
        <div className="Orders">
            <div className="Sub__orders">
                <div className="Orders__left">

                    <Link to="/Orders" style={{ textDecoration: "none", color: ""}}>
                        <div style={{ borderRight: `${location.pathname === '/Orders' ? "5px solid #2766cc" : "none"}`, background: `${location.pathname === '/Orders' ? "linear-gradient(to right, white, #dce6f3)" : "none"}`, color: `${location.pathname === '/Orders' ? '#2766cc' : ''}` }}>
                            <FilterRoundedIcon />
                            <h4>Orders</h4>
                        </div>
                    </Link>
                    
                    <Link to="/Address" style={{ textDecoration: "none", color: ""}}>
                        <div style={{ borderRight: `${location.pathname === '/Address' ? "5px solid #2766cc" : "none"}`, background: `${location.pathname === '/Address' ? "linear-gradient(to right, white, #dce6f3)" : "none"}`, color: `${location.pathname === '/Address' ? '#2766cc' : ''}` }}>
                            <LocationOnOutlinedIcon />
                            <h4>My address</h4>
                        </div>
                    </Link>
                </div>

                {
                    location.pathname === '/Orders' ? 
                <div className="Orders__right">
                    <div className='Order_right_header'>
                        <h2>Showing all Orders</h2>
                        <span> <FilterListRoundedIcon /> Filter </span>
                    </div>

                    <div className="Orders__Items">
                        <SingleOrder deliveryInfo="Target" price={1200} id={234533}/>
                        <SingleOrder deliveryInfo="Shipped" name="Daylight store" id={444467} price={2200} />
                        <SingleOrder deliveryInfo="Target" id={345222} price={150} />
                        <SingleOrder deliveryInfo="done" name="Express" price={4500} id={887955} />
                    </div>
                </div>

                    :
                <div className="Add_Items">
                    <button onClick={() => setpopUp(true)}>
                        <AddRoundedIcon />
                        add new address
                    </button>

                    <Address name="Diego carlos" location="Quinch ville Plot 12 Nkrumuh road kampala Uganda" phone="+256766334574" />
                </div>
                }
            </div>

{/* ------------------------ pop up form for the Address -----------------------------------  */}
            <div className="Add__Address" style={{ display: `${popUp ? 'flex' : 'none'}` }}>
                <div className="Add__header">
                    <h3>Edit Address</h3>
                    <CloseIcon onClick={() => setpopUp(false)} />
                </div>
                
                <div className="Add__body">
                    <div className="Add_Input">
                        <h4>Name</h4>
                        <input type="text" onChange={handleChange} placeholder="E.g. John doe" name="name" />
                    </div>

                    <div className="Add_Input">
                        <h4>Mobile Number</h4>
                        <input type="text" onChange={handleChange} placeholder="Enter mobile number" name="phone" />
                    </div>

                    <div className="Add_Input">
                        <h4>City</h4>
                        <input type="text" onChange={handleChange} placeholder="Lagos" name="city" />
                    </div>

                    <div className="Add_Input AddressInput">
                        <h4>Address</h4>
                        <input type="text" onChange={handleChange} placeholder="Kemfat street, thomas estate, Ajah" name="address" />
                    </div>

                    <button style={{ opacity: `${showBtn ? "1" : ""}`}}>Add Address</button>
                </div>
            </div>

            <Menu />
        </div>
    )
}

export default Orders

import React, { useState, useEffect } from 'react'
import BagItem from '../ElementComponents/BagItem'
import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded'
import './Bag.css'
import CloseIcon from '@material-ui/icons/Close'
import { TextField, MenuItem } from '@material-ui/core'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router'
import Menu from '../ElementComponents/Menu'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../reduxComponents/actions'
import { FormControlLabel, Radio } from '@material-ui/core';
import { Link } from 'react-router-dom'

function Bag() {

    const location = useLocation();
    const isMobile = useMediaQuery({ query: `(max-width: 1070px)` });
    const bagQuantity = useSelector(state => state.bagQuantity)
    const bagTotal = useSelector(state => state.bagTotal)
    const bagTotalDis = useSelector(state => state.bagTotalDis)
    const bag = useSelector(state => state.bag)

    const [currencies, setcurrencies] = useState([ { value: "Ghana", label: "+212" }, { value: "Nigeria", label: "+234" }, { value: "Mexico", label: "+52" }, { value: "Kenya", label: "+254" } ])
    const [currency, setcurrency] = useState("Nigeria")
    const [popUp, setpopUp] = useState("close")
    const [inputs, setinputs] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
    })

    const dispatch = useDispatch()
    const linkStyle = {
        textDecoration: "none", 
        color: "",
        width: "70%",
        height: "fit-content",
        alignItems: "center",
    }

    const handleChange = (e) =>{
        setcurrency(e.target.value)
    }

    const handleinputs = (e) =>{
        setinputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(inputs.input1 && inputs.input2 && inputs.input3 && inputs.input4 ){
            setpopUp("address")
        }

    }, [inputs])

    return (
        <div className="Bag" style={{ display: `${location.pathname === '/' && isMobile ? 'none' : ''}` }}>
            <div className="BagHeader">
                <h2>Bag <span>{bagQuantity}</span></h2>
                <p onClick={() => dispatch(actions.clearBag())}>clear bag</p>
            </div>

            { bag.length > 0 ?
            <> 
{/* ----------------------- main bag item ----------------------------------- */}
            <div className="BagItems">                
                
                {bag.map(item => <BagItem key={item.id} id={item.id} name={item.name} price={item.price}  quantity={item.quantity} />)}
            
            </div>

            <div className="BagSubtotal">
                <div className="Subtotal">
                    <h4>Subtotal</h4>
                    <p>Ugx {bagTotal}</p>
                </div>

                <div className="Subtotal">
                    <h4>delivery</h4>
                    <h5>free</h5>
                </div>
            </div>

            <div className="BagTotal">
                <div>
                   <h4>Total</h4>
                   <p>inclusive of all taxes</p> 
                </div>

                <h3>ugx {bagTotal}</h3>
            </div>
            <h5 className="BagSaving">your about to save ugx {bagTotalDis - bagTotal}</h5>

            <button onClick={() => setpopUp("open")}>Checkout</button>

{/* --------------------- for pop up -------------------------------------------------------- */}
            <div className="Popup" style={{ 
                display: `${popUp === "close" ? "none" : popUp === 'address' ?  "flex" : ""}`, 
                height: `${popUp === 'address' ? '70vh' : ''}`,
                flexDirection: `${popUp === 'address' ? 'column' : ''}`, 
                alignItems: "center",
                paddingTop: "10px"
                }}
                >
                <div className='Popup__header' style={{ marginTop: `${popUp === 'address' ? '0' : ''}` }}>
                    { popUp === 'verify' ? <ArrowBackIosRoundedIcon onClick={() => setpopUp("open")} /> : <CloseIcon onClick={() =>  setpopUp("close")} /> }
                    <h2>{popUp === "open" ? "Mobile Verification" : popUp === "verify" ? "Verify your number" : "enter your address"}</h2>
                </div>

                <div className="Popup__body" style={{ 
                    width: `${popUp === 'verify' || popUp === 'address' ? '100%' : ''}`,
                    height: `${popUp === 'address' ? '40vh' : ''}`
                    }}>
                    <p style={{ display: `${popUp === 'address' ? 'none' : ''}`}}>{popUp === 'verify' ? 'Please enter the verification code sent via SMS to +234 8158973692' : 'Please enter your phone number'}</p>
                    
                    {
                        popUp === 'open' ?
                            // mobile verification
                        <div>
                            <TextField id="standard-select-currency" select label="phone" value={currency} onChange={handleChange}>

                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField id="standard-basic" label="phone" />
                        </div>
                        : popUp === 'verify' ? 
                        
                        <div className="Verify__inputs">
                            <input type="text" name="input1" maxlength='1' onChange={handleinputs} />
                            <input type="text" name="input2" maxlength='1' onChange={handleinputs} />
                            <input type="text" name="input3" maxlength='1' onChange={handleinputs} />
                            <input type="text" name="input4" maxlength='1' onChange={handleinputs} />
                        </div> 
                        
                        : 
                        <span className="Popup__address">

                            <div className="address__inputs">
                                <h5>Full name</h5>
                                <input type="text" placeholder="John Doe" />
                            </div>

                            <div className="address__inputs">
                                <h5>Address</h5>
                                <input type="text" placeholder="Thomas Estate, Ajah" />
                            </div>

                            <div className="address__inputs">
                                <h5>City</h5>
                                <input type="text" placeholder="Lagos" />
                            </div>

                            <div className="PopUp__PayMeth">
                                <p>PAYMENT METHOD</p>
                                <span><FormControlLabel value="female" control={<Radio color="primary" />} label="Cash on delivery" /></span>
                            </div>
                        </span>
                    }
                </div>

                { popUp === 'verify' ? <span>resend code</span> : popUp === 'address' ? <Link to="/OrderSuccess" style={linkStyle}><button onClick={() => setpopUp('close')}>Place Order</button></Link> : <button onClick={() => setpopUp('verify')}>Send Verification</button> }
            </div>
{/* ------------------------------------------------------------------------------------------------ */}
            </> 
            
            : 
// ------------------------------ empty bag ---------------------------------------------------
            <div className="Empty__bag">
                <SentimentDissatisfiedRoundedIcon />    
                <h3>it's empty here</h3>
                <p>start shopping to add items to your bag</p>
            </div>
// --------------------------------------------------------------------------------------------
            }

            {popUp === "close" && <Menu />}
        </div>
    )
}

export default Bag

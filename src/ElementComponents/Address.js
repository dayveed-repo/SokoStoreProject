import React from 'react'
import { useDispatch } from 'react-redux'
import './Address.css'
import actions from '../reduxComponents/actions.js'

function Address({ name, location, phone }) {

    const dispatch = useDispatch()
    const handleEdit = () =>{
        dispatch(actions.getAddressData({name, location, phone}))
    }
    return (
        <div className="Address">
            <h3>{name}</h3>
            
            <p>{location}</p>
            
            <h5>{phone}</h5>
            
            <span>
                <h4 onClick={handleEdit}>Edit</h4> 
                <h3>Delete</h3>
            </span>
        </div>
    )
}

export default Address

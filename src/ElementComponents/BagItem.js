import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import './BagItem.css'

function BagItem({name, discount, quantity, price}) {
    return (
        <div className="BagItem">
            <div>
                <h1>{name}</h1>
                <p>Per piece</p>
            </div>

            <div className="BagItem__num">
                <div>
                    <h4>UGX {price}</h4>
                    {discount && <p>UGX {discount}</p>}
                </div>

                <div className="Product__Quantity">
                    <AddRoundedIcon />
                    <span>{quantity}</span>
                    <RemoveIcon />
                </div>
            </div>
        </div>
    )
}

export default BagItem

import React, { useEffect } from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import './BagItem.css'
import { useDispatch } from 'react-redux';
import actions from '../reduxComponents/actions';

function BagItem({ id, name, discount, quantity, price}) {

    const dispatch = useDispatch()

    const handleReduce = () =>{
        if(quantity > 1) {
            dispatch(actions.decreaseBagItem(id))
        }else {
            dispatch(actions.removeItemFromBag(id))
        }
    }

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
                    <AddRoundedIcon onClick={() => dispatch(actions.increaseBagItem(id))} />
                    <span>{quantity}</span>
                    <RemoveIcon onClick={handleReduce} />
                </div>
            </div>
        </div>
    )
}

export default BagItem

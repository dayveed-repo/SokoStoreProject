import React from 'react'
import './Product.css'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../reduxComponents/actions';

function Product({ imageSrc, name, price, discount, id }) {

    const location = useLocation()
    const sectionView = useSelector(state => state.sectionView)
    const dispatch = useDispatch()

    return (
        <Link to="/Product" style={{ textDecoration: "none", color: "grey"}} >
            <div className="Product" style={{
                flexDirection: `${sectionView && location.pathname === '/Sections' ? "column" : ""}` ,
                width: `${sectionView && location.pathname === '/Sections' ? "40vw" : ""}`,
                height: `${sectionView && location.pathname === '/Sections' ? "40vh" : ""}`,
                justifyContent: `${sectionView && location.pathname === '/Sections' ? "space-between" : ""}`,
                alignItems: `${sectionView && location.pathname === '/Sections' ? "flex-start" : ""}`
        }} onClick={() => dispatch(actions.getViewedProduct(id))}>

            <img src={imageSrc} alt="Product" style={{
                height: `${sectionView && location.pathname === '/Sections' ? "25vh" : ""}`,
                width: `${sectionView && location.pathname === '/Sections' ? "40vw" : ""}`
            }} />

            <div className="Product__Info" style={{
                padding: `${sectionView && location.pathname === '/Sections' ? "0" : ""}`
            }}>
                <h5>{name}</h5>
                <p>UGX {price} <span>{`${discount ? `UGX ${discount}` : "" }`}</span></p>
            </div>

            <button style={{
                width: `${sectionView && location.pathname === '/Sections' ? "90%" : ""}`,
                fontSize: `${sectionView && location.pathname === '/Sections' ? "large" : ""}`,
                justifyContent: `${sectionView && location.pathname === '/Sections' ? "center" : ""}`,
                borderRadius: `${sectionView && location.pathname === '/Sections' ? "5px" : ""}`,
                height: `${sectionView && location.pathname === '/Sections' ? "5vh" : ""}`
            }}><AddRoundedIcon /> {sectionView ? "Add to bag" : "Add"}</button>
        </div></Link>
    )
}

export default Product

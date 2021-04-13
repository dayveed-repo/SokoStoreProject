import React, { useState } from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';
import SortIcon from '@material-ui/icons/Sort';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import './Categories.css'
import Menu from '../ElementComponents/Menu';
import Product from '../ElementComponents/Product';
import actions from '../reduxComponents/actions';
import { useDispatch, useSelector } from 'react-redux';

function Categories() {
    const [secName, setsecName] = useState("")
    const [currentView, setcurrentView] = useState(true)

    const dispatch = useDispatch()
    const sectionView = useSelector(state => state.sectionView)
    const sokoStore = useSelector(state => state.sokoStore)

    const handleView = () =>{
        dispatch(actions.changeView())
        setcurrentView(!currentView)
    }


    return (
        <>
        <div className="Categories" style={{ height: `${secName ? '88vh' : ''}`}} >
            {
                secName && 
                <div className="Category__Title" onClick={() => setsecName("")}>
                    <ArrowBackIosRoundedIcon />
                    {secName}
                </div>
            }

            <div className="Search" style={{ borderTop: `${secName ? '2px solid lightgrey' : ''}`, paddingTop: `${secName ? '3%' : ''}` }} >
                <input type="text" placeholder="Search for Product..."/>
                <SearchOutlinedIcon />
            </div>

            { !secName ? 
            <h3>All Categories</h3> 
                : 
            <span className="Category__Action">
                <h4 onClick={handleView}>{!currentView ? <><ListIcon /> List View</> : <><AppsIcon /> Grid View</>}</h4>
                <p> <SortIcon /> Sort</p>
            </span>
            }

           { !secName ? (
            
            <div className="Category__items">
                <div onClick={() => setsecName("Electronics")}>
                    <img src="https://specials-images.forbesimg.com/imageserve/5eb7e798268ee200079ed3f5/960x0.jpg?fit=scale" alt="Food" />
                    <h4>Electronics</h4>
                </div>

                <div onClick={() => setsecName("Face Mask")}>
                    <img src="https://specials-images.forbesimg.com/imageserve/5efbfb7e0a082b000786e3c6/960x0.jpg?fit=scale" alt="Food" />
                    <h4>Face Mask</h4>
                </div>

                <div onClick={() => setsecName("Food")}>
                    <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*" alt="Food" />
                    <h4>Food</h4>
                </div>

                <div onClick={() => setsecName("Grocery")}>
                    <img src="https://st3.depositphotos.com/30232686/37473/i/1600/depositphotos_374739828-stock-photo-paper-bag-bread-grey-background.jpg" alt="Food" />
                    <h4>Grocery</h4>
                </div>

                <div onClick={() => setsecName("Kids")}>
                    <img src="https://thumbs.dreamstime.com/b/kids-fashion-portrait-nice-little-african-american-boy-dressed-stylish-clothes-posing-over-dark-background-studio-baby-191801461.jpg" alt="Food" />
                    <h4>Kids</h4>
                </div>

                <div onClick={() => setsecName("Home")}>
                    <img src="https://i.pinimg.com/originals/96/71/d3/9671d3f507019356daeb390989d58f8b.jpg" alt="Food" />
                    <h4>Home</h4>
                </div>
            </div>) :

                (<div className="Sec__Products" style={{ 
                    display: `${sectionView ? "flex" : ""}`, 
                    flexWrap: `${sectionView ? "wrap" : ""}`,
                    justifyContent: `${sectionView ? "space-around" : ""}`,
                    }} >
                    {sokoStore.map(item => <Product key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} discount={item.dicount} />)}
                </div>)
                }
        </div>
        <Menu />
        </>
    )
}

export default Categories

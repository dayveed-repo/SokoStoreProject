import React, { useState } from 'react'
import "./Feed.css"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Product from '../ElementComponents/Product';
import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-elastic-carousel';
import Menu from '../ElementComponents/Menu'
import { useSelector } from 'react-redux';

function Feed() {
    const isMobile = useMediaQuery({ query: `(max-width: 1070px)` });
    const sokoStore = useSelector(state => state.sokoStore)

    return (
        <div className="Feed">
            <div className="Search">
                <input type="text" placeholder="Search for Product..."/>
                <SearchOutlinedIcon />
            </div>

            { !isMobile ? 
                <div className="ProductSection"><h4>Electronics <span>12</span></h4></div>
                    :
                <div className ="FeedCategories">
                    <p>Top sellers</p>

                    <Carousel itemsToShow={3} showArrows={false} enableAutoPlay className="ImageSlide">
                        <div className="CategorySlide">
                            <img  src='https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*' alt="carousle" />
                            <h3>Food</h3>
                        </div>

                        <div className="CategorySlide">
                            <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGuwjHeLm_3RbGbFwtgzxsj3EXfDn2PTRaA&usqp=CAU' alt="carousle" />
                            <h3>Furniture</h3>
                        </div>

                        <div className="CategorySlide">
                            <img  src='https://st3.depositphotos.com/30232686/37473/i/1600/depositphotos_374739828-stock-photo-paper-bag-bread-grey-background.jpg' alt="carousle" />
                            <h3>Grocery</h3>
                        </div>

                        <div className="CategorySlide">
                            <img  src='https://specials-images.forbesimg.com/imageserve/5efbfb7e0a082b000786e3c6/960x0.jpg?fit=scale' alt="carousle" />
                            <h3>Face Mask</h3>
                        </div>

                        <div className="CategorySlide">
                            <img  src='https://specials-images.forbesimg.com/imageserve/5eb7e798268ee200079ed3f5/960x0.jpg?fit=scale' alt="carousle" />
                            <h3>Electronics</h3>
                        </div>
                    </Carousel>

                    <span>
                        <h2>Top sellers</h2>
                        <p>View all</p>
                    </span>
                </div>
            }

            <div className="Products">
               {sokoStore.map(item => <Product key={item.id} id={item.id} imageSrc={item.imageSrc} name={item.name} price={item.price} discount={item.dicount} />)}
            </div>

            <Menu />
        </div>
    )
}



export default Feed

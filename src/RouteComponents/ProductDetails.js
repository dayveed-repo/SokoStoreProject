import React from 'react'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import './ProductDetails.css'
import RemoveIcon from '@material-ui/icons/Remove';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ReactElasticCarousel from 'react-elastic-carousel';
import RelatedProduct from '../ElementComponents/RelatedProduct';
import Menu from '../ElementComponents/Menu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../reduxComponents/actions';

function ProductDetails() {
    const dispatch = useDispatch()

    const viewedProduct = useSelector(state => state.viewedProduct[0])
    return (
        <>
        <div className="ProductDetails">
            <div className="ProductHeader"><h2><ArrowBackIosRoundedIcon /> Furniture</h2></div>

            <div className="Product__infor">
                <img className="Product__img" src={viewedProduct && viewedProduct.imageSrc} />

                <div className="Product__description">
                    <div>
                        <h4>{viewedProduct && viewedProduct.name}</h4>
                        <p>Sadia 2-tier file cabinet is the perfect cabinyou can place this mobile cabinet wherever you want to move.</p>
                    </div>

                    <div>
                        <span>
                            <h3>UGX {viewedProduct && viewedProduct.price}</h3>
                            <p>UGX {viewedProduct && viewedProduct.discount}</p>
                        </span>

                         <div className="Product__Quantity quan">
                                <AddRoundedIcon />
                               <span>1</span>
                               <RemoveIcon />
                        </div>   
                    </div>

                    <div className="Product__Actions">
                        <button className="AddToBag" onClick={() => dispatch(actions.addItemToBag(viewedProduct.id))}> Add to Bag </button>
                        <Link to="/Bag" style={{ textDecoration: "none", color: "#2766cc"}}><button className="BuyNow"> Buy Now </button></Link>
                    </div>
                </div>
            </div>

            <div className="Other__Products">
                    <h4>related products</h4>
                    <ReactElasticCarousel className="OtherProductsContainer" itemsToShow={3}>
                        <RelatedProduct imageSrc="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg" Info="special related product" />
                        <RelatedProduct imageSrc="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg" Info="special related product" />
                        <RelatedProduct imageSrc="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg" Info="special related product" />
                        <RelatedProduct imageSrc="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg" Info="special related product" />
                        <RelatedProduct imageSrc="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg" Info="special related product" />
                        <RelatedProduct imageSrc="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg" Info="special related product" />
                        <RelatedProduct imageSrc="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg" Info="special related product" />
                        <RelatedProduct imageSrc="https://media.architecturaldigest.com/photos/5f443ebcc73b004522ddb536/1:1/w_3000,h_3000,c_limit/95525_talclinen_v1.jpg" Info="special related product" />
                    </ReactElasticCarousel>
            </div>
        </div>
        <Menu />
        </>
    )
}

export default ProductDetails

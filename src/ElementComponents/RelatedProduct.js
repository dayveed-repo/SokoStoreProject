import React from 'react'
import './RelatedProduct.css'

function RelatedProduct({ imageSrc, Info }) {
    return (
        <div className="RelatedProduct">
            <img src={imageSrc} />
            <p>{Info}</p>
        </div>
    )
}

export default RelatedProduct

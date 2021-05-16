import React from 'react' 
 import {
     BrowserRouter as Router , 
     Link 
 } from "react-router-dom" ; 
const ProductItem = ({ product }) => { 
    // console.log("product" , product) 
    return (
        <>  
         <div className="product-item recent-product style-01 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-93 product type-product status-publish has-post-thumbnail product_cat-light product_cat-table product_cat-new-arrivals product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-simple">
                                            <div className="product-inner tooltip-left">
                                                <div className="product-thumb">
                                                    <Link className="thumb-link" to= { `/product/${product.id}` } >
                                                        <img className="img-responsive" src= {product.avatar} alt="Black Shirt" width={270} height={350} />
                                                    </Link>
                                                    <div className="flash">
                                                        <span className="onnew"><span className="text">New</span></span></div>
                                                    <div className="group-button">
                                                        <div className="yith-wcwl-add-to-wishlist">
                                                            <div className="yith-wcwl-add-button show">
                                                                <a href="#" className="add_to_wishlist">Add to Wishlist</a>
                                                            </div>
                                                        </div>
                                                        <div className="akasha product compare-button">
                                                            <a href="#" className="compare button">Compare</a>
                                                        </div>
                                                        <a href="#" className="button yith-wcqv-button">Quick View</a>
                                                        <div className="add-to-cart">
                                                            <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add
                          to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-info equal-elem">
                                                    <h3 className="product-name product_title">
                                                        <Link to= { `product/${product.id}` }>{product.name}</Link>
                                                    </h3>
                                                    <div className="rating-wapper nostar">
                                                        <div className="star-rating"><span style={{ width: '0%' }}>Rated <strong className="rating">0</strong> out of 5</span></div>
                                                        <span className="review">(0)</span></div>
                                                    <span className="price"><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>{product.price}</span></span>
                                                </div>
                                            </div>
                                        </div>
                                   

            
        </>
    )
}

export default ProductItem

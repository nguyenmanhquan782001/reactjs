import React from 'react';
import { useParams } from "react-router-dom";




const ProductDetailPage = ({ data }) => {
    window.scrollTo(0, 0)
    const { id } = useParams();
    //  console.log(id) ;  
    const product = data.find(item => item.id == id);
    const lq = data.filter(item => item.id != id);
    //  console.log(lq) ;   
    const arr = [];
    for (var i = 0; i < 5; i++) {
        arr[i] = lq[i];
    }
    console.log(arr);

    //   console.log(product) ; 
    return (
        <>
            <div className="banner-wrapper no_background">
                <div className="banner-wrapper-inner">
                    <nav className="akasha-breadcrumb"><a href="index-2.html">Home</a><i className="fa fa-angle-right" /><a href="#">Shop</a>
                        <i className="fa fa-angle-right" />Single Product
                         </nav>
                </div>
            </div>
            <div className="single-thumb-vertical main-container shop-page no-sidebar">
                <div className="container">
                    <div className="row">
                        <div className="main-content col-md-12">
                            <div className="akasha-notices-wrapper" />
                            <div id="product-27" className="post-27 product type-product status-publish has-post-thumbnail product_cat-table product_cat-new-arrivals product_cat-lamp product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-variable has-default-attributes">
                                <div className="main-contain-summary">
                                    <div className="contain-left has-gallery">
                                        <div className="single-left">

                                            <img src={product.avatar} width={450} />
                                            {/* <a href="#" className="akasha-product-gallery__trigger">
                                                    <img draggable="false" className="emoji" alt="🔍" src="https://picsum.photos/200/300" /></a>
                                                <div className="flex-viewport">
                                                    <figure className="akasha-product-gallery__wrapper">
                                                        <div className="akasha-product-gallery__image">
                                                            <img alt="img" src="https://picsum.photos/200/300" />
                                                        </div>
                                                        <div className="akasha-product-gallery__image">
                                                            <img src="https://picsum.photos/200/300" alt="img" />
                                                        </div>
                                                        <div className="akasha-product-gallery__image">
                                                            <img src="https://picsum.photos/200/300" className alt="img" />
                                                        </div>
                                                        <div className="akasha-product-gallery__image">
                                                            <img src="https://picsum.photos/200/300" className alt="img" />
                                                        </div>
                                                    </figure>
                                                </div> 
                                                 */}


                                        </div>
                                        <div className="summary entry-summary">
                                            <div className="flash">
                                                <span className="onnew"><span className="text">New</span></span></div>
                                            <h1 className="product_title entry-title">{product.name}</h1>
                                            <p className="price"><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>146.00</span> – <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>185.00</span></p>
                                            <p className="stock in-stock">
                                                Availability: <span> In stock</span>
                                            </p>
                                            <div className="akasha-product-details__short-description">
                                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                                turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                    sit amet, ante.</p>
                                                <ul>
                                                    <li>Water-resistant fabric with soft lycra detailing inside</li>
                                                    <li>CLean zip-front, and three piece hood</li>
                                                    <li>Subtle branding and diagonal panel detail</li>
                                                </ul>
                                            </div>
                                            <form className="variations_form cart">

                                                <div className="single_variation_wrap">
                                                    <div className="akasha-variation single_variation" />
                                                    <div className="akasha-variation-add-to-cart variations_button akasha-variation-add-to-cart-disabled">
                                                        <div className="quantity">
                                                            <span className="qty-label">Quantiy:</span>
                                                            <div className="control">
                                                                <a className="btn-number qtyminus quantity-minus" href="#">-</a>
                                                                <input type="text" data-step={1} min={0} max name="quantity[25]" defaultValue={0} title="Qty" className="input-qty input-text qty text" size={4} pattern="[0-9]*" inputMode="numeric" />
                                                                <a className="btn-number qtyplus quantity-plus" href="#">+</a>
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="single_add_to_cart_button button alt disabled akasha-variation-selection-needed">
                                                            Add to cart
                      </button>
                                                        <input name="add-to-cart" defaultValue={27} type="hidden" />
                                                        <input name="product_id" defaultValue={27} type="hidden" />
                                                        <input name="variation_id" className="variation_id" defaultValue={0} type="hidden" />
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="yith-wcwl-add-to-wishlist">
                                                <div className="yith-wcwl-add-button show">
                                                    <a href="#" rel="nofollow" data-product-id={27} data-product-type="variable" className="add_to_wishlist">
                                                        Add to Wishlist</a>
                                                </div>
                                            </div>
                                            <div className="clear" />
                                            <a href="#" className="compare button" data-product_id={27} rel="nofollow">Compare</a>
                                            <div className="product_meta">
                                                <div className="wcml-dropdown product wcml_currency_switcher">
                                                    <ul>
                                                        <li className="wcml-cs-active-currency">
                                                            <a className="wcml-cs-item-toggle">USD</a>
                                                            <ul className="wcml-cs-submenu">
                                                                <li>
                                                                    <a>EUR</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span className="sku_wrapper">SKU: <span className="sku">885B712</span></span>
                                                <span className="posted_in">Categories: <a href="#" rel="tag">Bags</a>, <a href="#" rel="tag">New arrivals</a>, <a href="#" rel="tag">Summer Sale</a></span>
                                                <span className="tagged_as">Tags: <a href="#" rel="tag">Bags</a>, <a href="#" rel="tag">Sock</a></span>
                                            </div>
                                            <div className="akasha-share-socials">
                                                <h5 className="social-heading">Share: </h5>
                                                <a target="_blank" className="facebook" href="#">
                                                    <i className="fa fa-facebook-f" />
                                                </a>
                                                <a target="_blank" className="twitter" href="#"><i className="fa fa-twitter" />
                                                </a>
                                                <a target="_blank" className="pinterest" href="#"> <i className="fa fa-pinterest" />
                                                </a>
                                                <a target="_blank" className="googleplus" href="#"><i className="fa fa-google-plus" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 akasha_dreaming_upsell-product">
                            <div className="block-title">
                                <h2 className="product-grid-title">
                                    <span>Upsell Products</span>
                                </h2>
                            </div>
                            <div className="owl-slick owl-products equal-container better-height" data-slick="{&quot;arrows&quot;:false,&quot;slidesMargin&quot;:30,&quot;dots&quot;:true,&quot;infinite&quot;:false,&quot;slidesToShow&quot;:4}" data-responsive="[{&quot;breakpoint&quot;:480,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;20&quot;}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesMargin&quot;:&quot;20&quot;}},{&quot;breakpoint&quot;:1500,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesMargin&quot;:&quot;30&quot;}}]">

                                {
                                    arr.map((products, item) => {

                                        return (

                                            <div className="product-item style-01 post-27 product type-product status-publish has-post-thumbnail product_cat-table product_cat-new-arrivals product_cat-lamp product_tag-table product_tag-sock  instock shipping-taxable purchasable product-type-variable has-default-attributes ">
                                                <div className="product-inner tooltip-left">
                                                    <div className="product-thumb">
                                                        <a className="thumb-link" href="#" tabIndex={0}>
                                                            <img className="img-responsive" src={products.avatar} alt="Mini Dress" width={200} height={344} />
                                                        </a>
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
                                                                <a href="#" className="button product_type_external add_to_cart_button">Buy
                it on Amazon</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-info equal-elem">
                                                        <h3 className="product-name product_title">
                                                            <a href="#" tabIndex={0}>Dining Accessories</a>
                                                        </h3>
                                                        <div className="rating-wapper ">
                                                            <div className="star-rating"><span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5</span></div>
                                                            <span className="review">(1)</span></div>
                                                        <span className="price"><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>207.00</span></span>
                                                    </div>
                                                </div>
                                            </div>


                                        )

                                    })
                                }
                            </div>
                        </div>




                    </div>
                </div>
            </div>



        </>


    )
}

export default ProductDetailPage

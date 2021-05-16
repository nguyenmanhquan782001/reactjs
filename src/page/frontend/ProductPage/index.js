import React from 'react'
import { useParams } from "react-router-dom"; 
import {
  BrowserRouter as Router , 
  Link 
}from "react-router-dom";  

const ProductPage = (props) => {
  const { id } = useParams();
  console.log(id);
  const news = props.products.filter((item) => item.categoryId == id); 
  console.log("new", news);
  return (
    <>
      <div className="section-001">
        <div className="container">
          <div className="akasha-products style-04">
            <div className="response-product product-list-grid row auto-clear equal-container better-height ">
              {
                news.map((product, index) => {
                  return (
                    <div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-25 product type-product status-publish has-post-thumbnail product_cat-light product_cat-chair product_cat-specials product_tag-light product_tag-sock first instock sale featured shipping-taxable purchasable product-type-simple">
                      <div className="product-inner tooltip-top tooltip-all-top">
                        <div className="product-thumb">
                          <Link className="thumb-link" to={ `/product/${product.id}` }>
                          <img className="img-responsive" src={product.avatar} width={270} height={350} />
                          </Link>
                          <div className="flash">

                            <span className="onnew"><span className="text">New</span></span></div>
                          <div className="group-button">
                            <div className="add-to-cart">
                              <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to
                                      cart</a>
                            </div>
                            <a href="#" className="button yith-wcqv-button">Quick View</a>
                            <div className="akasha product compare-button">
                              <a href="#" className="compare button">Compare</a></div>
                            <div className="yith-wcwl-add-to-wishlist">
                              <div className="yith-wcwl-add-button show">
                                <a href="#" className="add_to_wishlist">Add to Wishlist</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h3 className="product-name product_title">
                            <a href="#"> {product.name}</a>
                          </h3>
                          <span className="price"><del><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>89.00</span></del> <ins><span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>79.00</span></ins></span>
                          <div className="rating-wapper nostar">
                            <div className="star-rating"><span style={{ width: '0%' }}>Rated <strong className="rating">0</strong> out of 5</span></div>
                            <span className="review">(0)</span></div>
                        </div>
                      </div>
                    </div>


                  )

                })

              }

            </div>
            {/* OWL Products */}
            <div className="shop-all">
              <a target=" _blank" href="#">Discovery All</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductPage

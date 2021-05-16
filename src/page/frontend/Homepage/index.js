import React from 'react'
import ProductItem from '../../../components/frontend/ProductItem';
import { useState, useEffect } from "react";
import BannerHomepage from '../../../components/frontend/Banner/BannerHomepage';


const Homepage = ({ data }) => {
    // console.log("data" , data) ;    
    const [newProducts, setProduct] = useState([]);
    // console.log("1", newProducts)
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = [];
                for (let index = 0; index < 8; index++) {
                    response[index] = data[index];

                }
                setProduct(response);
            } catch (error) {
                console.log(error)

            }
        }
        getProduct();

    }, [])


    const filters = data.filter(product => product.categoryId == 1);
    const filter1 = data.filter(product => product.categoryId == 2);

    // console.log(filters) ; 
    const newProduct = [];
    for (var index = 0; index < 3; index++) {
        newProduct[index] = data[index];
    }
    //  console.log ("new" , newProduct)

    return (
        <> 
    <BannerHomepage />
            <div className="section-022">
                <div className="container">
                    <div className="akasha-tabs style-01">
                        <div className="tab-head">
                            <ul className="tab-link equal-container " data-loop={1}>
                                <li className="active">
                                    <a className="loaded" data-ajax={0} data-animate data-section="1547652538969-4e9e849f-123a" data-id={330} href="#1547652538969-4e9e849f-123a-5d80aefaa70e2">
                                        <span>New Arrival</span>
                                    </a>
                                </li>
                                <li className>
                                    <a className data-ajax={0} data-animate data-section="1547652726354-2b0cdba5-80e9" data-id={330} href="#1547652726354-2b0cdba5-80e9-5d80aefaa70e2">
                                        <span>Top Rated</span>
                                    </a>
                                </li>
                                <li className>
                                    <a className data-ajax={0} data-animate data-section="1547652725565-7e88bea3-ede2" data-id={330} href="#1547652725565-7e88bea3-ede2-5d80aefaa70e2">
                                        <span>Featured</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-container">

                            <div className="tab-panel active" id="1547652538969-4e9e849f-123a-5d80aefaa70e2">
                                <div className="akasha-products style-01">
                                    <div className="response-product product-list-grid row auto-clear equal-container better-height ">
                                        {
                                            data.map((product, index) => {
                                                return <ProductItem key={index} product={product} />

                                            })
                                        }

                                    </div>
                                    {/* OWL Products */}
                                </div>
                            </div>

                            <div className="tab-panel " id="1547652726354-2b0cdba5-80e9-5d80aefaa70e2">
                                <div className="akasha-products style-01   akasha_custom_5d67efefedff9 ">
                                    <div className="response-product product-list-grid row auto-clear equal-container better-height ">
                                        {
                                            filters.map((product, index) => {
                                                return <ProductItem key={index} product={product} />

                                            })

                                        }
                                    </div>
                                    {/* OWL Products */}
                                </div>
                            </div>
                            <div className="tab-panel " id="1547652725565-7e88bea3-ede2-5d80aefaa70e2">
                                <div className="akasha-products style-01   akasha_custom_5d67efefee7c9 ">
                                    <div className="response-product product-list-grid row auto-clear equal-container better-height ">
                                        {
                                            filter1.map((product, index) => {
                                                return <ProductItem key={index} product={product} />

                                            })


                                        }
                                    </div>
                                    {/* OWL Products */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-023">
                <div className="akasha-banner style-11 left-center">
                    <div className="banner-inner">
                        <figure className="banner-thumb">
                            <img src="FE/assets/images/banner4-41.jpg" className="attachment-full size-full" alt="img" /></figure>
                        <div className="banner-info container">
                            <div className="banner-content">
                                <div className="title-wrap">
                                    <div className="banner-label">
                                        Supper Sale!
            </div>
                                    <h6 className="title">
                                        Up To 40% Off </h6>
                                </div>
                                <div className="button-wrap">
                                    <div className="subtitle">
                                        Best selling products for summer
            </div>
                                    <a className="button" target=" _blank" href="#"><span>Shop now</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-001">
                <div className="container">
                    <div className="akasha-heading style-01">
                        <div className="heading-inner">
                            <h3 className="title">
                                Follow Us </h3>
                            <div className="subtitle">
                                @akashashop
        </div>
                        </div>
                    </div>
                    <div className="akasha-instagram style-01" >
                        <div style={{ display: 'flex' }} className="instagram-owl owl-slick" data-slick="{&quot;arrows&quot;:false,&quot;slidesMargin&quot;:10,&quot;dots&quot;:false,&quot;infinite&quot;:false,&quot;speed&quot;:300,&quot;slidesToShow&quot;:4,&quot;rows&quot;:1}" data-responsive="[{&quot;breakpoint&quot;:480,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:1500,&quot;settings&quot;:{&quot;slidesToShow&quot;:4,&quot;slidesMargin&quot;:&quot;10&quot;}}]">
                            <div className="rows-space-0">
                                <a target="_blank" href="#" className="item" tabIndex={0}>
                                    <img className="img-responsive lazy" src="FE/assets/images/insta1.jpg" alt="Home 04" />
                                    <span className="instagram-info">
                                        <span className="social-wrap">
                                            <span className="social-info">1
                  <i className="flaticon-chat" />
                                            </span>
                                            <span className="social-info">0
                  <i className="flaticon-heart-shape-outline" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="rows-space-0">
                                <a target="_blank" href="#" className="item" tabIndex={0}>
                                    <img className="img-responsive lazy" src="FE/assets/images/insta2.jpg" alt="Home 04" />
                                    <span className="instagram-info">
                                        <span className="social-wrap">
                                            <span className="social-info">1
                  <i className="flaticon-chat" />
                                            </span>
                                            <span className="social-info">0
                  <i className="flaticon-heart-shape-outline" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="rows-space-0">
                                <a target="_blank" href="#" className="item" tabIndex={0}>
                                    <img className="img-responsive lazy" src="FE/assets/images/insta3.jpg" alt="Home 04" />
                                    <span className="instagram-info">
                                        <span className="social-wrap">
                                            <span className="social-info">1
                  <i className="flaticon-chat" />
                                            </span>
                                            <span className="social-info">0
                  <i className="flaticon-heart-shape-outline" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="rows-space-0">
                                <a target="_blank" href="#" className="item" tabIndex={0}>
                                    <img className="img-responsive lazy" src="FE/assets/images/insta4.jpg" alt="Home 04" />
                                    <span className="instagram-info">
                                        <span className="social-wrap">
                                            <span className="social-info">1
                  <i className="flaticon-chat" />
                                            </span>
                                            <span className="social-info">0
                  <i className="flaticon-heart-shape-outline" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="rows-space-0">
                                <a target="_blank" href="#" className="item" tabIndex={0}>
                                    <img className="img-responsive lazy" src="FE/assets/images/insta5.jpg" alt="Home 04" />
                                    <span className="instagram-info">
                                        <span className="social-wrap">
                                            <span className="social-info">1
                  <i className="flaticon-chat" />
                                            </span>
                                            <span className="social-info">0
                  <i className="flaticon-heart-shape-outline" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="rows-space-0">
                                <a target="_blank" href="#" className="item" tabIndex={0}>
                                    <img className="img-responsive lazy" src="FE/assets/images/insta6.jpg" alt="Home 04" />
                                    <span className="instagram-info">
                                        <span className="social-wrap">
                                            <span className="social-info">1
                  <i className="flaticon-chat" />
                                            </span>
                                            <span className="social-info">0
                  <i className="flaticon-heart-shape-outline" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="rows-space-0">
                                <a target="_blank" href="#" className="item" tabIndex={0}>
                                    <img className="img-responsive lazy" src="FE/assets/images/insta7.jpg" alt="Home 04" />
                                    <span className="instagram-info">
                                        <span className="social-wrap">
                                            <span className="social-info">1
                  <i className="flaticon-chat" />
                                            </span>
                                            <span className="social-info">0
                  <i className="flaticon-heart-shape-outline" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="rows-space-0">
                                <a target="_blank" href="#" className="item" tabIndex={0}>
                                    <img className="img-responsive lazy" src="FE/assets/images/insta8.jpg" alt="Home 04" />
                                    <span className="instagram-info">
                                        <span className="social-wrap">
                                            <span className="social-info">1
                  <i className="flaticon-chat" />
                                            </span>
                                            <span className="social-info">0
                  <i className="flaticon-heart-shape-outline" />
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="border-top-1"></div>
            </div>
        
    
        </>
    )
}

export default Homepage
